"use client";

import { ScaleReveal } from "@/components/motion/ScrollAnimations";
import { Button } from "@/components/ui/Button";
import { contactContent } from "@/lib/home-content";

export function HomeClosingSections() {
  return (
    <section className="bg-background pb-20 pt-4 lg:pb-28 lg:pt-0" id="contact">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScaleReveal>
          <div className="motion-lift rounded-2xl border border-border bg-white p-8 text-center shadow-sm lg:p-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Interested?
            </span>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl leading-tight text-foreground lg:text-4xl">
              Want to learn more about SBIST?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              Discover our programs, research facilities and the opportunities
              that make Sree Balaji Institute a destination for ambitious
              engineering students.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/about" variant="primary" size="lg">
                Learn More
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>
            <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-2 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-2">
              <p>{contactContent.address}</p>
              <p className="font-medium text-primary">
                {contactContent.phones.map((phone, index) => (
                  <span key={phone}>
                    {index > 0 ? ", " : ""}
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="hover:text-accent"
                    >
                      {phone}
                    </a>
                  </span>
                ))}
              </p>
              <a
                href={`mailto:${contactContent.email}`}
                className="font-medium text-primary hover:text-accent"
              >
                {contactContent.email}
              </a>
            </div>
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
}
