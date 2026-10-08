"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollAnimations";
import { placementCareerContent } from "@/lib/campus-extras-content";

export function PlacementCareerSection() {
  const content = placementCareerContent;

  return (
    <section id="placement" className="scroll-mt-28 bg-primary py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{content.eyebrow}</p>
            <h2 className="mt-4 text-3xl leading-tight lg:text-4xl xl:text-[2.75rem]">{content.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-[17px] md:leading-[1.75]">
              {content.description}
            </p>

            <StaggerContainer className="mt-8 space-y-4" stagger={0.08}>
              {content.points.map((point) => (
                <StaggerItem key={point.title}>
                  <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{point.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <p className="mt-6 text-xs leading-relaxed text-white/55">{content.note}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={content.primaryCta.href} variant="accent" size="lg">
                {content.primaryCta.label}
              </Button>
              <Button href={content.secondaryCta.href} variant="white" size="lg">
                {content.secondaryCta.label}
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-white/20 shadow-2xl lg:max-w-none">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Career Support at SBIST
                </p>
                <p className="mt-1 text-sm text-white/90">Guidance · Preparation · Opportunity</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
