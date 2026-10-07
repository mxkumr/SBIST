"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollReveal, premiumEase } from "@/components/motion/ScrollAnimations";
import { campusLifeGalleryContent } from "@/lib/home-content";

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

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      {direction === "prev" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}

export function CampusLifeGallerySection() {
  const { eyebrow, title, description, items } = campusLifeGalleryContent;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const active = items[index];

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % items.length) + items.length) % items.length);
    },
    [items.length],
  );

  const goPrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  // Keep active thumb in view horizontally only — never scroll the page
  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    const container = thumbsRef.current;
    const el = container?.querySelector<HTMLElement>(`[data-thumb="${index}"]`);
    if (!container || !el) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const offset =
      elRect.left -
      containerRect.left -
      containerRect.width / 2 +
      elRect.width / 2;

    container.scrollBy({
      left: offset,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [index, prefersReducedMotion]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? 48 : -48,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? -48 : 48,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-background py-20 lg:py-28"
      id="gallery"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(182,140,58,0.08),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(15,39,68,0.06),_transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
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

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-11 w-11 items-center justify-center border border-border bg-white text-primary transition-colors hover:border-accent hover:text-accent"
                aria-label="Previous photo"
              >
                <ArrowIcon direction="prev" />
              </button>
              <span className="min-w-[4.5rem] text-center text-sm font-semibold tabular-nums text-muted">
                {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={goNext}
                className="flex h-11 w-11 items-center justify-center border border-border bg-white text-primary transition-colors hover:border-accent hover:text-accent"
                aria-label="Next photo"
              >
                <ArrowIcon direction="next" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-10">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-dark sm:aspect-[16/9] lg:aspect-[21/10]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={active.src}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: premiumEase }}
                className="absolute inset-0"
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  quality={100}
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7 lg:p-8">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Gallery
                </span>
                <p className="mt-1 font-serif text-xl font-semibold text-white sm:text-2xl">
                  {active.label}
                </p>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <button
                  type="button"
                  onClick={goPrev}
                  className="pointer-events-auto flex h-12 w-12 items-center justify-center border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  aria-label="Previous photo"
                >
                  <ArrowIcon direction="prev" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="pointer-events-auto flex h-12 w-12 items-center justify-center border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  aria-label="Next photo"
                >
                  <ArrowIcon direction="next" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div
          ref={thumbsRef}
          className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="listbox"
          aria-label="Gallery thumbnails"
        >
          {items.map((item, i) => {
            const isActive = i === index;
            return (
              <button
                key={item.src}
                type="button"
                data-thumb={i}
                role="option"
                aria-selected={isActive}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden transition-opacity sm:h-20 sm:w-28 ${
                  isActive
                    ? "opacity-100 ring-2 ring-accent ring-offset-2 ring-offset-background"
                    : "opacity-55 hover:opacity-90"
                }`}
                aria-label={`Show ${item.label}`}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="112px"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
