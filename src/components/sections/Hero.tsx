"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroContent } from "@/lib/home-content";

/** Sky band: image fades in below so the hero watermark stays visible in open sky */
const IMAGE_SKY_MASK =
  "linear-gradient(to bottom, transparent 0%, transparent 20%, rgba(0,0,0,0.45) 26%, rgba(0,0,0,0.9) 34%, black 42%, black 100%)";

function PlayIcon() {
  return (
    <svg className="ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function NavArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
      {direction === "prev" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}

function Watermark({ y }: { y?: ReturnType<typeof useTransform<number, string>> }) {
  const text = (
    <span className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center text-primary sm:px-6 lg:px-8">
      <span className="font-watermark max-w-full text-balance text-xl font-bold uppercase leading-[1.15] tracking-[0.04em] drop-shadow-[0_2px_8px_rgba(15,39,68,0.18)] sm:text-[clamp(1.25rem,2.2vw+0.5rem,2.75rem)]">
        {heroContent.watermark}
      </span>
      <span className="mt-4 flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-primary/80 sm:mt-5 sm:gap-x-3 sm:text-sm sm:tracking-[0.2em] md:text-base">
        <span className="hidden h-px w-6 bg-accent sm:block sm:w-10 lg:w-12" />
        <span className="font-watermark-alt text-balance">
          {heroContent.watermarkSubtitle}
        </span>
        <span className="hidden h-px w-6 bg-accent sm:block sm:w-10 lg:w-12" />
      </span>
    </span>
  );

  const className =
    "pointer-events-none absolute inset-x-0 top-[12%] z-6 flex justify-center select-none";

  if (y) {
    return (
      <motion.div aria-hidden className={className} style={{ y }}>
        {text}
      </motion.div>
    );
  }

  return (
    <div aria-hidden className={className}>
      {text}
    </div>
  );
}

function BannerSlide({
  banner,
}: {
  banner: (typeof heroContent.banners)[number];
}) {
  const isGraphic = Boolean(banner.graphicBanner);

  // For the designed poster frames, bypass Next/Image optimization entirely
  // to avoid any compression/resampling that can make text look soft.
  if (isGraphic) {
    return (
      <>
        <img
          src={banner.mobileSrc}
          alt={banner.alt}
          className={[
            "absolute inset-0 h-full w-full max-w-none object-cover opacity-100 transition-opacity duration-700 ease-in-out md:pointer-events-none md:opacity-0",
            banner.mobileObjectPosition,
          ]
            .filter(Boolean)
            .join(" ")}
          loading="eager"
          draggable={false}
        />
        <img
          src={banner.desktopSrc}
          alt={banner.alt}
          className={[
            "absolute inset-0 h-full w-full max-w-none object-cover opacity-0 transition-opacity duration-700 ease-in-out md:opacity-100",
            banner.desktopObjectPosition,
          ]
            .filter(Boolean)
            .join(" ")}
          loading="eager"
          draggable={false}
        />
      </>
    );
  }

  return (
    <>
      <Image
        src={banner.mobileSrc}
        alt={banner.alt}
        fill
        priority
        quality={100}
        unoptimized={false}
        className={[
          "object-cover opacity-100 transition-opacity duration-700 ease-in-out md:pointer-events-none md:opacity-0",
          banner.mobileObjectPosition,
        ]
          .filter(Boolean)
          .join(" ")}
        sizes="100vw"
      />
      <Image
        src={banner.desktopSrc}
        alt={banner.alt}
        fill
        priority
        quality={100}
        unoptimized={false}
        className={[
          "object-cover opacity-0 transition-opacity duration-700 ease-in-out md:opacity-100",
          banner.desktopObjectPosition,
        ]
          .filter(Boolean)
          .join(" ")}
        sizes="100vw"
      />
    </>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const banners = heroContent.banners;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = banners[index];
  const isGraphicBanner = Boolean(active.graphicBanner);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % banners.length) + banners.length) % banners.length);
    },
    [banners.length],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (prefersReducedMotion || paused || banners.length < 2) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, heroContent.bannerIntervalMs);

    return () => window.clearInterval(timer);
  }, [banners.length, paused, prefersReducedMotion]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const imageLayer = (
    <AnimatePresence mode="sync" initial={false}>
      <motion.div
        key={active.id}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div
          className="absolute inset-0"
          style={
            active.skyMask
              ? {
                  WebkitMaskImage: IMAGE_SKY_MASK,
                  maskImage: IMAGE_SKY_MASK,
                }
              : undefined
          }
        >
          <BannerSlide banner={active} />
        </div>
        {!active.skyMask && (
          <div
            className={[
              "pointer-events-none absolute inset-0 bg-linear-to-b from-primary-dark/35 via-transparent to-transparent",
              isGraphicBanner ? "hidden md:block" : "",
            ].join(" ")}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section
      ref={ref}
      className="relative min-h-dvh w-full overflow-hidden bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Campus banners"
    >
      {active.skyMask && (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-1 h-[38%] bg-linear-to-b from-background via-background to-transparent" />
      )}

      <AnimatePresence mode="wait">
        {active.showWatermark &&
          (prefersReducedMotion ? (
            <motion.div
              key="watermark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Watermark />
            </motion.div>
          ) : (
            <motion.div
              key="watermark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Watermark y={watermarkY} />
            </motion.div>
          ))}
      </AnimatePresence>

      <div className="absolute inset-0 z-3">
        {prefersReducedMotion || isGraphicBanner ? (
          imageLayer
        ) : (
          <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
            {imageLayer}
          </motion.div>
        )}
      </div>

      {active.skyMask && (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-4 h-[32%] bg-linear-to-b from-background/60 via-transparent to-transparent" />
      )}

      <div
        className={[
          "pointer-events-none absolute inset-0 z-5 bg-linear-to-b from-transparent via-transparent to-[#0f2744]/92",
          isGraphicBanner ? "hidden md:block" : "",
        ].join(" ")}
      />
      <div
        className={[
          "pointer-events-none absolute inset-x-0 bottom-0 z-5 h-56 bg-linear-to-t from-[#0f2744] via-[#0f2744]/80 to-transparent",
          isGraphicBanner ? "hidden md:block" : "",
        ].join(" ")}
      />

      {banners.length > 1 && (
        <div className="pointer-events-none absolute inset-y-0 z-8 flex w-full items-center justify-between px-2 sm:px-5 lg:px-8">
          <button
            type="button"
            onClick={goPrev}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-primary/55 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-accent hover:bg-primary hover:text-accent-bright sm:h-12 sm:w-12"
            aria-label="Previous banner"
          >
            <NavArrowIcon direction="prev" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-primary/55 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-accent hover:bg-primary hover:text-accent-bright sm:h-12 sm:w-12"
            aria-label="Next banner"
          >
            <NavArrowIcon direction="next" />
          </button>
        </div>
      )}

      {banners.length > 1 && (
        <div
          className={[
            "absolute inset-x-0 z-8 flex justify-center gap-2",
            isGraphicBanner ? "bottom-2 md:bottom-6" : "bottom-4 sm:bottom-6",
          ].join(" ")}
        >
          {banners.map((banner, i) => (
            <button
              key={banner.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show banner ${i + 1}`}
              aria-current={i === index}
              className={[
                "h-1.5 rounded-full transition-all duration-500",
                i === index ? "w-8 bg-accent" : "w-1.5 bg-white/45 hover:bg-white/75",
              ].join(" ")}
            />
          ))}
        </div>
      )}

      {!isGraphicBanner &&
        (prefersReducedMotion ? (
          <div className="absolute inset-x-0 bottom-0 z-6 mx-auto max-w-7xl px-4 pb-10 pt-24 lg:px-8 lg:pb-14">
            <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
              <div className="max-w-2xl" />
              <CampusTourLink />
            </div>
          </div>
        ) : (
          <motion.div
            className="absolute inset-x-0 bottom-0 z-6 mx-auto max-w-7xl px-4 pb-10 pt-24 lg:px-8 lg:pb-14"
            style={{ y: contentY, opacity: contentOpacity }}
          >
            <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
              <div className="max-w-2xl" />
              <CampusTourLink />
            </div>
          </motion.div>
        ))}

      {isGraphicBanner && (
        <div className="absolute inset-x-0 bottom-0 z-6 mx-auto hidden max-w-7xl px-4 pb-10 pt-24 md:block lg:px-8 lg:pb-14">
          <div className="flex justify-end">
            <CampusTourLink />
          </div>
        </div>
      )}
    </section>
  );
}

function CampusTourLink() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 }}
    >
      <Link
        href={heroContent.campusTourHref}
        className="group flex flex-col items-center gap-3 text-white transition-opacity hover:opacity-90"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm transition-transform group-hover:scale-105">
          <PlayIcon />
        </span>
        <span className="text-sm font-semibold tracking-wide">
          {heroContent.campusTourLabel}
        </span>
      </Link>
    </motion.div>
  );
}
