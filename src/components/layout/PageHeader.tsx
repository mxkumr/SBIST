"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollAnimations";

export type Breadcrumb = {
  label: string;
  href: string;
};

export type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage?: string;
};

function ChevronRight() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            quality={100}
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/90 to-primary/75" />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight />}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="font-medium text-accent">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <h1 className="max-w-3xl text-4xl leading-tight text-white lg:text-5xl">{title}</h1>
          <div className="mt-4 h-1 w-12 rounded-full bg-accent" aria-hidden />

          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
              {description}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
