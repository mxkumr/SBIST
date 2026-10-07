"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { NavIcon } from "@/components/layout/NavIcons";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  premiumEase,
  premiumTransitionFast,
} from "@/components/motion/ScrollAnimations";
import { sbiolPageContent } from "@/lib/sbiol-content";
import type { NavIconName } from "@/lib/navigation";

function MortarboardIcon({ className = "h-5 w-5 shrink-0 text-accent" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 8l10 5 10-5-10-5zM4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10l-10 5" />
    </svg>
  );
}

function SectionCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm ${className}`}>
      <div className="relative">{children}</div>
    </div>
  );
}

function CardHeaderStrip({
  eyebrow,
  subtitle,
}: {
  eyebrow: string;
  subtitle?: string;
}) {
  return (
    <div className="relative border-b border-border bg-surface/60 px-6 py-5 lg:px-8">
      <div className="flex items-center gap-2.5">
        <MortarboardIcon />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</span>
      </div>
      {subtitle && <p className="mt-1.5 text-sm text-muted">{subtitle}</p>}
      <div className="mt-3 h-0.5 w-10 rounded-full bg-accent/50" aria-hidden />
    </div>
  );
}

function IconBadge({ icon, size = "sm" }: { icon: NavIconName; size?: "sm" | "md" }) {
  const config = {
    sm: { box: "h-10 w-10 rounded-xl", icon: "h-4 w-4" },
    md: { box: "h-12 w-12 rounded-xl", icon: "h-5 w-5" },
  }[size];

  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:ring-primary/20 ${config.box}`}
    >
      <NavIcon name={icon} className={config.icon} />
    </span>
  );
}

function SbiolSidebar() {
  const { sidebar } = sbiolPageContent;

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <SectionCard>
        <CardHeaderStrip eyebrow={sidebar.title} subtitle={sidebar.subtitle} />
        <nav aria-label="SBIOL page sections">
          <ul className="divide-y divide-border">
            {sidebar.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
                >
                  <IconBadge icon={link.icon} size="sm" />
                  <span className="flex-1">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SectionCard>
    </aside>
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

function SliderControls({
  index,
  total,
  onPrev,
  onNext,
  light = false,
}: {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  light?: boolean;
}) {
  const btn = light
    ? "border-white/25 bg-white/10 text-white hover:bg-white/20"
    : "border-border bg-white text-primary hover:border-accent hover:text-accent";

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onPrev}
        className={`flex h-11 w-11 items-center justify-center border transition-colors ${btn}`}
        aria-label="Previous"
      >
        <ArrowIcon direction="prev" />
      </button>
      <span
        className={`min-w-[4.5rem] text-center text-sm font-semibold tabular-nums ${
          light ? "text-white/70" : "text-muted"
        }`}
      >
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <button
        type="button"
        onClick={onNext}
        className={`flex h-11 w-11 items-center justify-center border transition-colors ${btn}`}
        aria-label="Next"
      >
        <ArrowIcon direction="next" />
      </button>
    </div>
  );
}

