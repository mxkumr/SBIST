"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { NavIcon } from "@/components/layout/NavIcons";
import type { NavItem, NavLink } from "@/lib/navigation";

type MegaMenuProps = {
  item: NavItem;
  isOpen: boolean;
  onClose: () => void;
};

function ArrowIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function BentoNavCard({ link, onClose }: { link: NavLink; onClose: () => void }) {
  return (
    <Link
      href={link.href}
      role="menuitem"
      onClick={onClose}
      className="group flex items-start gap-2.5 rounded-lg border border-border/80 bg-surface/50 px-2.5 py-2 motion-premium hover:border-primary/20 hover:bg-white hover:shadow-sm"
    >
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <NavIcon name={link.icon} className="h-3.5 w-3.5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
          {link.label}
        </span>
        {link.description && (
          <span className="mt-0.5 block truncate text-[10px] leading-snug text-muted">
            {link.description}
          </span>
        )}
      </span>
    </Link>
  );
}

function FeaturedBentoCard({
  featured,
  onClose,
}: {
  featured: NonNullable<NavItem["featured"]>;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-primary shadow-md">
      <div className="relative h-20 shrink-0">
        <Image
          src={featured.image}
          alt=""
          fill
          className="object-cover opacity-90"
          sizes="220px"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent" />
      </div>
      <div className="flex flex-col p-3 text-white">
        <p className="text-xl font-semibold leading-none">{featured.stat}</p>
        <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/75">
          {featured.statLabel}
        </p>
        <p className="mt-2 text-xs font-semibold leading-snug">{featured.title}</p>
        <Link
          href={featured.ctaHref}
          onClick={onClose}
          className="mt-3 inline-flex w-fit items-center gap-1 rounded-md bg-accent px-2.5 py-1.5 text-[10px] font-semibold text-white motion-premium hover:bg-accent-hover"
        >
          {featured.ctaLabel}
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

export function MegaMenu({ item, isOpen, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item.megaMenu) return null;

  const featured = item.featured;
  const columns = item.megaMenu;

  return (
    <div
      ref={menuRef}
      className="absolute inset-x-0 top-full z-50 w-full border-t border-border/80 bg-white/98 shadow-[0_22px_48px_-18px_rgba(15,39,68,0.35)] backdrop-blur-md animate-fade-in-up"
      role="menu"
      aria-label={`${item.label} submenu`}
    >
      <div className="h-0.5 w-full bg-linear-to-r from-primary via-accent to-accent-bright" />
      <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8 lg:py-5">
        <div className="mb-3 flex items-center gap-2 border-b border-border pb-2.5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">Explore</p>
          <span className="text-border">·</span>
          <p className="font-heading text-sm text-primary">{item.label}</p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-5">
          <div className="min-w-0 flex-1 space-y-4">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-primary/80">
                  {column.title}
                </p>
                <div
                  className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4"
                  role="none"
                >
                  {column.links.map((link) => (
                    <BentoNavCard key={link.href} link={link} onClose={onClose} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {featured && (
            <div className="w-full shrink-0 lg:w-52">
              <FeaturedBentoCard featured={featured} onClose={onClose} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
