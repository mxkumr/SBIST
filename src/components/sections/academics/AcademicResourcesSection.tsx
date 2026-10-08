"use client";

import Link from "next/link";
import { NavIcon } from "@/components/layout/NavIcons";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import { academicsPageContent } from "@/lib/academics-content";
import { courses, courseHref } from "@/lib/courses-content";

export function AcademicResourcesSection() {
  const { academicResources } = academicsPageContent;
  const engineering = courses.filter((c) => c.category === "engineering");

  return (
    <>
      <section id="departments" className="scroll-mt-28 bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Departments</p>
            <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-4xl">
              Engineering Departments
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
              Each engineering programme has a dedicated course page with overview, eligibility placeholders,
              syllabus structure and admission CTA.
            </p>
          </ScrollReveal>
          <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {engineering.map((course) => (
              <StaggerItem key={course.slug}>
                <Link
                  href={courseHref(course.slug)}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-colors hover:border-primary/25"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {course.shortTitle}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{course.degree}</p>
                  <span className="mt-4 text-sm font-semibold text-primary">View course →</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="academic-resources" className="scroll-mt-28 bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {academicResources.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-4xl">
              {academicResources.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
              {academicResources.description}
            </p>
          </ScrollReveal>

          <StaggerContainer className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {academicResources.items.map((item) => (
              <StaggerItem key={item.label}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-colors hover:border-primary/20"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <NavIcon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
                    {item.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
