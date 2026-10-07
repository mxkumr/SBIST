"use client";

import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import { campusLifeContent, type CampusLifeTile } from "@/lib/home-content";

const bentoGridClass =
  "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(190px,1fr)]";

function BentoCell({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`h-full min-h-[190px] ${className}`}>{children}</div>;
}

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
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 8l10 5 10-5-10-5zM4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10l-10 5" />
    </svg>
  );
}

type CampusBentoTileProps = {
  tile: CampusLifeTile;
  size?: "featured" | "tall" | "default" | "wide";
  priority?: boolean;
};

function CampusBentoTile({ tile, size = "default", priority = false }: CampusBentoTileProps) {
  const titleClass =
    size === "featured"
      ? "text-2xl sm:text-3xl lg:text-[2rem]"
      : size === "wide"
        ? "text-xl lg:text-2xl"
        : "text-lg lg:text-xl";

  const descriptionClass =
    size === "featured"
      ? "line-clamp-4 sm:line-clamp-5"
      : size === "tall"
        ? "line-clamp-5"
        : "line-clamp-2 sm:line-clamp-3";

  return (
    <Link
      href={tile.href ?? "/about"}
      className="group relative flex h-full min-h-[190px] overflow-hidden rounded-2xl border border-border bg-primary shadow-sm motion-lift transition-shadow hover:shadow-lg"
    >
      <Image
        src={tile.image}
        alt={tile.title}
        fill
        priority={priority}
        quality={100}
        className={[
          "object-cover transition-transform duration-500 group-hover:scale-105",
          size === "wide" ? "object-center lg:object-[center_28%]" : "",
        ].join(" ")}
        sizes={
          size === "featured"
            ? "(max-width: 1024px) 100vw, 60vw"
            : size === "wide"
              ? "100vw"
              : "(max-width: 1024px) 50vw, 33vw"
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary/50 to-primary/15" />
      <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-primary/5" />

      <div
        className={[
          "relative flex h-full flex-col justify-end",
          size === "featured" ? "p-6 sm:p-8 lg:p-10" : "p-5 lg:p-6",
        ].join(" ")}
      >
        <span className="mb-2 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90">
          Campus
        </span>
        <h3 className={`font-serif font-semibold leading-snug text-white ${titleClass}`}>
          {tile.title}
        </h3>
        <p className={`mt-2 text-sm leading-relaxed text-white/80 ${descriptionClass}`}>
          {tile.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
          Explore
          <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function CampusLifeStatTile() {
  return (
    <Link
      href={campusLifeContent.viewAllHref}
      className="group flex h-full min-h-[190px] flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm motion-lift transition-shadow hover:shadow-lg lg:p-7"
    >
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Campus Life
        </span>
        <h3 className="mt-4 text-xl font-semibold leading-snug text-primary lg:text-2xl">
          Dance, Arts &amp; Cultural
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          From dance and arts clubs to cultural events, SBIST offers a vibrant campus experience beyond academics.
        </p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
        Learn more
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}

export function CampusLifeSection() {
  const { eyebrow, title, tiles } = campusLifeContent;
  const [campus, library, lecture, lab, graduation, sports] = tiles;

  return (
    <section className="bg-background py-20 lg:py-28" id="campus-life">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-2.5">
                <MortarboardIcon />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {eyebrow}
                </span>
              </div>
              <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">
                {title}
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className={bentoGridClass} stagger={0.07}>
          <StaggerItem className="sm:col-span-2 lg:col-span-7 lg:row-span-2">
            <BentoCell className="h-full">
              <CampusBentoTile tile={campus} size="featured" priority />
            </BentoCell>
          </StaggerItem>

          <StaggerItem className="lg:col-span-5">
            <BentoCell className="h-full">
              <CampusBentoTile tile={library} size="default" />
            </BentoCell>
          </StaggerItem>

          <StaggerItem className="lg:col-span-5">
            <BentoCell className="h-full">
              <CampusBentoTile tile={lecture} size="default" />
            </BentoCell>
          </StaggerItem>

          <StaggerItem className="lg:col-span-4">
            <BentoCell className="h-full">
              <CampusBentoTile tile={lab} size="default" />
            </BentoCell>
          </StaggerItem>

          <StaggerItem className="lg:col-span-4">
            <BentoCell className="h-full">
              <CampusBentoTile tile={graduation} size="tall" />
            </BentoCell>
          </StaggerItem>

          <StaggerItem className="lg:col-span-4">
            <BentoCell className="h-full">
              <CampusLifeStatTile />
            </BentoCell>
          </StaggerItem>

          <StaggerItem className="sm:col-span-2 lg:col-span-12">
            <BentoCell className="h-full">
              <CampusBentoTile tile={sports} size="wide" />
            </BentoCell>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
