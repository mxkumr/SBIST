"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import type { CourseRecord } from "@/lib/courses-content";
import { studentTestimonials, videoTestimonials, getYoutubeEmbedUrl } from "@/lib/testimonials-content";

function SectionCard({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <div
      id={id}
      className={`relative scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-white shadow-sm ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10" aria-hidden />
      <div className="relative">{children}</div>
    </div>
  );
}

function Block({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <SectionCard id={id} className="px-6 py-8 lg:px-8 lg:py-10">
      <h2 className="text-2xl leading-tight text-foreground lg:text-3xl">{title}</h2>
      <div className="mt-3 h-0.5 w-10 rounded-full bg-accent/50" aria-hidden />
      <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-muted md:leading-[1.75]">{children}</div>
    </SectionCard>
  );
}

function PendingNote({ text }: { text: string }) {
  const isPending = text.includes("PENDING_");
  return (
    <p className={isPending ? "rounded-lg border border-dashed border-border bg-surface/60 px-4 py-3 text-sm" : ""}>
      {text}
    </p>
  );
}

export function CourseDetailSections({ course }: { course: CourseRecord }) {
  const relatedTestimonials =
    studentTestimonials.filter(
      (t) => t.title.includes(course.shortTitle) || t.title.includes(course.title),
    ).length > 0
      ? studentTestimonials.filter(
          (t) => t.title.includes(course.shortTitle) || t.title.includes(course.title),
        )
      : studentTestimonials;

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <SectionCard>
          <div className="grid items-stretch lg:grid-cols-2">
            <div className="px-6 py-8 lg:px-10 lg:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Course Overview</p>
              <h1 className="mt-3 text-3xl leading-tight text-foreground lg:text-4xl">{course.degree}</h1>
              <p className="mt-2 text-sm font-medium text-primary">
                {course.duration} · {course.category === "engineering" ? "Engineering" : course.category}
              </p>
              <p className="mt-6 text-[15px] leading-relaxed text-muted md:text-justify md:leading-[1.8]">
                {course.overview}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/admissions" variant="primary" size="lg">
                  Admission Enquiry
                </Button>
                <Button href="/academics#courses" variant="outline" size="lg">
                  All Programs
                </Button>
              </div>
            </div>
            <div className="relative min-h-[240px] border-t border-border lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src={course.image}
                alt={`${course.title} facilities at SBIST`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
            </div>
          </div>
        </SectionCard>
      </ScrollReveal>

      <ScrollReveal>
        <Block title="Course Details" id="details">
          <ul className="list-disc space-y-2 pl-5">
            {course.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-2">
        <ScrollReveal>
          <Block title="Eligibility" id="eligibility">
            <PendingNote text={course.eligibility} />
          </Block>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <Block title="Qualification" id="qualification">
            <p>{course.qualification}</p>
          </Block>
        </ScrollReveal>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <ScrollReveal>
          <Block title="Approval / Accreditation" id="approval">
            <PendingNote text={course.approval} />
          </Block>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <Block title="Duration" id="duration">
            <p>{course.duration}</p>
          </Block>
        </ScrollReveal>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <ScrollReveal>
          <Block title="Syllabus" id="syllabus">
            <PendingNote text={course.syllabus} />
          </Block>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <Block title="Regulations" id="regulations">
            <PendingNote text={course.regulations} />
          </Block>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <Block title="Academic Information" id="academic">
          <ul className="list-disc space-y-2 pl-5">
            {course.academicDetails.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>
      </ScrollReveal>

      <ScrollReveal>
        <Block title="Department Facilities" id="facilities">
          <ul className="list-disc space-y-2 pl-5">
            {course.facilities.map((item) => (
              <li key={item}>
                <PendingNote text={item} />
              </li>
            ))}
          </ul>
        </Block>
      </ScrollReveal>

      <ScrollReveal>
        <Block title="Career Opportunities" id="careers">
          <ul className="list-disc space-y-2 pl-5">
            {course.careerOpportunities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>
      </ScrollReveal>

      <ScrollReveal>
        <Block title="Student Reviews" id="reviews">
          <StaggerContainer className="space-y-4" stagger={0.06}>
            {relatedTestimonials.slice(0, 2).map((t) => (
              <StaggerItem key={t.id}>
                <blockquote className="rounded-xl border border-border bg-surface/50 px-5 py-4">
                  <p className="font-serif text-base italic leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-sm">
                    <span className="font-semibold text-primary">{t.name}</span>
                    <span className="text-muted"> — {t.title}</span>
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Block>
      </ScrollReveal>

      <ScrollReveal>
        <Block title="Video Testimonials" id="videos">
          <p className="mb-4 text-sm">
            Video testimonials will appear here when official student videos are provided.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {videoTestimonials.map((video) => {
              const embed = getYoutubeEmbedUrl(video.youtubeUrl);
              return (
                <div key={video.id} className="rounded-xl border border-dashed border-border bg-surface/40 p-4">
                  {embed ? (
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
                      <iframe
                        title={video.accessibleTitle}
                        src={embed}
                        className="absolute inset-0 h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-video items-center justify-center rounded-lg bg-primary/5 text-center text-sm text-muted">
                      PENDING_VIDEO_URL
                      <span className="sr-only">{video.accessibleTitle}</span>
                    </div>
                  )}
                  <p className="mt-3 text-sm font-semibold text-foreground">{video.title}</p>
                  <p className="text-xs text-muted">
                    {video.studentName} · {video.program}
                  </p>
                </div>
              );
            })}
          </div>
        </Block>
      </ScrollReveal>

      <ScrollReveal>
        <SectionCard className="bg-primary px-6 py-10 text-center text-white lg:px-10">
          <h2 className="text-2xl lg:text-3xl">Ready to apply for {course.shortTitle}?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">
            Submit an admission enquiry and our team will guide you through eligibility and next steps.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/admissions" variant="accent" size="lg">
              Admission Enquiry
            </Button>
            <Button href="/contact" variant="white" size="lg">
              Contact Office
            </Button>
          </div>
          <p className="mt-6 text-xs text-white/60">
            <Link href="/academics" className="underline-offset-2 hover:underline">
              Back to Academics
            </Link>
          </p>
        </SectionCard>
      </ScrollReveal>
    </div>
  );
}
