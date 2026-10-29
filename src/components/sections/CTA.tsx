"use client";

import { Button } from "@/components/ui/Button";
import { useOptionalAdmissionEnquiry } from "@/components/admission/AdmissionEnquiryContext";
import { ScrollReveal, ScaleReveal } from "@/components/motion/ScrollAnimations";

export type CTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  /** When true, primary button opens the admission enquiry popup */
  openAdmissionOnPrimary?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** @deprecated Image panel removed from CTA */
  image?: string;
  variant?: "default" | "split";
};

export function CTA({
  title = "Admissions Open Now",
  description = "Start your academic journey with an institute committed to excellence, innovation and student success.",
  primaryLabel = "Apply Now",
  primaryHref = "/contact",
  openAdmissionOnPrimary = false,
  secondaryLabel = "Learn More",
  secondaryHref = "/about",
  variant = "split",
}: CTAProps) {
  const admission = useOptionalAdmissionEnquiry();

  const primaryButton =
    openAdmissionOnPrimary && admission ? (
      <Button type="button" variant="accent" size="lg" onClick={admission.openAdmissionEnquiry}>
        {primaryLabel}
      </Button>
    ) : (
      <Button href={primaryHref} variant="accent" size="lg">
        {primaryLabel}
      </Button>
    );

  if (variant === "default") {
    return (
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white lg:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {primaryButton}
              {secondaryHref && secondaryLabel && (
                <Button
                  href={secondaryHref}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScaleReveal>
          <div className="motion-lift overflow-hidden rounded-2xl bg-primary px-8 py-10 shadow-xl lg:px-12 lg:py-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Apply Today
            </span>
            <h2 className="mt-3 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-white lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">{description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryButton}
              {secondaryHref && secondaryLabel && (
                <Button href={secondaryHref} variant="white" size="lg">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
}
