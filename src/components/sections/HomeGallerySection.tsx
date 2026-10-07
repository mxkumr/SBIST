"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/ScrollAnimations";
import { homeGalleryContent, type HomeGalleryItem } from "@/lib/home-content";

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

function GalleryFrame({
  item,
  className = "",
  sizes,
  onOpen,
}: {
  item: HomeGalleryItem;
  className?: string;
  sizes: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${className}`}
      aria-label={`View ${item.label}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        quality={100}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
          SBIST Moment
        </span>
        <p className="mt-1 font-serif text-base font-semibold text-white sm:text-lg">
          {item.label}
        </p>
      </div>
    </button>
  );
}

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: HomeGalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery lightbox"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <button
        type="button"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10 sm:left-6"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        className="relative flex h-[75vh] w-full max-w-5xl flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative min-h-0 flex-1">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            quality={100}
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>
        <div className="mt-4 text-center">
          <p className="font-serif text-lg text-white">{item.label}</p>
          <p className="mt-1 text-sm text-white/60">
            {index + 1} / {items.length}
          </p>
        </div>
      </div>

      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10 sm:right-6"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export function HomeGallerySection() {
  const { eyebrow, title, description, items, viewMoreHref, viewMoreLabel } =
    homeGalleryContent;
  const hero = items.find((i) => i.role === "hero")!;
  const sides = items.filter((i) => i.role === "side");
  const strip = items.filter((i) => i.role === "strip");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openItem = (item: HomeGalleryItem) => {
    const index = items.findIndex((i) => i.src === item.src);
    setActiveIndex(index >= 0 ? index : 0);
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28" id="gallery">
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

            <Link
              href={viewMoreHref}
              className="inline-flex shrink-0 items-center gap-2 self-start border-b border-primary pb-1 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent sm:self-auto"
            >
              {viewMoreLabel}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[minmax(280px,1fr)_minmax(200px,0.75fr)]">
          <ScrollReveal className="lg:col-span-7 lg:row-span-2">
            <GalleryFrame
              item={hero}
              className="h-full min-h-[280px] w-full sm:min-h-[360px] lg:min-h-[520px]"
              sizes="(max-width: 1024px) 100vw, 60vw"
              onOpen={() => openItem(hero)}
            />
          </ScrollReveal>

          {sides.map((item, index) => (
            <ScrollReveal
              key={item.src}
              delay={0.08 + index * 0.06}
              className="lg:col-span-5"
            >
              <GalleryFrame
                item={item}
                className="h-full min-h-[200px] w-full sm:min-h-[220px]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                onOpen={() => openItem(item)}
              />
            </ScrollReveal>
          ))}
        </div>

        <StaggerContainer
          className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-4 md:grid-cols-3 lg:grid-cols-6"
          stagger={0.05}
        >
          {strip.map((item) => (
            <StaggerItem key={item.src}>
              <GalleryFrame
                item={item}
                className="aspect-[3/4] w-full sm:aspect-[4/5]"
                sizes="(max-width: 768px) 50vw, 16vw"
                onOpen={() => openItem(item)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {activeIndex !== null && (
        <Lightbox
          items={items}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={() =>
            setActiveIndex((i) =>
              i === null ? 0 : (i - 1 + items.length) % items.length
            )
          }
          onNext={() =>
            setActiveIndex((i) => (i === null ? 0 : (i + 1) % items.length))
          }
        />
      )}
    </section>
  );
}
