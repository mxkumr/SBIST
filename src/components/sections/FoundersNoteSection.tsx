"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, ScaleReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import { foundersNoteContent, upcomingEventsContent } from "@/lib/home-content";

function MortarboardIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 8l10 5 10-5-10-5zM4 10v5c0 2.5 3.5 4.5 8 4.5s8-2 8-4.5v-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10l-10 5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function DotsIcon() {
  return (
    <span className="grid grid-cols-2 gap-0.5" aria-hidden>
      {[0, 1, 2, 3].map((dot) => (
        <span key={dot} className="h-1 w-1 rounded-full bg-primary" />
      ))}
    </span>
  );
}

function StripeDecoration() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 right-0 h-20 w-28 opacity-[0.07]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 8px)",
      }}
      aria-hidden
    />
  );
}

type EventItem = (typeof upcomingEventsContent.events)[number];

function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={event.href}
      className="group relative flex gap-4 overflow-hidden rounded-2xl border border-border bg-white p-4 shadow-sm motion-lift hover:shadow-md sm:gap-5 sm:p-5"
    >
      <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-32">
        <Image
          src={event.image}
          alt=""
          fill
          quality={100}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="256px"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <CalendarIcon />
            {event.date}
          </span>
          <span className="text-border">|</span>
          <span className="inline-flex items-center gap-1">
            <ClockIcon />
            {event.time}
          </span>
        </div>
        <h3 className="mt-2 line-clamp-2 font-serif text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-lg">
          {event.title}
        </h3>
        <p className="mt-2 inline-flex items-start gap-1.5 text-xs text-muted sm:text-sm">
          <PinIcon />
          <span className="line-clamp-2">{event.location}</span>
        </p>
      </div>

      <StripeDecoration />
    </Link>
  );
}

function UpcomingEvents() {
  const { eyebrow, title, viewMoreHref, events } = upcomingEventsContent;

  return (
    <div className="bg-background pt-20 pb-14 lg:pt-24 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <MortarboardIcon />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {eyebrow}
                </span>
              </div>
              <h2 className="mt-3 text-3xl leading-tight text-foreground lg:text-[2.35rem]">
                {title}
              </h2>
            </div>
            <Link
              href={viewMoreHref}
              className="inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/20 hover:shadow-md sm:self-auto"
            >
              View More
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" stagger={0.06}>
          {events.map((event) => (
            <StaggerItem key={event.title}>
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}

function FoundersNoteCard() {
  const { quote, name, title, readMoreHref } = foundersNoteContent;

  return (
    <div className="overflow-hidden rounded-3xl bg-primary shadow-2xl">
      <div className="flex flex-col gap-6 p-5 sm:gap-8 sm:p-6 lg:p-8">
        <blockquote className="text-sm italic leading-relaxed text-white/88 sm:text-base sm:leading-7 lg:text-lg">
          &ldquo;{quote}&rdquo;
        </blockquote>

        <div>
          <p className="font-serif text-xl font-semibold text-white sm:text-2xl">{name}</p>
          <p className="mt-0.5 text-sm text-white/65">{title}</p>
        </div>

        <div className="flex justify-end">
          <Link
            href={readMoreHref}
            className="inline-flex items-center gap-3 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-accent-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Read More
            <DotsIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FoundersNoteSection() {
  return (
    <section id="founders-note">
      <UpcomingEvents />

      <div className="relative overflow-hidden bg-background">
        <div className="absolute inset-x-0 bottom-0 top-24 sm:top-32 lg:top-40">
          <Image
            src="/images/main-building-side.JPG"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-primary/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/25 to-primary/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 sm:pt-12 lg:px-8 lg:pt-16">
          <ScaleReveal className="-mb-20 sm:-mb-24 lg:-mb-28">
            <FoundersNoteCard />
          </ScaleReveal>
        </div>

        <div className="relative z-10 h-[260px] sm:h-[300px] lg:h-[340px]" aria-hidden />
      </div>
    </section>
  );
}
