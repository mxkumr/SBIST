import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";

export type DepartmentCardProps = {
  title: string;
  description: string;
  image: string;
  programs?: string[];
  href?: string;
  icon?: ReactNode;
  duration?: string;
  className?: string;
};

export function DepartmentCard({
  title,
  description,
  image,
  programs = [],
  href = "/academics#courses",
  icon,
  duration,
  className = "",
}: DepartmentCardProps) {
  return (
    <Card hover padding="none" className={`group flex h-full flex-col overflow-hidden ${className}`}>
      <div className="relative h-48 shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
        {icon && (
          <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-primary shadow">
            {icon}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <CardTitle className="line-clamp-2 min-h-[3.25rem]">{title}</CardTitle>
        <CardDescription className="line-clamp-3 min-h-[4.25rem]">{description}</CardDescription>
        <ul className="mt-4 min-h-[1.75rem] space-y-1.5" aria-label="Programs offered">
          {programs.map((program) => (
            <li key={program} className="flex items-center gap-2 text-sm text-foreground">
              <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
              {program}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-primary hover:text-primary-light"
        >
          Learn More
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
        {duration && (
          <p className="mt-4 border-t border-border pt-4 text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {duration}
          </p>
        )}
      </div>
    </Card>
  );
}

function EngineeringIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export { EngineeringIcon };
