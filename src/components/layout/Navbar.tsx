"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { NavIcon } from "@/components/layout/NavIcons";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { mainNavigation, siteConfig } from "@/lib/navigation";
import type { NavIconName, NavItem } from "@/lib/navigation";

type NavbarProps = {
  variant?: "default" | "hero";
};

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M20 20l-3-3" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ApplyArrowIcon() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7v8" />
      </svg>
    </span>
  );
}

type NavLinkItemProps = {
  item: NavItem;
  activeMenu: string | null;
  onToggle: (label: string) => void;
  useLightNav: boolean;
};

function DesktopNavItem({ item, activeMenu, onToggle, useLightNav }: NavLinkItemProps) {
  const hasMega = Boolean(item.megaMenu);
  const hasDropdown = Boolean(item.dropdown?.length);
  const isOpen = activeMenu === item.label;
  const linkClass = useLightNav
    ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] hover:text-accent-bright"
    : "text-foreground hover:text-accent-bright";
  const hoverClass = "origin-center motion-premium hover:scale-110";

  if (!hasMega && !hasDropdown && item.href) {
    return (
      <Link
        href={item.href}
        className={`inline-block rounded-lg px-3 py-2 text-sm font-medium ${hoverClass} ${linkClass}`}
      >
        {item.label}
      </Link>
    );
  }

  if (hasDropdown && item.dropdown) {
    return (
      <div className="relative">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => onToggle(item.label)}
          onMouseEnter={() => onToggle(item.label)}
          className={[
            "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium",
            hoverClass,
            linkClass,
            isOpen
              ? useLightNav
                ? "scale-110 bg-white/15 text-accent-bright"
                : "scale-110 bg-surface text-accent-bright"
              : "",
          ].join(" ")}
        >
          <span>{item.label}</span>
          <ChevronDown className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div
            className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-border bg-white shadow-xl animate-fade-in-up"
            role="menu"
            aria-label={`${item.label} submenu`}
          >
            <ul className="divide-y divide-border p-1.5">
              {item.dropdown.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    role="menuitem"
                    onClick={() => onToggle(item.label)}
                    className="group flex items-start gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-surface"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <NavIcon name={link.icon} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                        {link.label}
                      </span>
                      {link.description && (
                        <span className="mt-0.5 block text-xs leading-snug text-muted">{link.description}</span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-haspopup="true"
      onClick={() => onToggle(item.label)}
      onMouseEnter={() => onToggle(item.label)}
      className={[
        "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium",
        hoverClass,
        linkClass,
        isOpen
          ? useLightNav
            ? "scale-110 bg-white/15 text-accent-bright"
            : "scale-110 bg-surface text-accent-bright"
          : "",
      ].join(" ")}
    >
      <span>{item.label}</span>
      <ChevronDown className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </button>
  );
}

function MobileSubLink({
  href,
  label,
  description,
  icon,
  onClose,
}: {
  href: string;
  label: string;
  description?: string;
  icon?: NavIconName;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-primary/5"
    >
      {icon && (
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          <NavIcon name={icon} className="h-3.5 w-3.5" />
        </span>
      )}
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
          {label}
        </span>
        {description && (
          <span className="mt-0.5 block text-xs leading-snug text-muted">{description}</span>
        )}
      </span>
    </Link>
  );
}

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.megaMenu && !item.dropdown && item.href) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold text-primary transition-colors hover:bg-primary/5"
      >
        {item.label}
        <svg
          className="h-4 w-4 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        className={[
          "flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-colors",
          expanded ? "bg-primary text-white" : "text-primary hover:bg-primary/5",
        ].join(" ")}
      >
        {item.label}
        <ChevronDown
          className={[
            "transition-transform duration-200",
            expanded ? "rotate-180 text-accent-bright" : "text-accent",
          ].join(" ")}
        />
      </button>
      {expanded && (
        <div className="mt-1 space-y-1 border-l-2 border-accent/40 py-1 pl-2 ml-4 animate-fade-in-up">
          {item.dropdown
            ? item.dropdown.map((link) => (
                <MobileSubLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  description={link.description}
                  icon={link.icon}
                  onClose={onClose}
                />
              ))
            : item.megaMenu?.map((column) => (
                <div key={column.title} className="space-y-1 pt-1">
                  <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                    {column.title}
                  </p>
                  {column.links.map((link) => (
                    <MobileSubLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      description={link.description}
                      icon={link.icon}
                      onClose={onClose}
                    />
                  ))}
                </div>
              ))}
          {item.featured && (
            <Link
              href={item.featured.ctaHref}
              onClick={onClose}
              className="mx-1 mt-2 flex items-center justify-between gap-3 rounded-xl bg-primary px-3.5 py-3 text-white"
            >
              <div>
                <p className="text-lg font-semibold leading-none text-accent-bright">
                  {item.featured.stat}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-white/70">
                  {item.featured.statLabel}
                </p>
                <p className="mt-1.5 text-sm font-semibold">{item.featured.title}</p>
              </div>
              <span className="shrink-0 rounded-lg bg-accent px-2.5 py-1.5 text-[11px] font-bold text-primary">
                {item.featured.ctaLabel}
              </span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export function Navbar({ variant = "default" }: NavbarProps) {
  const isHero = variant === "hero";
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMegaMenu = useCallback(() => setActiveMenu(null), []);
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);
  const toggleMenu = useCallback((label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  }, []);

  useEffect(() => {
    if (!isHero) return;

    function onScroll() {
      const scrolled = window.scrollY > 16;
      setIsScrolled(scrolled);
      if (scrolled) setActiveMenu(null);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHero]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const isHeroTransparent = isHero && !isScrolled && !mobileOpen;
  const useLightNav = isHeroTransparent;

  const headerClass = [
    "top-0 z-[100] w-full transition-[background-color,box-shadow] duration-300",
    isHero
      ? isHeroTransparent
        ? "absolute inset-x-0 bg-linear-to-b from-[#0f2744]/60 via-[#0f2744]/25 to-transparent"
        : "fixed inset-x-0 bg-white shadow-sm"
      : "sticky inset-x-0 bg-white shadow-sm",
  ].join(" ");

  const navRowClass =
    "relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3.5 sm:py-4 lg:px-8";

  const iconClass = useLightNav
    ? "text-white hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
    : "text-primary hover:text-accent";

  const activeNavItem = mainNavigation.find((item) => item.label === activeMenu);

  return (
    <header className={headerClass} onMouseLeave={closeMegaMenu}>
      {!isHero && (
        <div className="hidden border-b border-border bg-primary lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-white/90 lg:px-8">
            <div className="flex items-center gap-6">
              {siteConfig.phone && (
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              )}
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
              <span className="text-white/70">{siteConfig.address}</span>
            </div>
          </div>
        </div>
      )}

      <nav className={navRowClass}>
        <Link
          href="/"
          onClick={closeMobileMenu}
          className={[
            "inline-flex shrink-0 items-center overflow-hidden rounded-lg px-1 py-0.5 transition-shadow",
            useLightNav
              ? "bg-[#f5f3ec] shadow-sm ring-1 ring-white/25 backdrop-blur-sm hover:shadow-md"
              : "bg-[#f5f3ec] shadow-sm ring-1 ring-black/5 hover:shadow-md",
          ].join(" ")}
          aria-label={siteConfig.name}
        >
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={360}
            height={96}
            className="h-14 w-auto max-w-[260px] object-contain object-left sm:h-16 sm:max-w-[360px] lg:h-[4.5rem] lg:max-w-[440px]"
            priority
          />
        </Link>

        <div className="hidden items-center lg:flex lg:gap-0.5">
          {mainNavigation.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              activeMenu={activeMenu}
              onToggle={toggleMenu}
              useLightNav={useLightNav}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <button
            type="button"
            className={`hidden p-1.5 motion-premium lg:block ${iconClass}`}
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <span
            className={`hidden h-5 w-px lg:block ${useLightNav ? "bg-white/30" : "bg-border"}`}
          />

          <button
            type="button"
            className={[
              "inline-flex items-center justify-center rounded-xl p-2.5 motion-premium lg:hidden",
              useLightNav
                ? "bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm hover:bg-white/25"
                : mobileOpen
                  ? "bg-primary text-white"
                  : "bg-primary/5 text-primary ring-1 ring-primary/10 hover:bg-primary/10",
            ].join(" ")}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-[#f5c518] px-4 py-2 text-xs font-bold text-[#1a1a1a] motion-premium hover:bg-[#e8b80f] sm:inline-flex sm:gap-3 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Apply Now
            <ApplyArrowIcon />
          </Link>
        </div>
      </nav>

      {activeNavItem?.megaMenu && (
        <MegaMenu
          item={activeNavItem}
          isOpen={Boolean(activeMenu)}
          onClose={closeMegaMenu}
        />
      )}

      {mobileOpen && (
        <div className="border-t border-accent/30 bg-white lg:hidden">
          <div className="h-0.5 w-full bg-linear-to-r from-primary via-accent to-primary" />
          <div className="max-h-[min(78vh,640px)] overflow-y-auto overscroll-contain px-3 pb-5 pt-3 sm:px-4">
            <p className="mb-2 px-4 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
              Menu
            </p>
            <div className="flex flex-col gap-0.5">
              {mainNavigation.map((item) => (
                <MobileNavItem key={item.label} item={item} onClose={closeMobileMenu} />
              ))}
            </div>

            <div className="mt-4 space-y-3 border-t border-border px-1 pt-4">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#f5c518] px-5 py-3.5 text-sm font-bold text-[#1a1a1a] shadow-sm transition-colors hover:bg-[#e8b80f]"
              >
                Apply Now
                <ApplyArrowIcon />
              </Link>

              <div className="rounded-2xl bg-primary px-4 py-3.5 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-bright">
                  Contact
                </p>
                <div className="mt-2.5 flex flex-col gap-1.5 text-sm text-white/90">
                  {siteConfig.phone && (
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-accent-bright">
                      {siteConfig.phone}
                    </a>
                  )}
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-bright">
                    {siteConfig.email}
                  </a>
                  <p className="text-xs leading-relaxed text-white/65">{siteConfig.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
