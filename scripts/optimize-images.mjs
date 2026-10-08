/**
 * High-quality image optimization for public/images.
 * - Resizes photos larger than MAX_EDGE
 * - Re-encodes JPEG with mozjpeg (quality 90)
 * - Optimizes PNG; photo-like opaque PNGs become high-quality JPEG (+ path map)
 * Keeps visual quality high while cutting multi‑MB camera originals.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/images");
const MAX_EDGE = 2560;
const JPEG_QUALITY = 90;
const PNG_QUALITY = 90;
const MIN_BYTES_TO_TOUCH = 120 * 1024; // skip already-small assets unless oversized

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP"]);

/** Opaque PNGs that are photographic / large posters - convert to JPEG for size */
const FORCE_JPEG_FROM_PNG = new Set([
  "campus-sports.png",
  "Library_AI.png",
  "civil_eng.png",
  "students-library.png",
  "main_block_admission.png",
]);

/** Designed graphic banners with text - keep PNG, slightly tighter max edge */
const GRAPHIC_PNG_MAX_EDGE = 2000;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function relFromImages(abs) {
  return path.relative(ROOT, abs).split(path.sep).join("/");
}

function isGraphicBanner(rel) {
  const base = path.basename(rel).toLowerCase();
  return (
    base.startsWith("main-academic-block") ||
    base.includes("admission") ||
    base.startsWith("admissions-open") ||
    base.includes("hero-desktop") ||
    base.includes("hero-campus") ||
    base.includes("b0793b6f") ||
    base.includes("4e8545ee")
  );
}

async function optimizeJpeg(abs, meta) {
  const maxEdge = MAX_EDGE;
  const needsResize =
    (meta.width && meta.width > maxEdge) || (meta.height && meta.height > maxEdge);

  let pipeline = sharp(abs, { failOn: "none" }).rotate();
  if (needsResize) {
    pipeline = pipeline.resize({
      width: maxEdge,
      height: maxEdge,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const buf = await pipeline
    .jpeg({
      quality: JPEG_QUALITY,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: "4:4:4",
    })
    .toBuffer();

  return { buf, ext: path.extname(abs) };
}

async function optimizePng(abs, meta, rel) {
  const graphic = isGraphicBanner(rel);
  const maxEdge = graphic ? GRAPHIC_PNG_MAX_EDGE : MAX_EDGE;
  const needsResize =
    (meta.width && meta.width > maxEdge) || (meta.height && meta.height > maxEdge);

  const hasAlpha = Boolean(meta.hasAlpha);
  const base = path.basename(rel);
  const convertToJpeg =
    !hasAlpha && (FORCE_JPEG_FROM_PNG.has(base) || (meta.size && meta.size > 1.5 * 1024 * 1024));

  let pipeline = sharp(abs, { failOn: "none" }).rotate();
  if (needsResize) {
    pipeline = pipeline.resize({
      width: maxEdge,
      height: maxEdge,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  if (convertToJpeg) {
    const buf = await pipeline
      .jpeg({
        quality: JPEG_QUALITY,
        mozjpeg: true,
        progressive: true,
        chromaSubsampling: "4:4:4",
      })
      .toBuffer();
    return { buf, ext: ".jpg", converted: true };
  }

  const buf = await pipeline
    .png({
      compressionLevel: 9,
      quality: PNG_QUALITY,
      effort: 10,
      palette: false,
    })
    .toBuffer();

  return { buf, ext: path.extname(abs), converted: false };
}

async function optimizeWebp(abs, meta) {
  const needsResize =
    (meta.width && meta.width > MAX_EDGE) || (meta.height && meta.height > MAX_EDGE);
  let pipeline = sharp(abs, { failOn: "none" }).rotate();
  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    });
  }
  const buf = await pipeline.webp({ quality: JPEG_QUALITY, effort: 6 }).toBuffer();
  return { buf, ext: ".webp" };
}

async function main() {
  if (!fs.existsSync(ROOT)) {
    console.error("Missing public/images");
    process.exit(1);
  }

  const files = walk(ROOT).filter((f) => IMAGE_EXT.has(path.extname(f)));
  const renames = []; // { from: '/images/...png', to: '/images/...jpg' }
  let saved = 0;
  let touched = 0;
  let skipped = 0;

  console.log(`Found ${files.length} images under public/images\n`);

  for (const abs of files) {
    const rel = relFromImages(abs);
    const before = fs.statSync(abs).size;
    let meta;
    try {
      meta = await sharp(abs, { failOn: "none" }).metadata();
      meta.size = before;
    } catch (err) {
      console.warn(`SKIP (unreadable): ${rel} - ${err.message}`);
      skipped++;
      continue;
    }

    const oversized =
      (meta.width && meta.width > MAX_EDGE) || (meta.height && meta.height > MAX_EDGE);
    if (before < MIN_BYTES_TO_TOUCH && !oversized) {
      skipped++;
      continue;
    }

    const ext = path.extname(abs).toLowerCase();
    let result;
    try {
      if (ext === ".png") result = await optimizePng(abs, meta, rel);
      else if (ext === ".webp") result = await optimizeWebp(abs, meta);
      else result = await optimizeJpeg(abs, meta);
    } catch (err) {
      console.warn(`SKIP (encode fail): ${rel} - ${err.message}`);
      skipped++;
      continue;
    }

    // Never grow the file
    if (result.buf.length >= before && !result.converted) {
      skipped++;
      continue;
    }

    if (result.converted) {
      const newAbs = abs.replace(/\.png$/i, ".jpg");
      fs.writeFileSync(newAbs, result.buf);
      if (newAbs !== abs) fs.unlinkSync(abs);
      const fromUrl = `/images/${rel}`;
      const toUrl = `/images/${rel.replace(/\.png$/i, ".jpg")}`;
      renames.push({ from: fromUrl, to: toUrl });
      const after = result.buf.length;
      saved += before - after;
      touched++;
      console.log(
        `CONVERT ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024 / 1024).toFixed(2)}MB  ${rel} → ${path.basename(newAbs)}`,
      );
    } else {
      // Preserve original extension casing by writing over same path
      const tmp = abs + ".opt.tmp";
      fs.writeFileSync(tmp, result.buf);
      fs.renameSync(tmp, abs);
      const after = result.buf.length;
      saved += before - after;
      touched++;
      console.log(
        `OPT     ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024 / 1024).toFixed(2)}MB  ${rel}`,
      );
    }
  }

  const mapPath = path.resolve("scripts/image-renames.json");
  fs.writeFileSync(mapPath, JSON.stringify(renames, null, 2));

  console.log(`\nDone. Touched ${touched}, skipped ${skipped}.`);
  console.log(`Saved ~${(saved / 1024 / 1024).toFixed(1)} MB`);
  if (renames.length) {
    console.log(`PNG→JPG renames: ${renames.length} (see scripts/image-renames.json)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
