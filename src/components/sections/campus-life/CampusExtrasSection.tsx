"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import {
  laboratoriesContent,
  nccNssContent,
  studentActivitiesContent,
} from "@/lib/campus-extras-content";

export function LaboratoriesSection() {
  const { eyebrow, title, description, items } = laboratoriesContent;

  return (
    <section id="laboratories" className="scroll-mt-28 bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
          <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{description}</p>
        </ScrollReveal>

        <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {items.map((lab) => (
            <StaggerItem key={lab.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={lab.image}
                    alt={lab.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    {lab.department}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{lab.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{lab.description}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function NccNssSection() {
  const { eyebrow, title, description, items } = nccNssContent;

  return (
    <section id="ncc-nss" className="scroll-mt-28 bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
          <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{description}</p>
        </ScrollReveal>

        <StaggerContainer className="mt-8 grid gap-6 lg:grid-cols-2" stagger={0.08}>
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm lg:p-8">
                <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 rounded-lg border border-dashed border-border bg-surface/60 px-4 py-3 text-sm text-muted">
                  {item.summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function StudentActivitiesSection() {
  const { eyebrow, title, description, links } = studentActivitiesContent;

  return (
    <section id="student-activities" className="scroll-mt-28 bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
          <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-primary/25"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
