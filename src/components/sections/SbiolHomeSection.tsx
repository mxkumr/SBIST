"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import { sbiolHomeContent } from "@/lib/home-content";

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

export function SbiolHomeSection() {
  const content = sbiolHomeContent;

  return (
    <section className="bg-surface py-20 lg:py-28" id="sbiol">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <ScrollReveal direction="left" className="h-full">
            <div className="group relative min-h-[320px] h-full overflow-hidden rounded-2xl border border-border bg-primary shadow-sm motion-lift lg:min-h-[480px]">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{content.motto}</p>
                <p className="mt-2 font-heading text-2xl font-semibold text-white lg:text-3xl">{content.brand}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.08} className="h-full">
            <div className="flex h-full flex-col justify-center">
              <div className="flex items-center gap-2.5">
                <MortarboardIcon />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {content.eyebrow}
                </span>
              </div>

              <p className="mt-4 font-heading text-4xl font-semibold leading-none tracking-tight text-foreground lg:text-5xl">
                {content.brand}
              </p>
              <h2 className="mt-4 text-2xl leading-tight text-foreground lg:text-[1.75rem]">{content.title}</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{content.description}</p>

              <StaggerContainer className="mt-8 space-y-3" stagger={0.05}>
                {content.programs.map((program) => (
                  <StaggerItem key={program.title}>
                    <Link
                      href={program.href}
                      className="group flex items-start justify-between gap-4 overflow-hidden rounded-2xl border border-border bg-white p-4 shadow-sm motion-lift transition-shadow hover:shadow-md sm:p-5"
                    >
                      <div className="min-w-0">
                        <p className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                          {program.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{program.description}</p>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                          {program.detail}
                        </p>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <StaggerContainer className="mt-8 grid grid-cols-3 gap-4" stagger={0.05}>
                {content.stats.map((stat) => (
                  <StaggerItem key={stat.label}>
                    <p className="font-serif text-2xl text-primary lg:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wide text-muted">{stat.label}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href={content.primaryCta.href}
                  className="inline-flex items-center gap-3 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary/25 hover:shadow-md"
                >
                  {content.primaryCta.label}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <a
                  href={content.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  {content.secondaryCta.label}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
