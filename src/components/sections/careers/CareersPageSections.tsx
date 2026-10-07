"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { NavIcon } from "@/components/layout/NavIcons";
import { Button } from "@/components/ui/Button";
import {
  ScaleReveal,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/ScrollAnimations";
import { careersPageContent } from "@/lib/careers-content";
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

function DepartmentTag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
      {label}
    </span>
  );
}

function CareersSidebar() {
  const { sidebar } = careersPageContent;

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <SectionCard className="motion-lift">
        <CardHeaderStrip eyebrow={sidebar.title} subtitle="Navigate career sections" align="left" />
        <nav aria-label="Careers navigation">
          <ul className="divide-y divide-border">
            {sidebar.links.map((link) => {
              const isActive = link.href === "/careers";
              const isExternal = link.href.startsWith("mailto:");

              return (
                <li key={link.href}>
                  {isExternal ? (
                    <a
                      href={link.href}
                      className="group flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
                    >
                      <IconBadge icon={link.icon} size="sm" />
                      <span className="flex-1">{link.label}</span>
                    </a>
                  ) : (
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
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </SectionCard>
    </aside>
  );
}

function RoleBlock({
  eyebrow,
  title,
  roles,
  departments,
  qualifications,
}: {
  eyebrow: string;
  title: string;
  roles: string[];
  departments: string[];
  qualifications: string;
}) {
  return (
    <SectionCard className="group motion-lift h-full">
      <CardHeaderStrip eyebrow={eyebrow} align="left" />
      <div className="px-6 py-8 lg:px-8 lg:py-10">
        <h3 className="text-2xl leading-tight text-foreground lg:text-3xl">{title}</h3>
        <StaggerContainer className="mt-4 flex flex-wrap gap-2" stagger={0.04}>
          {roles.map((role) => (
            <StaggerItem key={role}>
              <span className="inline-block rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-white">
                {role}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Departments</p>
        <StaggerContainer className="mt-3 flex flex-wrap gap-2" stagger={0.04}>
          {departments.map((dept) => (
            <StaggerItem key={dept}>
              <DepartmentTag label={dept} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Qualifications</p>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{qualifications}</p>
        <AccentBar className="mt-6" />
      </div>
    </SectionCard>
  );
}

export function CareersMainSection() {
  const { affiliations, announcement, engineeringRoles, scienceRoles, criteria, apply } = careersPageContent;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14 xl:gap-16">
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <CareersSidebar />
          </ScrollReveal>

          <div className="order-1 min-w-0 space-y-8 lg:order-2">
            <ScrollReveal direction="right">
              <SectionCard className="group motion-lift">
                <div className="border-b border-border bg-primary px-6 py-4 text-center lg:px-8">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-white lg:text-base">
                    {announcement.title}
                  </p>
                </div>
                <CardHeaderStrip eyebrow={announcement.eyebrow} subtitle={announcement.description} align="left" />
                <div className="space-y-3 px-6 py-6 text-sm leading-relaxed text-muted lg:px-8">
                  <p className="font-medium text-foreground">{affiliations.address}</p>
                  {affiliations.approvals.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div className="border-t border-border bg-surface/40 px-6 py-6 lg:px-8">
                  <p className="text-sm text-muted">
                    To apply, email your résumé to{" "}
                    <a
                      href={apply.applicationMailto}
                      className="font-semibold text-primary hover:text-accent"
                    >
                      {apply.email}
                    </a>
                    .
                  </p>
                  <div className="mt-4">
                    <Button href={apply.applicationMailto} variant="accent" size="md">
                      {apply.applicationCta}
                    </Button>
                  </div>
                </div>
              </SectionCard>
            </ScrollReveal>

            <div id="positions" className="scroll-mt-28">
              <StaggerContainer className="space-y-8" stagger={0.08}>
                <StaggerItem>
                  <RoleBlock
                    eyebrow={engineeringRoles.eyebrow}
                    title={engineeringRoles.title}
                    roles={engineeringRoles.roles}
                    departments={engineeringRoles.departments}
                    qualifications={engineeringRoles.qualifications}
                  />
                </StaggerItem>
                <StaggerItem>
                  <RoleBlock
                    eyebrow={scienceRoles.eyebrow}
                    title={scienceRoles.title}
                    roles={scienceRoles.roles}
                    departments={scienceRoles.departments}
                    qualifications={scienceRoles.qualifications}
                  />
                </StaggerItem>
              </StaggerContainer>
            </div>

            <ScrollReveal delay={0.1}>
              <SectionCard className="group motion-lift">
                <CardHeaderStrip
                  eyebrow="Selection Criteria"
                  subtitle="Pay scale and eligibility preferences for faculty recruitment"
                  align="left"
                />
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Pay Scale</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{criteria.payScale}</p>
                  <StaggerContainer className="mt-6 space-y-3" stagger={0.05}>
                    {criteria.preferences.map((item) => (
                      <StaggerItem key={item}>
                        <div className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                          {item}
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                  <ScaleReveal delay={0.1}>
                    <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 px-5 py-4 motion-lift">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        Application Deadline
                      </p>
                      <p className="mt-1 text-2xl font-bold text-primary">{criteria.deadline}</p>
                      <p className="mt-2 text-sm text-muted">{criteria.deadlineNote}</p>
                      <div className="mt-4">
                        <Button href={apply.applicationMailto} variant="primary" size="md">
                          {apply.applicationCta}
                        </Button>
                      </div>
                    </div>
                  </ScaleReveal>
                </div>
              </SectionCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CareersApplySection() {
  const { apply } = careersPageContent;

  return (
    <section id="apply" className="scroll-mt-28 bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScaleReveal>
          <SectionCard className="motion-lift overflow-hidden">
            <div className="grid items-stretch lg:grid-cols-2">
              <ScrollReveal direction="left" className="flex flex-col">
                <div className="px-6 py-8 lg:px-10 lg:py-10">
                  <CardHeaderStrip eyebrow={apply.eyebrow} subtitle={apply.description} align="left" />
                  <h2 className="mt-6 text-3xl leading-tight text-foreground lg:text-4xl">{apply.title}</h2>
                  <p className="mt-4 text-sm text-muted">{apply.instituteName}</p>

                  <StaggerContainer className="mt-8 space-y-5" stagger={0.06}>
                    <StaggerItem>
                      <div className="group flex items-start gap-4 rounded-xl border border-border bg-surface/40 p-5 motion-lift">
                        <IconBadge icon="apply" size="sm" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Email</p>
                          <a
                            href={`mailto:${apply.email}`}
                            className="mt-1 block text-base font-medium text-primary transition-colors hover:text-accent"
                          >
                            {apply.email}
                          </a>
                        </div>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="group flex items-start gap-4 rounded-xl border border-border bg-surface/40 p-5 motion-lift">
                        <IconBadge icon="requirements" size="sm" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Phone</p>
                          <a
                            href={`tel:${apply.phone.replace(/\s/g, "")}`}
                            className="mt-1 block text-base font-medium text-primary transition-colors hover:text-accent"
                          >
                            {apply.phone}
                          </a>
                        </div>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="group flex items-start gap-4 rounded-xl border border-border bg-surface/40 p-5 motion-lift">
                        <IconBadge icon="programs" size="sm" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Website</p>
                          <a
                            href={apply.websiteHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block text-base font-medium text-primary transition-colors hover:text-accent"
                          >
                            {apply.website}
                          </a>
                        </div>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>

                  <ScrollReveal delay={0.15}>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button href={apply.applicationMailto} variant="primary" size="lg">
                        {apply.applicationCta}
                      </Button>
                      <Button href={`mailto:${apply.email}`} variant="outline" size="lg">
                        Mail {apply.email}
                      </Button>
                    </div>

                    <p className="mt-8 text-right text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                      — {apply.signatory}
                    </p>
                  </ScrollReveal>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.1}>
                <div className="group relative min-h-[320px] overflow-hidden border-t border-border bg-primary lg:min-h-full lg:border-l lg:border-t-0">
                  <Image
                    src={careersPageContent.sidebar.image}
                    alt="SBIST campus"
                    fill
                    className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-dark/80" />
                  <div className="relative flex h-full flex-col justify-center px-8 py-10 text-white lg:px-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Join Our Faculty</p>
                    <p className="mt-4 text-2xl leading-snug lg:text-3xl">
                      Shape the next generation of engineers at Chrompet, Chennai.
                    </p>
                    <AccentBar className="mt-6 bg-accent/60" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </SectionCard>
        </ScaleReveal>
      </div>
    </section>
  );
}
