"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { NavIcon } from "@/components/layout/NavIcons";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import {
  departmentPages,
  departmentSectionNav,
  type DepartmentPageContent,
} from "@/lib/departments-content";
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
      {subtitle && <p className="mt-1.5 max-w-2xl text-sm text-muted">{subtitle}</p>}
      <div className="mt-3 h-0.5 w-10 rounded-full bg-accent/50" aria-hidden />
    </div>
  );
}

function IconBadge({ icon, size = "md" }: { icon: NavIconName; size?: "sm" | "md" }) {
  const config =
    size === "sm"
      ? { box: "h-10 w-10 rounded-xl", icon: "h-4 w-4" }
      : { box: "h-12 w-12 rounded-xl", icon: "h-5 w-5" };

  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white ${config.box}`}
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

function DepartmentSidebar({ department }: { department: DepartmentPageContent }) {
  return (
    <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
      <SectionCard>
        <CardHeaderStrip eyebrow="On This Page" subtitle={department.shortName} />
        <nav aria-label={`${department.name} sections`}>
          <ul className="divide-y divide-border">
            {departmentSectionNav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
                >
                  <IconBadge icon={link.icon} size="sm" />
                  <span className="flex-1">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SectionCard>

      <SectionCard className="mt-6">
        <CardHeaderStrip eyebrow="All Departments" />
        <nav aria-label="Departments list">
          <ul className="max-h-72 divide-y divide-border overflow-y-auto">
            {departmentPages.map((dept) => {
              const active = dept.slug === department.slug;
              return (
                <li key={dept.slug}>
                  <Link
                    href={`/departments/${dept.slug}`}
                    className={`block px-5 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-primary/5 text-primary"
                        : "text-foreground hover:bg-surface hover:text-primary"
                    }`}
                  >
                    {dept.name}
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

export function DepartmentsIndexSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5">
              <MortarboardIcon />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Academic Departments
              </span>
            </div>
            <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">
              Explore Our Departments
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Each department offers dedicated pages covering overview, vision and mission, outcomes,
              activities, achievements, e-learning and gallery.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {departmentPages.map((dept) => (
            <StaggerItem key={dept.slug}>
              <Link href={`/departments/${dept.slug}`} className="group block h-full">
                <SectionCard className="h-full transition-colors group-hover:border-primary/25">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      fill
                      quality={85}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="px-5 py-6">
                    <div className="flex items-start gap-3">
                      <IconBadge icon={dept.icon} size="sm" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                          {dept.degree}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-foreground group-hover:text-primary">
                          {dept.name}
                        </h3>
                      </div>
                    </div>
                    <AccentBar className="mt-5" />
                  </div>
                </SectionCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function DepartmentMainSection({ department }: { department: DepartmentPageContent }) {
  const {
    overview,
    vision,
    mission,
    outcomes,
    // faculties,
    activities,
    achievements,
    eLearning,
    gallery,
  } = department;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14 xl:gap-16">
          <ScrollReveal direction="left" className="hidden lg:block">
            <DepartmentSidebar department={department} />
          </ScrollReveal>

          <div className="min-w-0 space-y-8">
            {/* Overview / About */}
            <ScrollReveal>
              <SectionCard id="overview">
                <CardHeaderStrip eyebrow={overview.eyebrow} subtitle={department.degree} />
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <h2 className="text-3xl leading-tight text-foreground lg:text-[2.25rem]">{overview.title}</h2>
                  <div className="mt-6 space-y-4 text-justify text-[15px] leading-relaxed text-muted">
                    {overview.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                    {overview.highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm font-medium text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-8 aspect-[21/9] overflow-hidden rounded-xl border border-border">
                    <Image
                      src={department.image}
                      alt={department.name}
                      fill
                      quality={90}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      priority
                    />
                  </div>
                  <AccentBar className="mt-6" />
                </div>
              </SectionCard>
            </ScrollReveal>

            {/* Vision & Mission */}
            <ScrollReveal>
              <div id="vision-mission" className="scroll-mt-28">
                <SectionCard>
                  <CardHeaderStrip eyebrow="Vision & Mission" subtitle="Purpose that guides the department" />
                  <div className="grid lg:grid-cols-2">
                    <div className="border-b border-border px-6 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
                      <h3 className="text-2xl text-foreground">{vision.title}</h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-muted">{vision.text}</p>
                      <AccentBar className="mt-6" />
                    </div>
                    <div className="px-6 py-8 lg:px-8 lg:py-10">
                      <h3 className="text-2xl text-foreground">{mission.title}</h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-muted">{mission.text}</p>
                      <AccentBar className="mt-6" />
                    </div>
                  </div>
                </SectionCard>
              </div>
            </ScrollReveal>

            {/* PEOs | POs | PSOs */}
            <ScrollReveal>
              <SectionCard id="outcomes">
                <CardHeaderStrip eyebrow="PEOs | POs | PSOs" subtitle="Programme educational and specific outcomes" />
                <div className="space-y-8 px-6 py-8 lg:px-8 lg:py-10">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Programme Educational Objectives (PEOs)</h3>
                    <ul className="mt-4 space-y-3">
                      {outcomes.peos.map((item, index) => (
                        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                            {index + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Programme Outcomes (POs)</h3>
                    <ul className="mt-4 space-y-3">
                      {outcomes.pos.map((item, index) => (
                        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                            {index + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Programme Specific Outcomes (PSOs)</h3>
                    <ul className="mt-4 space-y-3">
                      {outcomes.psos.map((item, index) => (
                        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                            {index + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionCard>
            </ScrollReveal>

            {/* Faculties — temporarily hidden
            <ScrollReveal>
              <SectionCard id="faculties">
                <CardHeaderStrip eyebrow="Faculties" subtitle="Six faculty profiles supporting teaching and mentoring" />
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <h2 className="text-3xl leading-tight text-foreground">Our Faculty</h2>
                  <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.04}>
                    {faculties.map((faculty) => (
                      <StaggerItem key={faculty.name}>
                        <div className="group h-full rounded-xl border border-border bg-surface/40 p-5 transition-colors hover:border-primary/20 hover:bg-white">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                            {faculty.name
                              .split(" ")
                              .slice(-2)
                              .map((part) => part[0])
                              .join("")}
                          </div>
                          <h3 className="mt-4 text-base font-semibold text-foreground">{faculty.name}</h3>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                            {faculty.role}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-muted">{faculty.focus}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </SectionCard>
            </ScrollReveal>
            */}

            {/* Activities */}
            <ScrollReveal>
              <SectionCard id="activities">
                <CardHeaderStrip eyebrow="Activities" subtitle="Department events that enrich student learning" />
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <h2 className="text-3xl leading-tight text-foreground">Department Activities</h2>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {activities.map((activity) => (
                      <div key={activity.title} className="rounded-xl border border-border p-5">
                        <h3 className="text-base font-semibold text-primary">{activity.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{activity.description}</p>
                        <AccentBar className="mt-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </SectionCard>
            </ScrollReveal>

            {/* Academic Achievements */}
            <ScrollReveal>
              <SectionCard id="achievements">
                <CardHeaderStrip
                  eyebrow="Academic Achievements"
                  subtitle="Highlights of academic performance and recognition"
                />
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <h2 className="text-3xl leading-tight text-foreground">Achievements</h2>
                  <ul className="mt-8 space-y-4">
                    {achievements.map((item, index) => (
                      <li
                        key={item.title}
                        className="flex gap-4 rounded-xl border border-border bg-surface/40 px-5 py-4"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionCard>
            </ScrollReveal>

            {/* E-Learning */}
            <ScrollReveal>
              <SectionCard id="e-learning">
                <CardHeaderStrip eyebrow="E-Learning" subtitle={eLearning.description} />
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <h2 className="text-3xl leading-tight text-foreground">{eLearning.title}</h2>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {eLearning.resources.map((resource) => (
                      <div key={resource.label} className="rounded-xl border border-border p-5">
                        <IconBadge icon="library" size="sm" />
                        <h3 className="mt-4 text-base font-semibold text-foreground">{resource.label}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{resource.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionCard>
            </ScrollReveal>

            {/* Gallery */}
            <ScrollReveal>
              <SectionCard id="gallery">
                <CardHeaderStrip eyebrow="Gallery" subtitle="Spaces and moments from the department" />
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <h2 className="text-3xl leading-tight text-foreground">Department Gallery</h2>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {gallery.map((item) => (
                      <figure
                        key={item.src}
                        className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          quality={85}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 35vw"
                        />
                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/90 to-transparent px-4 py-3 text-sm font-semibold text-white">
                          {item.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </SectionCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
