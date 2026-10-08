"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import {
  buildMailtoUrl,
  COURSE_INTEREST_OPTIONS,
  validateEnquiryForm,
  type EnquiryFormValues,
  type FormErrors,
} from "@/lib/form-utils";
import { siteConfig } from "@/lib/navigation";

export type EnquiryFormProps = {
  variant?: "contact" | "admission";
  submitLabel: string;
  successMessage: string;
  failureMessage: string;
  defaultDepartment?: string;
  className?: string;
};

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 disabled:opacity-60";

const errorClass = "mt-1.5 text-xs text-red-700";

export function EnquiryForm({
  variant = "contact",
  submitLabel,
  successMessage,
  failureMessage,
  defaultDepartment = "",
  className = "",
}: EnquiryFormProps) {
  const formId = useId();
  const [values, setValues] = useState<EnquiryFormValues>({
    studentName: "",
    email: "",
    phone: "",
    department: defaultDepartment,
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);

  function updateField<K extends keyof EnquiryFormValues>(key: K, value: EnquiryFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateEnquiryForm(values, { requirePhone: true });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    const subject =
      variant === "admission"
        ? `Admission Enquiry — ${values.department}`
        : `Student Enquiry — ${values.department}`;
    const mailto = buildMailtoUrl(siteConfig.email, subject, values);
    setMailtoHref(mailto);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, variant, subject }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        mailtoUrl?: string;
      };

      if (data.mailtoUrl) {
        setMailtoHref(data.mailtoUrl);
      }

      // Delivery is not fully configured server-side; open mailto as the integration path
      if (typeof window !== "undefined") {
        window.location.href = data.mailtoUrl || mailto;
      }

      if (res.ok || res.status === 202) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      if (typeof window !== "undefined") {
        window.location.href = mailto;
      }
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-xl border border-accent/30 bg-accent/5 px-6 py-8 text-center ${className}`}
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-foreground">{successMessage}</p>
        {mailtoHref && (
          <a
            href={mailtoHref}
            className="mt-4 inline-flex text-sm font-semibold text-primary underline-offset-2 hover:underline"
          >
            Open email again
          </a>
        )}
        <button
          type="button"
          className="mt-4 block w-full text-sm font-medium text-muted underline-offset-2 hover:underline"
          onClick={() => {
            setStatus("idle");
            setValues({
              studentName: "",
              email: "",
              phone: "",
              department: defaultDepartment,
              message: "",
            });
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className={`space-y-5 ${className}`} onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="mb-2 block text-sm font-medium text-foreground">
            Student Name <span className="text-accent">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="studentName"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.studentName)}
            aria-describedby={errors.studentName ? `${formId}-name-error` : undefined}
            className={inputClass}
            placeholder="Full name"
            value={values.studentName}
            disabled={status === "loading"}
            onChange={(e) => updateField("studentName", e.target.value)}
          />
          {errors.studentName && (
            <p id={`${formId}-name-error`} className={errorClass} role="alert">
              {errors.studentName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className="mb-2 block text-sm font-medium text-foreground">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={inputClass}
            placeholder="you@example.com"
            value={values.email}
            disabled={status === "loading"}
            onChange={(e) => updateField("email", e.target.value)}
          />
          {errors.email && (
            <p id={`${formId}-email-error`} className={errorClass} role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-phone`} className="mb-2 block text-sm font-medium text-foreground">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
            className={inputClass}
            placeholder="+91 9XXXXXXXXX"
            value={values.phone}
            disabled={status === "loading"}
            onChange={(e) => updateField("phone", e.target.value)}
          />
          {errors.phone && (
            <p id={`${formId}-phone-error`} className={errorClass} role="alert">
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${formId}-dept`} className="mb-2 block text-sm font-medium text-foreground">
            Department / Course of Interest <span className="text-accent">*</span>
          </label>
          <select
            id={`${formId}-dept`}
            name="department"
            required
            aria-invalid={Boolean(errors.department)}
            aria-describedby={errors.department ? `${formId}-dept-error` : undefined}
            className={inputClass}
            value={values.department}
            disabled={status === "loading"}
            onChange={(e) => updateField("department", e.target.value)}
          >
            <option value="" disabled>
              Select a programme
            </option>
            {COURSE_INTEREST_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.department && (
            <p id={`${formId}-dept-error`} className={errorClass} role="alert">
              {errors.department}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="mb-2 block text-sm font-medium text-foreground">
          Enquiry / Message <span className="text-accent">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className={`${inputClass} min-h-[120px] resize-y`}
          placeholder={
            variant === "admission"
              ? "Share academic background, preferred intake year, or questions about eligibility…"
              : "How can we help you?"
          }
          value={values.message}
          disabled={status === "loading"}
          onChange={(e) => updateField("message", e.target.value)}
        />
        {errors.message && (
          <p id={`${formId}-message-error`} className={errorClass} role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          <p>{failureMessage}</p>
          {mailtoHref && (
            <a href={mailtoHref} className="mt-2 inline-flex font-semibold underline-offset-2 hover:underline">
              Email {siteConfig.email} directly
            </a>
          )}
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Preparing enquiry…" : submitLabel}
      </Button>
      <p className="text-xs text-muted">
        Required fields are marked with *. Submissions are prepared for {siteConfig.email}
        {siteConfig.phone ? ` / ${siteConfig.phone}` : ""}. Server email delivery can be connected later
        via <code className="text-[11px]">/api/enquiry</code>.
      </p>
    </form>
  );
}
