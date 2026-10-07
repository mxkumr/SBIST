"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import { leadershipPageContent } from "@/lib/leadership-content";

function MortarboardIcon({ className = "h-5 w-5 shrink-0 text-accent" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 8l10 5 10-5-10-5zM4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10l-10 5" />
    </svg>
  );
}

function DecorativeBlobs() {
  return (
    <>
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10" aria-hidden />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-primary/5" aria-hidden />
    </>
  );
}

function SectionCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm ${className}`}>
      <DecorativeBlobs />
      <div className="relative">{children}</div>
    </div>
  );
}

function CardHeaderStrip({
  eyebrow,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`relative border-b border-border bg-surface/60 px-6 py-5 lg:px-8 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <div className={`flex items-center gap-2.5 ${align === "center" ? "justify-center" : ""}`}>
        {align === "left" && <MortarboardIcon />}
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</span>
      </div>
      {subtitle && (
        <p className={`mt-1.5 text-sm text-muted ${align === "center" ? "" : "max-w-2xl"}`}>{subtitle}</p>
      )}
      <div
        className={`mt-3 h-0.5 w-10 rounded-full bg-accent/50 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
    </div>
  );
}

function AccentBar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-0.5 w-8 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-12 group-hover:bg-accent ${className}`}
      aria-hidden
    />
  );
}

function QuoteMark() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white shadow-sm">
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
      </svg>
    </div>
  );
}

function TextBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 56)}>{paragraph}</p>
      ))}
    </div>
  );
}

export function LeadershipIntroSection() {
  const { intro } = leadershipPageContent;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <SectionCard>
            <div className="grid items-stretch lg:grid-cols-2">
              <div className="flex flex-col">
                <CardHeaderStrip eyebrow={intro.eyebrow} subtitle={intro.tagline} align="left" />
                <div className="flex flex-1 flex-col justify-center px-6 py-8 lg:px-10 lg:py-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{intro.role}</p>
                  <h2 className="mt-3 font-heading text-3xl leading-tight text-foreground lg:text-4xl">
                    {intro.name}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-primary">{intro.formalName}</p>
                  <TextBlock paragraphs={intro.paragraphs} />
                  <AccentBar className="group mt-8" />
                </div>
              </div>

              <div className="group relative min-h-[320px] overflow-hidden border-t border-border lg:min-h-full lg:border-l lg:border-t-0">
                <Image
                  src={intro.image}
                  alt={intro.imageAlt}
                  fill
                  quality={100}
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-primary/40 px-5 py-4 backdrop-blur-sm">
                  <p className="font-heading text-base font-semibold text-white">{intro.formalName}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    {intro.role}
                  </p>
                </div>
              </div>
            </div>
          </SectionCard>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function LeadershipInstitutionsSection() {
  const { institutions } = leadershipPageContent;

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <SectionCard>
            <CardHeaderStrip eyebrow={institutions.eyebrow} subtitle={institutions.description} align="left" />
            <div className="px-6 py-8 lg:px-8">
              <h2 className="text-3xl leading-tight text-foreground lg:text-4xl">{institutions.title}</h2>
              <AccentBar className="group mt-4" />
            </div>
          </SectionCard>
        </ScrollReveal>

        <StaggerContainer className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-8" stagger={0.06}>
          {institutions.groups.map((group) => (
            <StaggerItem key={group.title}>
              <SectionCard className="group motion-lift h-full">
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{group.title}</p>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <AccentBar className="mt-6" />
                </div>
              </SectionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function LeadershipNarrativeSection() {
  const { beyondAdmin, healthcare, education, sectors, philosophy, lookingAhead } =
    leadershipPageContent;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-8">
        <ScrollReveal>
          <SectionCard>
            <CardHeaderStrip eyebrow={beyondAdmin.eyebrow} subtitle="People, performance and sustainable development" align="left" />
            <div className="px-6 py-8 lg:px-10 lg:py-10">
              <h2 className="text-3xl leading-tight text-foreground lg:text-[2.25rem]">{beyondAdmin.title}</h2>
              <TextBlock paragraphs={beyondAdmin.paragraphs} />
              <AccentBar className="group mt-8" />
            </div>
          </SectionCard>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <SectionCard>
            <div className="grid items-stretch lg:grid-cols-2">
              <div className="flex flex-col">
                <CardHeaderStrip eyebrow={healthcare.eyebrow} subtitle="Compassion at the centre of care" align="left" />
                <div className="flex flex-1 flex-col justify-center px-6 py-8 lg:px-10 lg:py-10">
                  <h2 className="text-3xl leading-tight text-foreground lg:text-[2.25rem]">{healthcare.title}</h2>
                  <TextBlock paragraphs={healthcare.paragraphs} />
                  <AccentBar className="group mt-8" />
                </div>
              </div>
              <div className="flex flex-col justify-center border-t border-border bg-primary px-6 py-10 text-white lg:border-l lg:border-t-0 lg:px-10">
                <QuoteMark />
                <blockquote className="mt-5 font-serif text-xl italic leading-relaxed lg:text-2xl">
                  &ldquo;{healthcare.quote}&rdquo;
                </blockquote>
                <ul className="mt-8 space-y-3">
                  {healthcare.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/85">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <SectionCard>
            <CardHeaderStrip eyebrow={education.eyebrow} subtitle="Preparing the next generation of professionals" align="left" />
            <div className="px-6 py-8 lg:px-10 lg:py-10">
              <h2 className="text-3xl leading-tight text-foreground lg:text-[2.25rem]">{education.title}</h2>
              <TextBlock paragraphs={education.paragraphs} />
              <AccentBar className="group mt-8" />
            </div>
          </SectionCard>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <SectionCard>
            <CardHeaderStrip eyebrow={sectors.eyebrow} subtitle="People, process, innovation and responsibility" align="left" />
            <div className="px-6 py-8 lg:px-10 lg:py-10">
              <h2 className="text-3xl leading-tight text-foreground lg:text-[2.25rem]">{sectors.title}</h2>
              <TextBlock paragraphs={sectors.paragraphs} />
              <AccentBar className="group mt-8" />
            </div>
          </SectionCard>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <SectionCard>
            <div className="bg-primary px-6 py-10 text-white lg:px-10 lg:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{philosophy.eyebrow}</p>
              <h2 className="mt-4 font-heading text-3xl leading-tight lg:text-4xl">{philosophy.title}</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-white/80">
                {philosophy.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 56)}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 h-0.5 w-12 rounded-full bg-accent" aria-hidden />
            </div>
          </SectionCard>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <SectionCard>
            <CardHeaderStrip eyebrow={lookingAhead.eyebrow} subtitle="Institutional excellence and social impact" align="left" />
            <div className="px-6 py-8 lg:px-10 lg:py-10">
              <h2 className="font-heading text-3xl leading-tight text-foreground lg:text-[2.25rem]">
                {lookingAhead.title}
              </h2>
              <TextBlock paragraphs={lookingAhead.paragraphs} />
              <div className="mt-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary/25 hover:shadow-md"
                >
                  Back to About
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:scale-110">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </SectionCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
