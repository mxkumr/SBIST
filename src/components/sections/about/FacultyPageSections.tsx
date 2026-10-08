"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { FacultyCard } from "@/components/cards/FacultyCard";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import {
  deanMessageContent,
  facultyMembers,
  facultyPageContent,
  hasRealFacultyData,
  staffMembers,
} from "@/lib/faculty-content";

function PlaceholderBanner({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-surface/70 px-4 py-3 text-sm text-muted">
      {children}
    </div>
  );
}

export function DeanMessageSection() {
  const dean = deanMessageContent;
  const pending = dean.name.startsWith("PENDING_");

  return (
    <section id="dean" className="scroll-mt-28 bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="grid lg:grid-cols-[280px_1fr]">
              <div className="relative min-h-[240px] border-b border-border bg-surface lg:border-b-0 lg:border-r">
                <Image
                  src={dean.photo}
                  alt={dean.photoAlt}
                  fill
                  className="object-contain p-8"
                  sizes="280px"
                />
              </div>
              <div className="px-6 py-8 lg:px-10 lg:py-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{dean.eyebrow}</p>
                <h2 className="mt-3 text-3xl leading-tight text-foreground">{dean.title}</h2>
                <div className="mt-3 h-0.5 w-10 rounded-full bg-accent/50" aria-hidden />
                {pending ? (
                  <div className="mt-6 space-y-3">
                    <PlaceholderBanner>
                      Official Dean name, designation, portrait and message are required from the college
                      before this section is published with real content.
                    </PlaceholderBanner>
                    <p className="text-sm text-muted">{dean.paragraphs[0]}</p>
                  </div>
                ) : (
                  <>
                    <p className="mt-4 text-lg font-semibold text-primary">{dean.name}</p>
                    <p className="text-sm text-muted">{dean.designation}</p>
                    <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted md:text-justify md:leading-[1.8]">
                      {dean.paragraphs.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function FacultyDirectorySection() {
  const { intro } = facultyPageContent;

  return (
    <section id="faculty" className="scroll-mt-28 bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{intro.eyebrow}</p>
            <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-4xl">{intro.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted md:leading-[1.8]">{intro.description}</p>
          </div>
        </ScrollReveal>

        {!hasRealFacultyData && (
          <div className="mt-8">
            <PlaceholderBanner>
              Faculty profiles are structured and ready. Replace PENDING_* fields in{" "}
              <code className="text-xs">src/lib/faculty-content.ts</code> with official names,
              designations, qualifications and photos.
            </PlaceholderBanner>
          </div>
        )}

        <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {facultyMembers.map((member) => (
            <StaggerItem key={member.id}>
              {member.name.startsWith("PENDING_") ? (
                <div className="rounded-2xl border border-dashed border-border bg-white p-6 text-sm text-muted">
                  <p className="font-semibold text-foreground">Faculty profile placeholder</p>
                  <ul className="mt-3 space-y-1 text-xs">
                    <li>Name: {member.name}</li>
                    <li>Designation: {member.designation}</li>
                    <li>Department: {member.department}</li>
                    <li>Qualification: {member.qualification}</li>
                    <li>Experience: {member.experience}</li>
                    <li>Specialization: {member.specialization}</li>
                  </ul>
                </div>
              ) : (
                <FacultyCard
                  name={member.name}
                  role={`${member.designation} · ${member.department}`}
                  image={member.photo}
                  href="/about/faculty"
                />
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function StaffDirectorySection() {
  return (
    <section id="staff" className="scroll-mt-28 bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl leading-tight text-foreground">Staff Information</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
            Administrative and support staff details will be listed here once officially provided.
          </p>
        </ScrollReveal>
        <StaggerContainer className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {staffMembers.map((member) => (
            <StaggerItem key={member.id}>
              <div className="rounded-2xl border border-dashed border-border bg-white p-6 text-sm text-muted">
                <p className="font-semibold text-foreground">Staff profile placeholder</p>
                <ul className="mt-3 space-y-1 text-xs">
                  <li>Name: {member.name}</li>
                  <li>Designation: {member.designation}</li>
                  <li>Department: {member.department}</li>
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
