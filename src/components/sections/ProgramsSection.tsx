"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  premiumTransitionFast,
} from "@/components/motion/ScrollAnimations";
import { departments, notices } from "@/lib/home-content";
import { sbiolPageContent } from "@/lib/sbiol-content";

type TabId = "faculty" | "programs" | "sbiol";

type Department = (typeof departments)[number];
type SbiolCourse = (typeof sbiolPageContent.courses.items)[number];

const tabs: { id: TabId; label: string; icon: ReactNode }[] = [
  {
    id: "faculty",
    label: "Academic Programs",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" d="M12 3L2 8l10 5 10-5-10-5z" />
        <path strokeLinecap="round" d="M4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5" />
      </svg>
    ),
  },
  {
    id: "programs",
    label: "All Programs",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path strokeLinecap="round" d="M4 4.5A2.5 2.5 0 016.5 7H20" />
        <path strokeLinecap="round" d="M6.5 7v10" />
      </svg>
    ),
  },
  {
    id: "sbiol",
    label: "SBIOL Online",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path strokeLinecap="round" d="M8 20h8M12 16v4" />
      </svg>
    ),
  },
];

function MortarboardIcon() {
  return (
    <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3L2 8l10 5 10-5-10-5zM4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10l-10 5" />
    </svg>
  );
}

function categoryLabel(category: Department["category"]) {
  if (category === "engineering") return "Engineering";
  if (category === "management") return "Management";
  return "Computer Applications";
}

/* ─── Academic Programs tab ─── */

function DepartmentCard({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block h-full min-h-[220px] overflow-hidden rounded-2xl bg-primary-dark/40 motion-lift"
    >
      <Image
        src={image}
        alt={title}
        fill
        quality={100}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/30 to-transparent" />
      <h3 className="absolute bottom-0 left-0 right-0 p-5 text-lg leading-snug text-white lg:text-xl">
        {title}
      </h3>
    </Link>
  );
}

