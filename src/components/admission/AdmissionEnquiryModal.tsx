"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { admissionEnquiryContent } from "@/lib/admission-content";
import { siteConfig } from "@/lib/navigation";

type AdmissionEnquiryModalProps = {
  open: boolean;
  onClose: () => void;
};

const inputClass =
  "w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary/40 focus:ring-2 focus:ring-primary/10";

export function AdmissionEnquiryModal({ open, onClose }: AdmissionEnquiryModalProps) {
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    setStatus("idle");
    setError("");
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/admission-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          course: data.get("course"),
          address: data.get("address"),
          state: data.get("state"),
          city: data.get("city"),
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to submit enquiry.");
    }
  }

  if (!open) return null;

  const { promo, courses, states, submitLabel, successMessage, subtitle } =
    admissionEnquiryContent;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-dark/70 p-4 backdrop-blur-[2px]"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative grid max-h-[92dvh] w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-white shadow-2xl lg:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-primary/30 hover:text-primary"
          aria-label="Close admission enquiry form"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Promo panel */}
        <aside className="relative hidden overflow-hidden bg-primary px-7 py-8 text-white lg:flex lg:flex-col">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(182,140,58,0.45), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 90%, rgba(229,185,66,0.2), transparent 50%)",
            }}
            aria-hidden
          />
          <div className="relative">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.shortName}
              width={160}
              height={48}
              className="rounded-md bg-[#f5f3ec] px-2 py-1 object-contain"
            />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {promo.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-2xl leading-snug">{promo.headline}</h2>
            <p className="mt-3 text-sm text-white/75">{subtitle}</p>
            <ul className="mt-8 space-y-3">
              {promo.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <p className="relative mt-auto pt-10 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {siteConfig.name}
          </p>
        </aside>

        {/* Form panel */}
        <div className="overflow-y-auto px-5 py-7 sm:px-8 sm:py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Admissions</p>
          <h2 id={titleId} className="mt-2 text-2xl font-semibold text-primary lg:text-[1.75rem]">
            Admission Form
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-accent" aria-hidden />

          {status === "success" ? (
            <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 px-5 py-8 text-center" role="status">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">{successMessage}</p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Close
              </button>
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="adm-name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  ref={firstFieldRef}
                  id="adm-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="adm-email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    id="adm-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="adm-phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    id="adm-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="adm-course" className="mb-1.5 block text-sm font-medium text-foreground">
                  Select Course <span className="text-accent">*</span>
                </label>
                <select id="adm-course" name="course" required className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select course applying for
                  </option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="adm-address" className="mb-1.5 block text-sm font-medium text-foreground">
                  Address <span className="text-accent">*</span>
                </label>
                <textarea
                  id="adm-address"
                  name="address"
                  required
                  rows={2}
                  autoComplete="street-address"
                  className={`${inputClass} min-h-[72px] resize-y`}
                  placeholder="House / street / locality"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="adm-state" className="mb-1.5 block text-sm font-medium text-foreground">
                    State <span className="text-accent">*</span>
                  </label>
                  <select id="adm-state" name="state" required className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select state
                    </option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="adm-city" className="mb-1.5 block text-sm font-medium text-foreground">
                    City <span className="text-accent">*</span>
                  </label>
                  <input
                    id="adm-city"
                    name="city"
                    type="text"
                    required
                    autoComplete="address-level2"
                    className={inputClass}
                    placeholder="Enter city"
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Sending..." : submitLabel}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
