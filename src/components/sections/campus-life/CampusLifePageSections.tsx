"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollAnimations";
import { campusLifePageContent } from "@/lib/campus-life-content";

function MortarboardIcon({ className = "h-5 w-5 shrink-0 text-accent" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 8l10 5 10-5-10-5zM4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10l-10 5" />
    </svg>
  );
}

export function CampusLifeIntroSection() {
  const { intro } = campusLifePageContent;

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-2.5">
                  <MortarboardIcon />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {intro.eyebrow}
                  </span>
                </div>
                <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">
                  {intro.title}
                </h2>
                <div className="mt-4 h-0.5 w-10 rounded-full bg-accent/50" aria-hidden />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <blockquote className="mt-8 border-l-2 border-accent pl-5">
                <p className="font-serif text-xl italic leading-relaxed text-primary lg:text-2xl">
                  &ldquo;{intro.quote}&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>

            <div className="mt-8 space-y-5">
              {intro.paragraphs.map((paragraph) => (
                <ScrollReveal key={paragraph.slice(0, 32)}>
                  <p className="text-base leading-relaxed text-muted lg:text-lg">{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal direction="right" delay={0.1} className="h-full min-h-80 lg:min-h-0">
            <div className="relative h-full min-h-80 overflow-hidden rounded-2xl border border-border bg-white shadow-sm motion-lift lg:min-h-full">
              <Image
                src={intro.image}
                alt={intro.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={100}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
