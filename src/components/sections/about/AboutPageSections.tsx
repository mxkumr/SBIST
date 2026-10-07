"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Gallery } from "@/components/blocks/Gallery";
import { NavIcon } from "@/components/layout/NavIcons";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import { aboutPageContent } from "@/lib/about-content";
import { aboutLeaderPreview } from "@/lib/leadership-content";
import type { NavIconName } from "@/lib/navigation";

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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={`h-4 w-4 ${index < Math.floor(rating) ? "text-accent" : index < rating ? "text-accent/50" : "text-border"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-semibold text-primary">{rating.toFixed(1)}</span>
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

function AboutSidebar() {
  const { sidebar } = aboutPageContent;

  return (
    <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
      <SectionCard>
        <CardHeaderStrip eyebrow={sidebar.title} subtitle="Explore SBIST" align="left" />
        <nav aria-label="About navigation">
          <ul className="divide-y divide-border">
            {sidebar.links.map((link) => {
              const isActive = link.href === "/about";
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

function BalajiHighlightDescription({ text }: { text: string }) {
  const parts = text.split("Balaji");

  return (
    <p className="mt-5 text-base leading-relaxed text-muted">
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <span className="font-heading font-semibold tracking-wide text-primary">Balaji</span>
          )}
        </span>
      ))}
    </p>
  );
}

function PillarsGrid({ pillars }: { pillars: typeof aboutPageContent.vision.pillars }) {
  return (
    <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
      {pillars.map((pillar) => (
        <StaggerItem key={pillar.title}>
          <SectionCard className="group motion-lift h-full">
            <div className="px-5 py-6 lg:px-6 lg:py-7">
              <IconBadge icon={pillar.icon} size="md" />
              <h3 className="mt-4 text-lg text-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.description}</p>
              <AccentBar className="mt-5" />
            </div>
          </SectionCard>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

function VisionMissionCard() {
  const { vision, mission } = aboutPageContent;

  return (
    <div className="space-y-6">
      <SectionCard>
        <CardHeaderStrip eyebrow="Our Purpose" subtitle="Vision and mission that guide SBIST" align="left" />
        <div className="grid items-stretch lg:grid-cols-2">
          <div className="group px-6 py-8 lg:px-8 lg:py-10">
            <div className="flex items-center gap-3">
              <IconBadge icon="mission" size="md" />
              <h2 className="text-3xl leading-tight text-foreground lg:text-[2.25rem]">{vision.title}</h2>
            </div>
            <BalajiHighlightDescription text={vision.description} />
            <AccentBar className="mt-6" />
          </div>
          <div className="group border-t border-border px-6 py-8 lg:border-l lg:border-t-0 lg:px-8 lg:py-10">
            <div className="flex items-center gap-3">
              <IconBadge icon="programs" size="md" />
              <h2 className="text-3xl leading-tight text-foreground lg:text-[2.25rem]">{mission.title}</h2>
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted">{mission.description}</p>
            <AccentBar className="mt-6" />
          </div>
        </div>
      </SectionCard>

      <PillarsGrid pillars={mission.pillars} />
    </div>
  );
}

function LeaderPreviewCard() {
  const leader = aboutLeaderPreview;

  return (
    <SectionCard>
      <div className="grid items-stretch lg:grid-cols-2">
        <div className="flex flex-col">
          <CardHeaderStrip eyebrow={leader.eyebrow} subtitle={leader.tagline} align="left" />
          <div className="flex flex-1 flex-col justify-center px-6 py-8 lg:px-8 lg:py-10">
            <h2 className="font-heading text-3xl leading-tight text-foreground lg:text-[2.25rem]">
              {leader.title}
            </h2>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {leader.role}
            </p>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              {leader.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <ArrowPillLink href={leader.readMoreHref}>{leader.readMoreLabel}</ArrowPillLink>
            </div>
          </div>
        </div>

        <div className="group relative min-h-[280px] overflow-hidden border-t border-border lg:min-h-full lg:border-l lg:border-t-0">
          <Image
            src={leader.image}
            alt={leader.imageAlt}
            fill
            quality={100}
            priority
            className="object-cover object-[60%_center] transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-primary/40 px-5 py-4 backdrop-blur-sm">
            <p className="font-heading text-base font-semibold text-white">{leader.title}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              {leader.role}
            </p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

export function AboutMainSection() {
  const { main, stats } = aboutPageContent;
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
          <ScrollReveal direction="left" className="hidden lg:block">
            <AboutSidebar />
          </ScrollReveal>

          <div className="min-w-0 space-y-8">
            <ScrollReveal direction="right">
              <LeaderPreviewCard />
            </ScrollReveal>

            <ScrollReveal delay={0.04}>
              <PillarsGrid pillars={aboutPageContent.vision.pillars} />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <VisionMissionCard />
            </ScrollReveal>

            <ScrollReveal delay={0.08} direction="right">
              <SectionCard>
                <CardHeaderStrip eyebrow={main.eyebrow} subtitle="Our story, mission and community" align="left" />
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <h2 className="text-3xl leading-tight text-foreground lg:text-[2.25rem]">{main.title}</h2>
                  <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
                    {main.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
                      <Image
                        src={main.images.primary}
                        alt="Modern computer laboratory at SBIST"
                        fill
                        quality={100}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 320px"
                      />
                    </div>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
                      <Image
                        src={main.images.secondary}
                        alt="Entrepreneur Summit at SBIST"
                        fill
                        quality={100}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 320px"
                      />
                    </div>
                  </div>

                  <blockquote className="mt-8 rounded-xl border border-border bg-surface/60 px-6 py-6">
                    <QuoteMark />
                    <p className="mt-4 font-serif text-base italic leading-relaxed text-foreground">
                      &ldquo;{main.quote.text}&rdquo;
                    </p>
                  </blockquote>

                  <p className="mt-6 text-[15px] leading-relaxed text-muted">{main.closingParagraph}</p>
                  <AccentBar className="group mt-6" />
                </div>
              </SectionCard>
            </ScrollReveal>

            <div ref={statsRef}>
              <SectionCard>
                <CardHeaderStrip eyebrow="SBIST at a Glance" subtitle="What defines our approach to education" />
                <StaggerContainer
                  className="relative grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0"
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

export function AboutCampusTourSection() {
  const { campusTour } = aboutPageContent;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionCard>
          <div className="grid items-stretch lg:grid-cols-2">
            <ScrollReveal direction="left" className="flex flex-col">
              <CardHeaderStrip eyebrow="Virtual Visit" subtitle="See our Chrompet campus" align="left" />
              <div className="flex flex-1 flex-col px-6 py-8 lg:px-10 lg:py-10">
                <h2 className="text-3xl leading-tight text-foreground lg:text-4xl">{campusTour.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted">{campusTour.description}</p>
                <div className="mt-8">
                  <ArrowPillLink href={campusTour.videoHref}>Explore Campus Life</ArrowPillLink>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="group relative min-h-[280px] overflow-hidden border-t border-border lg:min-h-full lg:border-l lg:border-t-0">
                <Image
                  src={campusTour.image}
                  alt="SBIST campus aerial view"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-primary/40 px-5 py-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white">Chrompet, Chennai</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </SectionCard>
      </div>
    </section>
  );
}

export function AboutTestimonialsSection() {
  const { testimonials } = aboutPageContent;

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <SectionCard>
            <CardHeaderStrip eyebrow="Professional Opinions" subtitle={testimonials.description} />
            <div className="px-6 py-8 lg:px-8">
              <h2 className="text-3xl leading-tight text-foreground lg:text-4xl">{testimonials.title}</h2>
              <AccentBar className="group mt-4" />
            </div>
          </SectionCard>
        </ScrollReveal>

        <StaggerContainer className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-8" stagger={0.06}>
          {testimonials.items.map((item) => (
            <StaggerItem key={item.name}>
              <SectionCard className="group motion-lift flex h-full flex-col">
                <div className="flex flex-1 flex-col px-6 py-8 lg:px-8 lg:py-10">
                  <StarRating rating={item.rating} />
                  <blockquote className="mt-5 flex-1 font-serif text-base italic leading-relaxed text-foreground">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-border ring-2 ring-primary/5">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-primary">{item.name}</p>
                      <p className="text-xs text-muted">{item.role}</p>
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

export function AboutGallerySection() {
  const { gallery } = aboutPageContent;

  return (
    <>
      <Gallery images={gallery.images} title={gallery.title} subtitle={gallery.subtitle} columns={3} />
      <div className="bg-surface pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <ArrowPillLink href={gallery.ctaHref}>Explore Campus Life</ArrowPillLink>
        </div>
      </div>
    </>
  );
}