function IntroBand() {
  const { intro, motto, brochureHref } = sbiolPageContent;

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(182,140,58,0.18),_transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{intro.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight lg:text-5xl">{intro.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">{intro.lead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#courses"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-dark transition-colors hover:bg-accent-hover"
            >
              Explore courses
            </Link>
            <a
              href={brochureHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              Brochure PDF
            </a>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/90">{motto}</span>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4" stagger={0.05}>
          {intro.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <p className="font-serif text-3xl text-accent lg:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-white/60">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function BenefitsStrip() {
  const { benefits } = sbiolPageContent;

  return (
    <section id="benefits" className="scroll-mt-28 border-y border-border bg-background py-10">
      <StaggerContainer className="grid gap-8 sm:grid-cols-3" stagger={0.05}>
        {benefits.map((item, index) => (
          <StaggerItem key={item.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

function CoursesSlider() {
  const { courses } = sbiolPageContent;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const active = courses.items[index];

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % courses.items.length) + courses.items.length) % courses.items.length);
    },
    [courses.items.length],
  );

  const goPrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const section = document.getElementById("courses");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const variants = {
    enter: (dir: number) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  return (
    <section id="courses" className="scroll-mt-28 bg-surface/50 py-16 lg:py-20">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{courses.eyebrow}</p>
              <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">{courses.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{courses.description}</p>
            </div>
            <SliderControls index={index} total={courses.items.length} onPrev={goPrev} onNext={goNext} />
          </div>
        </ScrollReveal>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {courses.items.map((course, i) => (
            <button
              key={course.id}
              type="button"
              onClick={() => goTo(i, i > index ? 1 : -1)}
              className={`shrink-0 border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                i === index
                  ? "border-accent bg-accent text-primary-dark"
                  : "border-border bg-white text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {course.shortTitle}
            </button>
          ))}
        </div>

        <div className="relative mt-6 overflow-hidden border border-border bg-white">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={active.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: premiumEase }}
              className="grid lg:grid-cols-2"
            >
              <div className="relative min-h-[280px] lg:min-h-[420px]">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {active.category} · {active.duration}
                  </p>
                  <p className="mt-1 font-serif text-2xl text-white">{active.shortTitle}</p>
                </div>
              </div>

              <div className="flex flex-col justify-center px-6 py-8 lg:px-10 lg:py-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {active.category}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {active.duration}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-3xl text-foreground">{active.title}</h3>
                <p className="mt-2 text-sm font-medium text-primary">{active.focus}</p>
                <p className="mt-4 text-base leading-relaxed text-muted">{active.summary}</p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {active.specializationsLabel}
                </p>
                <ul className="mt-3 space-y-3">
                  {active.specializations.map((item) => (
                    <li key={item.name}>
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">{item.detail}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Eligibility</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{active.eligibility}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#enrollment"
                    className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    How to enroll
                  </Link>
                  <a
                    href={sbiolPageContent.contact.websiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    Apply online
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
    </section>
  );
}

function LearningStrip() {
  const { learning } = sbiolPageContent;
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const active = learning.items[index];
  const progress = ((index + 1) / learning.items.length) * 100;

  const goPrev = () => setIndex((i) => (i - 1 + learning.items.length) % learning.items.length);
  const goNext = () => setIndex((i) => (i + 1) % learning.items.length);

  return (
    <section id="learning" className="scroll-mt-28 bg-primary py-16 text-white lg:py-20">
      <ScrollReveal>
        <div className="flex flex-col gap-6 px-6 sm:flex-row sm:items-end sm:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{learning.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight lg:text-[2.35rem]">{learning.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-white/70">{learning.description}</p>
          </div>
          <SliderControls
            index={index}
            total={learning.items.length}
            onPrev={goPrev}
            onNext={goNext}
            light
          />
        </div>
      </ScrollReveal>

      <div className="mt-8 px-6 lg:px-8">
        <div className="h-1 w-full overflow-hidden bg-white/15">
          <motion.div
            className="h-full bg-accent"
            animate={{ width: `${progress}%` }}
            transition={prefersReducedMotion ? { duration: 0 } : premiumTransitionFast}
          />
        </div>
      </div>

      <div className="mt-8 grid gap-6 px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-8 lg:px-8">
        <div className="grid grid-cols-2 gap-3" role="tablist" aria-label="UGC learning quadrants">
          {learning.items.map((item, i) => {
            const isActive = i === index;
            return (
              <button
                key={item.number}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setIndex(i)}
                className={`group relative flex min-h-[120px] flex-col items-start justify-between border p-4 text-left transition-colors lg:min-h-[140px] lg:p-5 ${
                  isActive
                    ? "border-accent bg-accent text-primary-dark"
                    : "border-white/20 bg-white/5 text-white hover:border-accent/60 hover:bg-white/10"
                }`}
              >
                <span
                  className={`font-serif text-3xl lg:text-4xl ${
                    isActive ? "text-primary-dark/35" : "text-white/25"
                  }`}
                >
                  {item.number}
                </span>
                <div>
                  <p className="text-sm font-semibold lg:text-base">{item.title}</p>
                  <p
                    className={`mt-1 text-xs uppercase tracking-wide ${
                      isActive ? "text-primary-dark/70" : "text-white/50"
                    }`}
                  >
                    {item.short}
                  </p>
                </div>
                {isActive && (
                  <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-primary-dark" aria-hidden />
                )}
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden border border-white/15 bg-primary-dark/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.number}
              role="tabpanel"
              initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, x: -16 }}
              transition={premiumTransitionFast}
              className="flex h-full flex-col justify-between px-6 py-8 lg:px-8 lg:py-10"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Quadrant {active.number}
                </p>
                <h3 className="mt-3 font-serif text-3xl lg:text-4xl">{active.title}</h3>
                <p className="mt-2 text-sm font-medium text-accent/90">{active.detail}</p>
                <p className="mt-5 text-base leading-relaxed text-white/75">{active.description}</p>
              </div>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Good to know</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80 lg:text-base">{active.tip}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-dark transition-colors hover:bg-accent-hover"
                  >
                    {index < learning.items.length - 1 ? "Next quadrant" : "Back to start"}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function EnrollmentSlider() {
  const { enrollment, contact } = sbiolPageContent;
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const step = enrollment.steps[index];
  const progress = ((index + 1) / enrollment.steps.length) * 100;

  const goPrev = () => setIndex((i) => (i - 1 + enrollment.steps.length) % enrollment.steps.length);
  const goNext = () => setIndex((i) => (i + 1) % enrollment.steps.length);

  return (
    <section id="enrollment" className="scroll-mt-28 bg-background py-16 lg:py-20">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{enrollment.eyebrow}</p>
              <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">{enrollment.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{enrollment.description}</p>
            </div>
            <SliderControls
              index={index}
              total={enrollment.steps.length}
              onPrev={goPrev}
              onNext={goNext}
            />
          </div>
        </ScrollReveal>

        <div className="mt-8 h-1 w-full overflow-hidden bg-border">
          <motion.div
            className="h-full bg-accent"
            animate={{ width: `${progress}%` }}
            transition={prefersReducedMotion ? { duration: 0 } : premiumTransitionFast}
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {enrollment.steps.map((s, i) => (
            <button
              key={s.number}
              type="button"
              onClick={() => setIndex(i)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                i === index
                  ? "bg-primary text-white"
                  : i < index
                    ? "bg-accent/20 text-primary"
                    : "bg-surface text-muted hover:text-primary"
              }`}
            >
              {s.number} {s.title}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden border border-border bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.number}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={premiumTransitionFast}
              className="grid lg:grid-cols-[1fr_1.1fr]"
            >
              <div className="bg-primary px-6 py-10 text-white lg:px-10 lg:py-14">
                <p className="font-serif text-6xl text-accent/40 lg:text-7xl">{step.number}</p>
                <h3 className="mt-4 font-serif text-3xl lg:text-4xl">{step.title}</h3>
                <p className="mt-5 text-base leading-relaxed text-white/75">{step.description}</p>
              </div>
              <div className="flex flex-col justify-center px-6 py-10 lg:px-10 lg:py-14">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Good to know</p>
                <p className="mt-3 text-lg leading-relaxed text-foreground">{step.tip}</p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="border border-border px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    Previous step
                  </button>
                  {index < enrollment.steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      className="bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-dark transition-colors hover:bg-accent-hover"
                    >
                      Next step
                    </button>
                  ) : (
                    <a
                      href={contact.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-dark transition-colors hover:bg-accent-hover"
                    >
                      Start registration
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <ScrollReveal className="mt-10">
          <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-foreground">{contact.institute}</p>
              <p className="mt-1 text-sm text-muted">{contact.address}</p>
            </div>
            <div className="flex flex-col gap-1 text-sm sm:text-right">
              <a href={contact.websiteHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-accent">
                {contact.website}
              </a>
              <a href={contact.emailHref} className="font-semibold text-primary hover:text-accent">
                {contact.email}
              </a>
            </div>
          </div>
        </ScrollReveal>
    </section>
  );
}

function LegacySection() {
  const { legacy } = sbiolPageContent;

  return (
    <section id="legacy" className="scroll-mt-28 bg-background py-16 lg:py-20">
        <div className="grid items-stretch gap-0 overflow-hidden border border-border lg:grid-cols-2">
          <ScrollReveal className="flex flex-col justify-center bg-white px-6 py-10 lg:px-10 lg:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{legacy.eyebrow}</p>
            <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">{legacy.title}</h2>
            <p className="mt-2 font-serif text-xl italic text-primary">{legacy.subtitle}</p>
            <div className="mt-4 h-0.5 w-10 rounded-full bg-accent/50" aria-hidden />
            <p className="mt-5 text-base leading-relaxed text-muted">{legacy.description}</p>

            <StaggerContainer className="mt-8 space-y-5" stagger={0.05}>
              {legacy.pillars.map((pillar) => (
                <StaggerItem key={pillar.title}>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{pillar.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ul className="mt-8 grid gap-2 border-t border-border pt-6 sm:grid-cols-2">
              {legacy.credentials.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="relative min-h-[280px] lg:min-h-full">
            <Image
              src={legacy.image}
              alt="BIHER and SBIST campus legacy"
              fill
              quality={100}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary/20 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-serif text-xl text-white lg:text-2xl">
              {legacy.tagline}
            </p>
          </ScrollReveal>
        </div>
    </section>
  );
}

function FacultySection() {
  const { faculty } = sbiolPageContent;

  return (
    <section id="faculty" className="scroll-mt-28 bg-surface/50 py-16 lg:py-20">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{faculty.eyebrow}</p>
            <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">{faculty.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{faculty.description}</p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <ScrollReveal>
            <div className="flex h-full flex-col border border-border bg-primary px-6 py-8 text-white lg:px-8 lg:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Academic Synergy</p>
              <h3 className="mt-3 font-serif text-2xl lg:text-3xl">{faculty.synergy.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75 lg:text-base">
                {faculty.synergy.description}
              </p>

              <StaggerContainer className="mt-8 space-y-5 border-t border-white/15 pt-6" stagger={0.05}>
                {faculty.mentors.map((mentor, index) => (
                  <StaggerItem key={mentor.title}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h4 className="mt-1 text-lg font-semibold">{mentor.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{mentor.description}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="relative min-h-[320px] overflow-hidden border border-border lg:min-h-full">
              <Image
                src={faculty.image}
                alt="Computer lab workstation"
                fill
                quality={100}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </ScrollReveal>
        </div>
    </section>
  );
}

export function SbiolMainSection() {
  return (
    <>
      <IntroBand />
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 py-12 lg:grid-cols-[280px_1fr] lg:gap-14 lg:py-16 xl:gap-16">
            <ScrollReveal direction="left">
              <SbiolSidebar />
            </ScrollReveal>
            <div className="min-w-0 space-y-0">
              <BenefitsStrip />
              <LegacySection />
              <CoursesSlider />
              <LearningStrip />
              <FacultySection />
              <EnrollmentSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
