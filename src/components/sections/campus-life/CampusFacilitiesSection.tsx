"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/motion/ScrollAnimations";
import {
  campusFacilitiesContent,
  type CampusFacility,
} from "@/lib/campus-life-content";

function MortarboardIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3L2 8l10 5 10-5-10-5zM4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10l-10 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ParallaxImage({
  src,
  alt,
  priority,
  sizes,
  className = "",
  imageY,
  imageScale,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  className?: string;
  imageY?: MotionValue<string>;
  imageScale?: MotionValue<number>;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-[-8%]"
        style={
          imageY || imageScale
            ? { y: imageY, scale: imageScale }
            : undefined
        }
      >
        <Image
          src={src}
          alt={alt}
          fill
          quality={100}
          priority={priority}
          className="object-cover"
          sizes={sizes}
        />
      </motion.div>
    </div>
  );
}

function FacilityPanel({
  facility,
  index,
  total,
}: {
  facility: CampusFacility;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const imageLeft = index % 2 === 0;
  const primary = facility.images[0];
  const secondary = facility.images[1];
  const tertiary = facility.images[2];
  const isLast = index === total - 1;

  // Progress while this panel is pinned and being covered
  const { scrollYProgress: exitProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Progress as the panel enters the viewport
  const { scrollYProgress: enterProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.35"],
  });

  const smoothExit = useSpring(exitProgress, {
    stiffness: 100,
    damping: 32,
    mass: 0.35,
    restDelta: 0.0005,
  });

  const smoothEnter = useSpring(enterProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
    restDelta: 0.0005,
  });

  // Exit: soft Apple-style stack handoff
  const panelScale = useTransform(
    smoothExit,
    [0, 0.25, 1],
    [1, 1, isLast ? 1 : 0.92],
  );
  const panelY = useTransform(
    smoothExit,
    [0, 0.25, 1],
    ["0%", "0%", isLast ? "0%" : "4%"],
  );
  const panelRadius = useTransform(
    smoothExit,
    [0, 0.3, 1],
    [0, 0, isLast ? 0 : 28],
  );
  const panelOpacity = useTransform(
    smoothExit,
    [0, 0.35, 1],
    [1, 1, isLast ? 1 : 0.72],
  );
  const overlay = useTransform(
    smoothExit,
    [0, 0.3, 1],
    [0, 0, isLast ? 0 : 0.28],
  );
  const shadow = useTransform(
    smoothExit,
    [0, 0.2, 1],
    [
      "0 0 0 rgba(15,39,68,0)",
      "0 0 0 rgba(15,39,68,0)",
      isLast
        ? "0 0 0 rgba(15,39,68,0)"
        : "0 24px 60px rgba(15,39,68,0.18)",
    ],
  );

  // Enter: content lifts into place
  const textOpacity = useTransform(smoothEnter, [0, 0.55, 1], [0, 0.4, 1]);
  const textY = useTransform(smoothEnter, [0, 1], [36, 0]);
  const textX = useTransform(
    smoothEnter,
    [0, 1],
    [imageLeft ? 28 : -28, 0],
  );

  // Images: slow ken-burns while pinned, settle on enter
  const imageScale = useTransform(
    smoothExit,
    [0, 1],
    [1, isLast ? 1.04 : 1.12],
  );
  const imageY = useTransform(
    smoothExit,
    [0, 1],
    ["0%", isLast ? "-2%" : "-6%"],
  );
  const mediaOpacity = useTransform(smoothEnter, [0, 0.4, 1], [0.35, 0.75, 1]);
  const mediaY = useTransform(smoothEnter, [0, 1], [48, 0]);

  const textBlock = (
    <motion.div
      className="flex flex-col justify-center"
      style={
        prefersReducedMotion
          ? undefined
          : { opacity: textOpacity, y: textY, x: textX }
      }
    >
      <div className="flex items-center gap-2.5">
        <MortarboardIcon />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {facility.eyebrow}
        </span>
      </div>
      <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.15rem]">
        {facility.title}
      </h2>
      <p className="mt-3 font-serif text-xl italic leading-snug text-primary lg:text-2xl">
        {facility.headline}
      </p>
      <div className="mt-4 h-0.5 w-10 rounded-full bg-accent/50" aria-hidden />
      <div className="mt-5 space-y-3 text-base leading-relaxed text-muted lg:text-[1.05rem]">
        {facility.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      <ul className="mt-6 space-y-2.5">
        {facility.highlights.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <CheckIcon />
            </span>
            <span className="text-sm font-medium leading-snug text-foreground">
              {item}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
    </motion.div>
  );

  const imageBlock = (
    <motion.div
      className="flex h-full min-h-0 flex-col gap-3"
      style={
        prefersReducedMotion
          ? undefined
          : { opacity: mediaOpacity, y: mediaY }
      }
    >
      <ParallaxImage
        src={primary.src}
        alt={primary.alt}
        priority={index === 0}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="min-h-[200px] flex-1 lg:min-h-0"
        imageY={prefersReducedMotion ? undefined : imageY}
        imageScale={prefersReducedMotion ? undefined : imageScale}
      />
      {(secondary || tertiary) && (
        <div className={`grid shrink-0 gap-3 ${tertiary ? "grid-cols-2" : "grid-cols-1"}`}>
          {secondary && (
            <ParallaxImage
              src={secondary.src}
              alt={secondary.alt}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="aspect-[16/9] lg:aspect-[16/8]"
              imageY={prefersReducedMotion ? undefined : imageY}
              imageScale={prefersReducedMotion ? undefined : imageScale}
            />
          )}
          {tertiary && (
            <ParallaxImage
              src={tertiary.src}
              alt={tertiary.alt}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="aspect-[16/9] lg:aspect-[16/8]"
              imageY={prefersReducedMotion ? undefined : imageY}
              imageScale={prefersReducedMotion ? undefined : imageScale}
            />
          )}
        </div>
      )}
    </motion.div>
  );

  const panelInner = (
    <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4 py-10 lg:px-8 lg:py-12">
      <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
        {imageLeft ? (
          <>
            <div className="min-h-[280px] lg:min-h-[420px]">{imageBlock}</div>
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            <div className="min-h-[280px] lg:min-h-[420px]">{imageBlock}</div>
          </>
        )}
      </div>
    </div>
  );

  const surfaceClass =
    index % 2 === 0 ? "bg-background" : "bg-surface";

  return (
    <section
      ref={ref}
      className="relative lg:h-[155svh]"
      style={{ zIndex: index + 1 }}
    >
      <div
        id={facility.id}
        className="scroll-mt-28 lg:sticky lg:top-20 lg:h-[calc(100svh-5rem)] lg:overflow-hidden"
      >
        {prefersReducedMotion ? (
          <div className={`relative h-full border-b border-border ${surfaceClass}`}>
            {panelInner}
          </div>
        ) : (
          <motion.div
            className={`relative h-full overflow-hidden border-b border-border will-change-transform ${surfaceClass}`}
            style={{
              scale: panelScale,
              y: panelY,
              opacity: panelOpacity,
              borderRadius: panelRadius,
              boxShadow: shadow,
              transformOrigin: "50% 20%",
            }}
          >
            {panelInner}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-primary-dark"
              style={{ opacity: overlay }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}

function StackProgress({
  facilities,
}: {
  facilities: CampusFacility[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.4,
  });
  const fillHeight = useTransform(smooth, [0, 1], ["0%", "100%"]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-0 lg:block"
      aria-hidden
    >
      <div className="sticky top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-3 pr-4 xl:pr-6">
        <div className="relative h-36 w-px overflow-hidden bg-border">
          <motion.div
            className="absolute inset-x-0 top-0 w-full origin-top bg-accent"
            style={{ height: fillHeight }}
          />
        </div>
        <div className="flex flex-col gap-2">
          {facilities.map((facility, index) => (
            <a
              key={facility.id}
              href={`#${facility.id}`}
              className="pointer-events-auto h-1.5 w-1.5 rounded-full bg-border transition-colors hover:bg-accent"
              aria-label={`Go to ${facility.title}`}
              title={facility.title}
              style={{ opacity: 0.55 + (index / facilities.length) * 0.45 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CampusFacilitiesSection() {
  const { eyebrow, title, description, facilities } = campusFacilitiesContent;

  return (
    <>
      <section className="border-y border-border bg-surface/40 py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5">
                <MortarboardIcon />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {eyebrow}
                </span>
              </div>
              <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">
                {description}
              </p>
              <div className="mt-4 h-0.5 w-10 rounded-full bg-accent/50" aria-hidden />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="relative">
        <StackProgress facilities={facilities} />
        {facilities.map((facility, index) => (
          <FacilityPanel
            key={facility.id}
            facility={facility}
            index={index}
            total={facilities.length}
          />
        ))}
      </div>
    </>
  );
}
