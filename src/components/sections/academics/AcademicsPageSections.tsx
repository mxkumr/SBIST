"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { NavIcon } from "@/components/layout/NavIcons";
import { DepartmentCard } from "@/components/cards/DepartmentCard";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import { academicsPageContent } from "@/lib/academics-content";
import type { NavIconName } from "@/lib/navigation";

/* ─── Shared UI primitives (mirrors About page) ───────────────────── */

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

function SectionCard({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`relative scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-white shadow-sm ${className}`}
    >
      <DecorativeBlobs />
      <div className="relative">{children}</div>
    </div>
  );
}

function CardHeaderStrip({
  eyebrow,
  subtitle,
  align = "center",
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

function IconBadge({ icon, size = "md" }: { icon: NavIconName; size?: "sm" | "md" | "lg" }) {
  const config = {
    sm: { box: "h-10 w-10 rounded-xl", icon: "h-4 w-4" },
    md: { box: "h-12 w-12 rounded-xl", icon: "h-5 w-5" },
    lg: { box: "h-14 w-14 rounded-2xl", icon: "h-6 w-6" },
  }[size];

  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:ring-primary/20 group-hover:shadow-md ${config.box}`}
    >
      <NavIcon name={icon} className={config.icon} />
    </span>
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

function ArrowPillLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary/25 hover:shadow-md"
    >
      {children}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:scale-110">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
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

function useCountUp(target: number, duration: number, started: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let frame: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, started]);

  return count;
}

function StatBlock({
  value,
  headline,
  suffix,
  label,
  icon,
  started,
  showDivider,
}: {
  value?: number;
  headline?: string;
  suffix?: string;
  label: string;
  icon: NavIconName;
  started: boolean;
  showDivider?: boolean;
}) {
  const count = useCountUp(value ?? 0, 2000, started && value !== undefined);

  return (
    <div className="group relative flex h-full flex-col items-center px-4 py-6 text-center sm:py-4">
      {showDivider && (
        <div
          className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-border to-transparent sm:block"
          aria-hidden
        />
      )}
      <IconBadge icon={icon} size="lg" />
      {headline ? (
        <p className="mt-5 font-heading text-2xl font-bold leading-none tracking-tight text-primary lg:text-3xl">
          {headline}
        </p>
      ) : (
        <p className="mt-5 text-4xl font-bold leading-none tracking-tight text-primary lg:text-[2.75rem]">
          {count.toLocaleString()}
          <span className="text-accent">{suffix}</span>
        </p>
      )}
      <p className="mt-3 max-w-[9rem] text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</p>
      <AccentBar className="mt-4" />
    </div>
  );
}

function AcademicsSidebar() {
  const { sidebar } = academicsPageContent;

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <SectionCard>
        <CardHeaderStrip eyebrow={sidebar.title} subtitle="Navigate academic sections" align="left" />
        <nav aria-label="Academics navigation">
          <ul className="divide-y divide-border">
            {sidebar.links.map((link) => {
              const isActive = link.href === "/academics";
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/5 text-primary"
                        : "text-foreground hover:bg-surface hover:text-primary"
                    }`}
                  >
                    <IconBadge icon={link.icon} size="sm" />
                    <span className="flex-1">{link.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </SectionCard>
    </aside>
  );
}

/* ─── Sections ─────────────────────────────────────────────────────── */

export function AcademicsIntroSection() {
  const { intro, stats } = academicsPageContent;
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14 xl:gap-16">
          <ScrollReveal direction="left">
            <AcademicsSidebar />
          </ScrollReveal>

          <div className="min-w-0 space-y-8">
            <ScrollReveal direction="right">
              <SectionCard>
                <CardHeaderStrip
                  eyebrow={intro.eyebrow}
                  subtitle="Programs, labs and pathways to engineering careers"
                  align="left"
                />
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <h2 className="text-3xl leading-tight text-foreground lg:text-[2.25rem]">{intro.title}</h2>
                  <div className="mt-6 space-y-4 border-b border-border pb-8 text-[15px] leading-relaxed text-muted">
                    {intro.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                  <ul className="mt-6 space-y-3">
                    {intro.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <AccentBar className="group mt-6" />
                </div>
              </SectionCard>
            </ScrollReveal>

            <div ref={statsRef}>
              <SectionCard>
                <CardHeaderStrip
                  eyebrow="Academics at a Glance"
                  subtitle="What defines our approach to education"
                />
                <StaggerContainer
                  className="relative grid divide-y divide-border sm:grid-cols-2 lg:grid-cols-4 sm:divide-x sm:divide-y-0"
                  stagger={0.08}
                >
                  {stats.map((stat, index) => (
                    <StaggerItem key={stat.label}>
                      <StatBlock
                        value={stat.value}
                        headline={stat.headline}
                        suffix={stat.suffix}
                        label={stat.label}
                        icon={stat.icon}
                        started={statsStarted}
                        showDivider={index < stats.length - 1}
                      />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </SectionCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CourseCatalogueSection() {
  const { courses } = academicsPageContent;

  return (
    <section id="courses" className="scroll-mt-28 bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <SectionCard>
            <CardHeaderStrip eyebrow={courses.eyebrow} subtitle={courses.description} align="left" />
            <div className="flex flex-col items-start justify-between gap-6 px-6 py-8 sm:flex-row sm:items-end lg:px-8 lg:py-10">
              <div>
                <h2 className="text-3xl leading-tight text-foreground lg:text-4xl">{courses.title}</h2>
                <AccentBar className="group mt-4" />
              </div>
              <ArrowPillLink href={courses.viewAllHref}>View All Programs</ArrowPillLink>
            </div>
          </SectionCard>
        </ScrollReveal>

        <StaggerContainer className="mt-8 grid items-stretch gap-6 sm:grid-cols-2 lg:gap-8" stagger={0.06}>
          {courses.programs.map((program) => (
            <StaggerItem key={program.title} className="h-full">
              <div className="motion-lift h-full">
                <DepartmentCard
                  title={program.title}
                  description={program.description}
                  image={program.image}
                  programs={program.programs}
                  href={program.href}
                  icon={<NavIcon name={program.icon} className="h-5 w-5" />}
                  duration={program.duration}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function WhyJoinSection() {
  const { whyJoin } = academicsPageContent;

  return (
    <section id="why-join" className="scroll-mt-28 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionCard>
          <div className="grid items-stretch lg:grid-cols-2">
            <ScrollReveal direction="left" className="flex flex-col">
              <CardHeaderStrip eyebrow={whyJoin.eyebrow} subtitle={whyJoin.description} align="left" />
              <div className="flex flex-1 flex-col px-6 py-8 lg:px-10 lg:py-10">
                <h2 className="text-3xl leading-tight text-foreground lg:text-4xl">{whyJoin.title}</h2>
                <AccentBar className="group mt-6" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="group relative min-h-[280px] overflow-hidden border-t border-border lg:min-h-full lg:border-l lg:border-t-0">
                <Image
                  src={whyJoin.image}
                  alt="Students collaborating in a lecture hall"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-primary/40 px-5 py-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    Guided by Qualified Faculty
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </SectionCard>

        <StaggerContainer className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" stagger={0.06}>
          {whyJoin.reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <SectionCard className="group motion-lift h-full">
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <IconBadge icon={reason.icon} size="md" />
                  <h3 className="mt-5 text-xl text-foreground">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{reason.description}</p>
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

export function AlumniSection() {
  const { alumni } = academicsPageContent;

  return (
    <section id="alumni" className="scroll-mt-28 bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <SectionCard>
            <CardHeaderStrip eyebrow={alumni.eyebrow} subtitle={alumni.description} />
            <div className="flex flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row lg:px-8">
              <h2 className="text-3xl leading-tight text-foreground lg:text-4xl">{alumni.title}</h2>
              <ArrowPillLink href={alumni.ctaHref}>{alumni.ctaLabel}</ArrowPillLink>
            </div>
          </SectionCard>
        </ScrollReveal>

        <StaggerContainer className="mt-8 grid gap-6 sm:grid-cols-3" stagger={0.08}>
          {alumni.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <SectionCard className="text-center">
                <div className="px-6 py-8">
                  {stat.headline ? (
                    <p className="font-heading text-2xl font-bold text-primary lg:text-3xl">{stat.headline}</p>
                  ) : (
                    <p className="text-4xl font-bold text-primary lg:text-5xl">
                      {stat.value?.toLocaleString()}
                      <span className="text-accent">{stat.suffix}</span>
                    </p>
                  )}
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{stat.label}</p>
                </div>
              </SectionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-8" stagger={0.06}>
          {alumni.stories.map((story) => (
            <StaggerItem key={story.name}>
              <SectionCard className="group motion-lift flex h-full flex-col">
                <div className="flex flex-1 flex-col px-6 py-8 lg:px-8 lg:py-10">
                  <QuoteMark />
                  <blockquote className="mt-5 flex-1 font-serif text-base italic leading-relaxed text-foreground">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-border ring-2 ring-primary/5">
                      <Image src={story.image} alt={story.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-primary">{story.name}</p>
                      <p className="text-xs text-muted">{story.role}</p>
                    </div>
                  </footer>
                </div>
              </SectionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function AdmissionsSection() {
  const { admissions, notices } = academicsPageContent;

  return (
    <section id="admissions" className="scroll-mt-28 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal direction="left">
            <SectionCard className="h-full">
              <CardHeaderStrip eyebrow={admissions.eyebrow} subtitle={admissions.description} align="left" />
              <div className="px-6 py-6 lg:px-8">
                <h2 className="text-2xl text-foreground lg:text-3xl">{admissions.title}</h2>
                <ul className="mt-6 divide-y divide-border">
                  {admissions.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-4 py-4 transition-colors hover:text-primary"
                      >
                        <IconBadge icon={link.icon} size="sm" />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary">{link.label}</p>
                          <p className="text-xs text-muted">{link.description}</p>
                        </div>
                        <svg
                          className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <SectionCard className="h-full">
              <CardHeaderStrip eyebrow={notices.eyebrow} subtitle={notices.description} align="left" />
              <div className="px-6 py-6 lg:px-8">
                <h2 className="text-2xl text-foreground lg:text-3xl">{notices.title}</h2>
                <ul className="mt-6 space-y-4">
                  {notices.items.map((notice) => (
                    <li
                      key={notice.ref}
                      className="rounded-xl border border-border bg-surface/40 px-4 py-4 transition-colors hover:border-primary/20 hover:bg-white"
                    >
                      {"href" in notice && notice.href ? (
                        <Link
                          href={notice.href}
                          className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                        >
                          {notice.title}
                        </Link>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">{notice.title}</p>
                      )}
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                        <span>{notice.date}</span>
                        <span className="hidden sm:inline">·</span>
                        <span className="font-mono text-[11px]">{notice.ref}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <ArrowPillLink href={notices.viewAllHref}>All Notices</ArrowPillLink>
                </div>
              </div>
            </SectionCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