function ApplyCard() {
  return (
    <div className="flex h-full min-h-[220px] flex-col rounded-2xl border border-white/10 bg-primary-dark/80 p-6 text-white">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5">
        <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" d="M12 3L2 8l10 5 10-5-10-5z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Our Programs</p>
      <h3 className="mt-2 text-xl font-semibold leading-snug">Courses designed for real careers</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
        Industry-aligned curriculum, experienced faculty and hands-on labs across engineering, management and computer
        applications.
      </p>

      <Link
        href="/contact"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-dark transition-colors hover:bg-accent-hover"
      >
        Apply Now
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

function NoticeCard() {
  return (
    <div className="flex h-full min-h-[220px] flex-col rounded-2xl bg-white p-6">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <h3 className="text-base font-semibold text-foreground">Notice</h3>
      </div>

      <ul className="mt-4 flex flex-1 flex-col justify-between gap-3">
        {notices.map((notice) => (
          <li key={notice.ref} className="border-b border-border pb-3 last:border-0 last:pb-0">
            {"href" in notice && notice.href ? (
              <Link href={notice.href} className="text-sm font-semibold leading-snug text-foreground hover:text-accent">
                {notice.title}
              </Link>
            ) : (
              <p className="text-sm font-semibold leading-snug text-foreground">{notice.title}</p>
            )}
            <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
              <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              {notice.date}
            </div>
            <p className="mt-1 font-mono text-[10px] text-muted/80">{notice.ref}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FacultyGrid() {
  const [first, second, third, fourth] = departments;

  return (
    <StaggerContainer
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:items-stretch"
      stagger={0.06}
    >
      <StaggerItem className="order-1 h-full lg:order-none lg:col-start-1 lg:row-start-1">
        <ApplyCard />
      </StaggerItem>

      {first && (
        <StaggerItem className="order-2 h-full lg:order-none lg:col-start-2 lg:row-start-1">
          <DepartmentCard title={first.title} image={first.image} href={first.href} />
        </StaggerItem>
      )}

      {second && (
        <StaggerItem className="order-3 h-full lg:order-none lg:col-start-3 lg:row-start-1">
          <DepartmentCard title={second.title} image={second.image} href={second.href} />
        </StaggerItem>
      )}

      {third && (
        <StaggerItem className="order-4 h-full lg:order-none lg:col-start-2 lg:row-start-2">
          <DepartmentCard title={third.title} image={third.image} href={third.href} />
        </StaggerItem>
      )}

      {fourth && (
        <StaggerItem className="order-5 h-full lg:order-none lg:col-start-3 lg:row-start-2">
          <DepartmentCard title={fourth.title} image={fourth.image} href={fourth.href} />
        </StaggerItem>
      )}

      <StaggerItem className="order-6 h-full sm:col-span-2 lg:order-none lg:col-span-1 lg:col-start-1 lg:row-start-2">
        <NoticeCard />
      </StaggerItem>
    </StaggerContainer>
  );
}

/* ─── All Programs tab — all 8 programs ─── */

function ProgramCatalogCard({ dept }: { dept: Department }) {
  return (
    <Link
      href={dept.href}
      className="group relative flex min-h-[260px] flex-col overflow-hidden border border-white/10 bg-primary-dark transition-colors hover:border-accent/45 sm:min-h-[280px]"
    >
      <Image
        src={dept.image}
        alt={dept.title}
        fill
        quality={100}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/55 to-primary-dark/15" />
      <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative mt-auto flex flex-1 flex-col justify-end p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
            {categoryLabel(dept.category)}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-wide text-white/55">
            {dept.duration}
          </span>
        </div>
        <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-white lg:text-xl">
          {dept.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/75 sm:text-sm">
          {dept.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
          Explore program
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function ProgramsCatalog() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-white/70">
          Eight programs across engineering, management and computer applications — built for careers that start on
          campus.
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {departments.length} programs
        </p>
      </div>

      <StaggerContainer
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
        stagger={0.045}
      >
        {departments.map((dept) => (
          <StaggerItem key={dept.title} className="h-full">
            <ProgramCatalogCard dept={dept} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-6 flex justify-end sm:mt-8">
        <Link
          href="/academics#courses"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent"
        >
          View full academics
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

/* ─── SBIOL Online tab ─── */

function SbiolCourseCard({ course }: { course: SbiolCourse }) {
  return (
    <Link
      href="/sbiol#courses"
      className="group relative flex min-h-[280px] flex-col overflow-hidden border border-white/10 bg-primary-dark transition-colors hover:border-accent/45 sm:min-h-[320px]"
    >
      <Image
        src={course.image}
        alt={course.title}
        fill
        quality={100}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/55 to-primary-dark/15" />
      <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative mt-auto flex flex-1 flex-col justify-end p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
            {course.category}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-wide text-white/55">{course.duration}</span>
        </div>
        <h3 className="mt-2 font-heading text-xl font-semibold leading-snug text-white lg:text-2xl">
          {course.shortTitle}
        </h3>
        <p className="mt-1 text-sm font-medium text-white/85">{course.title}</p>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/75 sm:text-sm">{course.focus}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
          Explore online
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function SbiolOnlinePanel() {
  const { courses, motto, brochureHref } = sbiolPageContent;

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{motto}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{courses.description}</p>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {courses.items.length} online degrees
        </p>
      </div>

      <StaggerContainer className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3" stagger={0.05}>
        {courses.items.map((course) => (
          <StaggerItem key={course.id} className="h-full">
            <SbiolCourseCard course={course} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 sm:mt-8">
        <a
          href={brochureHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-white/80 transition-colors hover:text-accent"
        >
          Download brochure
        </a>
        <Link
          href="/sbiol"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent"
        >
          Explore SBIOL
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function TabPanel({ activeTab }: { activeTab: TabId }) {
  if (activeTab === "programs") return <ProgramsCatalog />;
  if (activeTab === "sbiol") return <SbiolOnlinePanel />;
  return <FacultyGrid />;
}

export function ProgramsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("faculty");
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-primary py-20 lg:py-28" id="programs">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-white/80">
                <MortarboardIcon />
                <span className="text-sm font-medium">Programs & Study</span>
              </div>
              <h2 className="mt-3 text-3xl text-white lg:text-4xl">Academics & Programs</h2>
            </div>

            <nav className="flex flex-wrap gap-6 border-b border-white/10 lg:gap-8" aria-label="Program categories">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={[
                      "flex items-center gap-2 border-b-2 pb-3 text-sm font-medium motion-premium",
                      isActive
                        ? "border-accent text-accent"
                        : "border-transparent text-white/60 hover:text-white",
                    ].join(" ")}
                  >
                    <span className={isActive ? "text-accent" : "text-white/50"}>{tab.icon}</span>
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </ScrollReveal>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
              transition={premiumTransitionFast}
            >
              <TabPanel activeTab={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
