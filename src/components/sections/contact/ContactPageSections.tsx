"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { NavIcon } from "@/components/layout/NavIcons";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import {
  getSocialEntries,
  SocialIcon,
  socialDescriptions,
  socialLabels,
} from "@/components/layout/SocialIcons";
import { contactPageContent } from "@/lib/contact-content";
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

function SectionCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm ${className}`}>
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

function ContactSidebar() {
  const { sidebar } = contactPageContent;

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <SectionCard>
        <CardHeaderStrip eyebrow={sidebar.title} subtitle="Quick links and campus photo" align="left" />
        <nav aria-label="Contact navigation">
          <ul className="divide-y divide-border">
            {sidebar.links.map((link) => {
              const isActive = link.href === "/contact";
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

function ContactForm() {
  const { form } = contactPageContent;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary/40 focus:ring-2 focus:ring-primary/10";

  return (
    <SectionCard className="h-full">
      <CardHeaderStrip eyebrow={form.eyebrow} subtitle={form.description} align="left" />
      <div className="px-6 py-8 lg:px-8 lg:py-10">
        <h2 className="text-2xl text-foreground lg:text-3xl">{form.title}</h2>
        <AccentBar className="group mt-4" />

        {submitted ? (
          <div
            className="mt-8 rounded-xl border border-accent/30 bg-accent/5 px-6 py-8 text-center"
            role="status"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">{form.successMessage}</p>
          </div>
        ) : (
          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input id="contact-name" name="name" type="text" required className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-foreground">
                Phone Number <span className="text-muted">(optional)</span>
              </label>
              <input id="contact-phone" name="phone" type="tel" className={inputClass} placeholder="+91" />
            </div>
            <div>
              <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-foreground">
                Subject
              </label>
              <select id="contact-subject" name="subject" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select a subject
                </option>
                {form.subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className={`${inputClass} resize-y min-h-[120px]`}
                placeholder="How can we help you?"
              />
            </div>
            <Button type="submit" variant="primary" size="lg">
              {form.submitLabel}
            </Button>
          </form>
        )}
      </div>
    </SectionCard>
  );
}

function ContactMapCard() {
  const { map } = contactPageContent;

  return (
    <SectionCard>
      <div className="grid items-stretch lg:grid-cols-2">
        <div className="flex flex-col px-6 py-8 lg:px-10 lg:py-10">
          <CardHeaderStrip eyebrow="Campus Location" subtitle={map.description} align="left" />
          <h2 className="mt-6 text-2xl leading-tight text-foreground lg:text-3xl">{map.title}</h2>
          <p className="mt-5 flex-1 text-[15px] leading-relaxed text-muted">{contactPageContent.details[0]?.value}</p>
          <div className="mt-8">
            <Button href={map.directionsHref} variant="outline" size="lg" target="_blank" rel="noopener noreferrer">
              Get Directions
            </Button>
          </div>
          <AccentBar className="group mt-8" />
        </div>
        <div className="relative min-h-[280px] overflow-hidden border-t border-border lg:min-h-[320px] lg:border-l lg:border-t-0">
          <iframe
            title="SBIST campus location on Google Maps"
            src={map.embedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </SectionCard>
  );
}

export function ContactMainSection() {
  const { intro, details, officeHours, social } = contactPageContent;
  const socialEntries = getSocialEntries();

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14 xl:gap-16">
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <ContactSidebar />
          </ScrollReveal>

          <div className="order-1 min-w-0 space-y-8 lg:order-2">
            <ScrollReveal direction="right">
              <SectionCard>
                <CardHeaderStrip eyebrow={intro.eyebrow} subtitle={intro.description} align="left" />
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <h2 className="text-3xl leading-tight text-foreground lg:text-[2.25rem]">{intro.title}</h2>
                  <AccentBar className="group mt-6" />
                </div>
              </SectionCard>
            </ScrollReveal>

            <StaggerContainer className="grid gap-6 sm:grid-cols-2" stagger={0.08}>
              {details.map((detail) => (
                <StaggerItem key={detail.label}>
                  <SectionCard className="group motion-lift h-full">
                    <div className="px-6 py-8 lg:px-8">
                      <IconBadge icon={detail.icon} size="md" />
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.label === "Location" ? "_blank" : undefined}
                          rel={detail.label === "Location" ? "noopener noreferrer" : undefined}
                          className="mt-2 block text-base leading-relaxed text-foreground transition-colors hover:text-primary"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-base leading-relaxed text-foreground">{detail.value}</p>
                      )}
                    </div>
                  </SectionCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.05}>
              <ContactMapCard />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <SectionCard className="h-full">
                <div className="px-6 py-8 lg:px-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {officeHours.title}
                  </p>
                  <ul className="mt-4 divide-y divide-border">
                    {officeHours.items.map((item) => (
                      <li key={item.day} className="flex items-center justify-between gap-4 py-3 text-sm">
                        <span className="font-medium text-foreground">{item.day}</span>
                        <span className="text-muted">{item.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionCard>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <SectionCard>
                <CardHeaderStrip eyebrow={social.eyebrow} subtitle={social.description} align="left" />
                <div className="px-6 py-8 lg:px-8">
                  <h2 className="text-2xl leading-tight text-foreground lg:text-3xl">{social.title}</h2>
                  <AccentBar className="group mt-4" />
                  <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.06}>
                    {socialEntries.map(([platform, url]) => (
                      <StaggerItem key={platform}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group motion-lift flex h-full flex-col rounded-xl border border-border bg-surface/60 p-5 transition-colors hover:border-primary/25 hover:bg-white"
                          aria-label={`Visit SBIST on ${socialLabels[platform]}`}
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:ring-primary/20 group-hover:shadow-md">
                            <SocialIcon name={platform} className="h-5 w-5" />
                          </span>
                          <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
                            {socialLabels[platform]}
                          </h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                            {socialDescriptions[platform]}
                          </p>
                          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                            Follow us
                            <svg
                              className="h-4 w-4 transition-transform group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </a>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </SectionCard>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactDepartmentsSection() {
  const { departments } = contactPageContent;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <SectionCard>
            <CardHeaderStrip eyebrow={departments.eyebrow} subtitle="Direct your enquiry to the right team" align="left" />
            <div className="px-6 py-8 lg:px-8">
              <h2 className="text-3xl leading-tight text-foreground lg:text-4xl">{departments.title}</h2>
              <AccentBar className="group mt-4" />
            </div>
          </SectionCard>
        </ScrollReveal>

        <StaggerContainer className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-8" stagger={0.08}>
          {departments.items.map((item) => (
            <StaggerItem key={item.title}>
              <Link href={item.href} className="group motion-lift block h-full">
                <SectionCard className="h-full transition-colors hover:border-primary/20">
                  <div className="px-6 py-8 lg:px-8 lg:py-10">
                    <IconBadge icon={item.icon} size="md" />
                    <h3 className="mt-5 text-xl text-foreground group-hover:text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Learn more
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
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
