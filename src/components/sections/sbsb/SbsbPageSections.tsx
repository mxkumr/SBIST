"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import { sbsbPageContent, type StudentClubIcon } from "@/lib/sbsb-content";

function MortarboardIcon({ className = "h-5 w-5 shrink-0 text-accent" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 8l10 5 10-5-10-5zM4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10l-10 5" />
    </svg>
  );
}

export function SbsbIntroSection() {
  const content = sbsbPageContent;

  return (
    <section className="bg-primary py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-2.5">
                <MortarboardIcon />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {content.eyebrow}
                </span>
              </div>
              <p className="mt-4 font-heading text-4xl font-semibold tracking-tight lg:text-5xl">{content.brand}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">{content.tagline}</p>
              <h2 className="mt-5 text-2xl leading-tight lg:text-3xl">{content.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">{content.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={content.charterHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-dark transition-colors hover:bg-accent-hover"
                >
                  Download Charter PDF
                </a>
                <Link
                  href="#clubs"
                  className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                >
                  View student clubs
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/15 lg:min-h-[420px]">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                quality={100}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Student-led</p>
                <p className="mt-2 font-serif text-xl text-white">Bridge between students and the institution</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function SbsbVisionMissionSection() {
  const { vision, mission, tagline } = sbsbPageContent;

  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-2.5">
            <MortarboardIcon />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Purpose</span>
          </div>
          <h2 className="mt-3 max-w-2xl text-3xl leading-tight text-foreground lg:text-[2.35rem]">
            Vision &amp; Mission
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary/70">{tagline}</p>
        </ScrollReveal>

        <div className="mt-10 grid items-stretch gap-0 overflow-hidden border border-border lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal direction="left" className="h-full">
            <div className="relative flex h-full flex-col justify-between bg-primary px-6 py-10 text-white lg:px-10 lg:py-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{vision.title}</p>
                <div className="mt-4 h-0.5 w-10 rounded-full bg-accent/60" aria-hidden />
                <p className="mt-8 font-heading text-2xl font-semibold leading-snug tracking-tight lg:text-[1.85rem] lg:leading-snug">
                  {vision.text}
                </p>
              </div>
              <p className="mt-12 font-serif text-6xl leading-none text-accent/25 lg:text-7xl" aria-hidden>
                &ldquo;
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.06} className="h-full">
            <div className="flex h-full flex-col bg-white px-6 py-10 lg:px-10 lg:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{mission.title}</p>
              <div className="mt-4 h-0.5 w-10 rounded-full bg-accent/60" aria-hidden />

              <StaggerContainer className="mt-8 grid flex-1 content-center gap-3 sm:grid-cols-2" stagger={0.04}>
                {mission.items.map((item, index) => (
                  <StaggerItem key={item}>
                    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-4 shadow-sm motion-lift transition-shadow hover:border-accent/35 hover:shadow-md lg:p-5">
                      <span className="font-heading text-lg font-semibold tabular-nums text-accent transition-colors group-hover:text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-3 text-sm leading-relaxed text-foreground lg:text-[15px]">{item}</p>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function SbsbPillarsSection() {
  const { pillars } = sbsbPageContent;

  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5">
                <MortarboardIcon />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {pillars.eyebrow}
                </span>
              </div>
              <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">{pillars.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{pillars.description}</p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
              {pillars.items.length} focus areas
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.045}>
          {pillars.items.map((pillar, index) => {
            const number = String(index + 1).padStart(2, "0");
            const isAccent = index % 3 === 0;

            return (
              <StaggerItem key={pillar.title}>
                <article
                  className={`group relative flex h-full min-h-[160px] flex-col overflow-hidden border p-6 motion-lift transition-all duration-300 lg:p-7 ${
                    isAccent
                      ? "border-primary/20 bg-primary text-white hover:border-accent/50"
                      : "border-border bg-white text-foreground hover:border-accent/40 hover:shadow-md"
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute -right-1 -top-3 select-none font-heading text-[5.5rem] font-semibold leading-none ${
                      isAccent ? "text-white/[0.08]" : "text-primary/[0.06]"
                    }`}
                    aria-hidden
                  >
                    {number}
                  </span>

                  <div className="relative flex h-full flex-col">
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                        isAccent ? "text-accent" : "text-accent"
                      }`}
                    >
                      {number}
                    </span>
                    <h3
                      className={`mt-4 font-heading text-xl font-semibold leading-snug tracking-tight ${
                        isAccent ? "text-white" : "text-foreground"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <div
                      className={`mt-3 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-12 ${
                        isAccent ? "bg-accent/70 group-hover:bg-accent" : "bg-accent/40 group-hover:bg-accent"
                      }`}
                      aria-hidden
                    />
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        isAccent ? "text-white/75" : "text-muted"
                      }`}
                    >
                      {pillar.detail}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function SbsbLeadershipSection() {
  const { leadership } = sbsbPageContent;

  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{leadership.eyebrow}</p>
            <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">{leadership.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{leadership.description}</p>
          </div>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <StaggerContainer className="grid gap-3 sm:grid-cols-2" stagger={0.04}>
            {leadership.roles.map((role) => (
              <StaggerItem key={role}>
                <div className="rounded-2xl border border-border bg-white px-5 py-4 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">{role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal delay={0.06}>
            <div className="h-full rounded-2xl border border-border bg-primary p-6 text-white lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Committees</p>
              <ul className="mt-4 space-y-3">
                {leadership.committees.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-base text-white/85">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function SbsbClubGroupsSection() {
  const { clubGroups } = sbsbPageContent;

  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{clubGroups.eyebrow}</p>
              <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">{clubGroups.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{clubGroups.description}</p>
            </div>
            <Link
              href="#clubs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
            >
              Browse all clubs
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {clubGroups.items.map((group) => (
            <ScrollReveal key={group.title}>
              <div className="h-full rounded-2xl border border-border bg-white px-5 py-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{group.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SbsbEventsSection() {
  const { events } = sbsbPageContent;

  return (
    <section id="events" className="scroll-mt-28 bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{events.eyebrow}</p>
            <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">{events.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{events.description}</p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {events.items.map((event) => (
            <StaggerItem key={event.title}>
              <article className="group relative flex min-h-[220px] overflow-hidden rounded-2xl border border-border shadow-sm motion-lift">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  quality={100}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent" />
                <div className="relative mt-auto p-5">
                  <h3 className="font-heading text-lg font-semibold text-white">{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{event.detail}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

type IconProps = { className?: string };

function ClubIcon({ name, className = "h-5 w-5" }: { name: StudentClubIcon; className?: string }) {
  const icons: Record<StudentClubIcon, (props: IconProps) => ReactNode> = {
    sports: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9z" />
        <path strokeLinecap="round" d="M3.5 9.5h17M3.5 14.5h17" />
      </svg>
    ),
    dance: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="9" cy="5" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7v4l-3 6M9 11l4 2 3 5M13 13l4-3" />
        <path strokeLinecap="round" d="M16 4.5c1.5.5 2.5 1.5 2.5 3" />
      </svg>
    ),
    music: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18V6l12-2v12" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    literature: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 016.5 3H12v16H6.5A2.5 2.5 0 004 18.5v-13zM20 5.5A2.5 2.5 0 0017.5 3H12v16h5.5a2.5 2.5 0 002.5-2.5v-11z" />
      </svg>
    ),
    gaming: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 10h12a4 4 0 014 4v1a3 3 0 01-3 3h-1.2a2 2 0 01-1.7-.9l-.7-1.1a1 1 0 00-.85-.5H9.45a1 1 0 00-.85.5l-.7 1.1a2 2 0 01-1.7.9H5a3 3 0 01-3-3v-1a4 4 0 014-4z" />
        <path strokeLinecap="round" d="M8 13v2M7 14h2M16.5 13.5h.01M18.5 14.5h.01" />
      </svg>
    ),
    creative: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.5-9L12 12l2.5-4L20 16H4z" />
        <circle cx="16.5" cy="7" r="1.5" />
      </svg>
    ),
    festival: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
        <path strokeLinecap="round" d="M5 19h14M8 15v4M16 15v4" />
      </svg>
    ),
    women: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="8" r="3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5V21M9 18h6M12 15l-2.5 2.5M12 15l2.5 2.5" />
      </svg>
    ),
    movies: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 5l2 3M11 5l2 3M15 5l2 3M7 19l2-3M11 19l2-3M15 19l2-3" />
      </svg>
    ),
    fashion: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4l-3 3 2 2-4 9h4l2-4h4l2 4h4l-4-9 2-2-3-3-3 2.5L9 4z" />
      </svg>
    ),
    defense: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
    social: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="16" cy="9" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18c.8-2.5 2.8-4 5-4s4.2 1.5 5 4M14 18c.4-1.5 1.5-2.5 3-2.5 1.2 0 2.2.7 2.8 1.8" />
      </svg>
    ),
    finearts: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20l3-9 4 3 3-7 6 13H4z" />
        <circle cx="8" cy="7" r="1.5" />
      </svg>
    ),
    photography: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h3l1.5-2h7L17 8h3v11H4V8z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
    ),
    coding: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" />
      </svg>
    ),
    robotics: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="6" y="8" width="12" height="10" rx="2" />
        <path strokeLinecap="round" d="M12 4v4M9 12h.01M15 12h.01M9 18v2M15 18v2M4 12h2M18 12h2" />
      </svg>
    ),
    ai: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 5v2M12 17v2M5 12h2M17 12h2M7.05 7.05l1.4 1.4M15.55 15.55l1.4 1.4M7.05 16.95l1.4-1.4M15.55 8.45l1.4-1.4" />
      </svg>
    ),
    entrepreneurship: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M8 7h7a3 3 0 010 6H9a3 3 0 000 6h8" />
      </svg>
    ),
    research: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="11" cy="11" r="6" />
        <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
      </svg>
    ),
    debate: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h9a3 3 0 013 3v2a3 3 0 01-3 3H9l-4 4V7z" />
        <path strokeLinecap="round" d="M15 10h2a2 2 0 012 2v1a2 2 0 01-2 2h-1l-2 2" />
      </svg>
    ),
    media: ({ className: c }) => (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 9.5l5 2.5-5 2.5v-5z" />
      </svg>
    ),
  };

  return icons[name]({ className });
}

export function SbsbClubsSection() {
  const { clubs } = sbsbPageContent;

  return (
    <section className="scroll-mt-28 border-t border-border bg-surface/40 py-16 lg:py-24" id="clubs">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5">
              <MortarboardIcon />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{clubs.eyebrow}</span>
            </div>
            <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">{clubs.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted lg:text-lg">{clubs.subtitle}</p>
            <div className="mt-4 h-0.5 w-10 rounded-full bg-accent/50" aria-hidden />
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {clubs.items.map((club) => (
            <StaggerItem key={club.id}>
              <article className="group flex h-full flex-col border-b border-border bg-white px-6 py-7 transition-colors hover:border-accent/40 motion-lift lg:px-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">Club</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:ring-primary/20">
                    <ClubIcon name={club.icon} className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-primary lg:text-xl">{club.name}</h3>
                <div
                  className="mt-3 h-0.5 w-8 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-12 group-hover:bg-accent"
                  aria-hidden
                />
                <p className="mt-4 text-sm leading-relaxed text-muted">{club.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
