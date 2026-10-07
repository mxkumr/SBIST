"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollAnimations";
import { aboutContent } from "@/lib/home-content";

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

function TrophyIcon() {
  return (
    <svg
      className="h-9 w-9 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM17 4h2a2 2 0 012 2v1a4 4 0 01-4 4M7 4H5a2 2 0 00-2 2v1a4 4 0 004 4"
      />
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

function AboutImage({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`group relative min-h-[200px] flex-1 overflow-hidden rounded-2xl border border-border bg-white shadow-sm motion-lift ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={100}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="bg-surface py-20 lg:py-28" id="about">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Images */}
          <ScrollReveal direction="left" className="h-full">
            <div className="flex h-full flex-col gap-4">
              <AboutImage
                src={aboutContent.images.primary}
                alt="SBIST auditorium"
                priority
                className="hidden lg:block"
              />
              <AboutImage
                src={aboutContent.images.secondary}
                alt="Computer lab at SBIST"
                priority
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={0.1} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-2xl border border-border bg-background p-8 lg:p-10">
              <div className="flex items-center gap-2.5">
                <MortarboardIcon />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {aboutContent.eyebrow}
                </span>
              </div>

              <h2 className="mt-4 text-3xl leading-tight text-foreground lg:text-[2.25rem]">
                {aboutContent.title}
              </h2>

              <div className="mt-5 space-y-4 border-b border-border pb-8 text-[15px] leading-relaxed text-muted">
                {aboutContent.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-5">
                <div className="flex h-full flex-col justify-center rounded-xl border border-border bg-surface px-5 py-6 sm:col-span-3">
                  <ul className="flex flex-col justify-center gap-4">
                    {aboutContent.highlights.map((item) => (
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
                </div>

                <aside className="h-full sm:col-span-2">
                  <div className="flex h-full min-h-full flex-col justify-center rounded-xl bg-primary px-5 py-6 text-white">
                    <TrophyIcon />
                    <p className="mt-3 text-2xl font-semibold leading-none">
                      {aboutContent.stat.value}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{aboutContent.stat.label}</p>
                    {aboutContent.stat.description ? (
                      <p className="mt-2 text-xs leading-relaxed text-white/75">
                        {aboutContent.stat.description}
                      </p>
                    ) : null}
                  </div>
                </aside>
              </div>

              <div className="mt-8 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary/25 hover:shadow-md"
                >
                  More About Us
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
