"use client";

import { useEffect, useRef, useState } from "react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/ScrollAnimations";
import {
  getSocialEntries,
  SocialIcon,
  socialLabels,
} from "@/components/layout/SocialIcons";

export type CounterItem = {
  value?: number;
  headline?: string;
  suffix?: string;
  prefix?: string;
  label: string;
};

export type CountersProps = {
  items: CounterItem[];
  title?: string;
  subtitle?: string;
  duration?: number;
};

function useCountUp(
  target: number,
  duration: number,
  started: boolean,
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let frame: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, started]);

  return count;
}

function CounterBlock({
  item,
  duration,
  started,
}: {
  item: CounterItem;
  duration: number;
  started: boolean;
}) {
  const count = useCountUp(item.value ?? 0, duration, started && item.value !== undefined);

  if (item.headline) {
    return (
      <div className="text-center">
        <p className="font-heading text-2xl font-bold text-white lg:text-3xl">{item.headline}</p>
        <p className="mt-2 text-sm text-white/80">{item.label}</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-white lg:text-5xl">
        {item.prefix}
        {count.toLocaleString()}
        {item.suffix}
      </p>
      <p className="mt-2 text-sm text-white/80">{item.label}</p>
    </div>
  );
}

export function Counters({
  items,
  title,
  subtitle,
  duration = 2000,
}: CountersProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-primary py-20 lg:py-24"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {(title || subtitle) && (
          <ScrollReveal>
            <div className="mb-12 text-center lg:mb-14">
              {subtitle && (
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {subtitle}
                </span>
              )}
              {title && (
                <h2 className="mt-3 text-3xl leading-tight text-white lg:text-4xl">
                  {title}
                </h2>
              )}
            </div>
          </ScrollReveal>
        )}

        <StaggerContainer className="grid grid-cols-2 gap-8 lg:grid-cols-4" stagger={0.08}>
          {items.map((item) => (
            <StaggerItem key={item.label}>
              <CounterBlock
                item={item}
                duration={duration}
                started={started}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/15 pt-10 lg:mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Follow SBIST
            </p>
            <div className="flex items-center gap-3">
              {getSocialEntries().map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                  aria-label={socialLabels[key]}
                >
                  <SocialIcon name={key} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
