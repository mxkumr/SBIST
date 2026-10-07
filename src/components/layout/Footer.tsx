import Image from "next/image";
import Link from "next/link";
import { getSocialEntries, SocialIcon, socialLabels } from "@/components/layout/SocialIcons";
import { siteConfig } from "@/lib/navigation";

const campusLinks = [
  { label: "Home", href: "/" },
  { label: "About SBIST", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Campus Life", href: "/campus-life" },
];

const usefulLinks = [
  { label: "SBIOL Online", href: "/sbiol" },
  { label: "SBSB", href: "/sbsb" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const socialEntries = getSocialEntries();

  return (
    <footer className="bg-footer-bg text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex overflow-hidden rounded-lg bg-[#f5f3ec] px-1 py-0.5"
              aria-label={siteConfig.name}
            >
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={320}
                height={88}
                className="h-11 w-auto max-w-[240px] object-contain object-left sm:h-12 sm:max-w-[280px]"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {siteConfig.name}
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/70">
              <p>
                <span className="font-medium text-white">Address:</span>{" "}
                {siteConfig.address}
              </p>
              <p>
                <span className="font-medium text-white">Email:</span>{" "}
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                  {siteConfig.email}
                </a>
              </p>
              {siteConfig.phone && (
                <p>
                  <span className="font-medium text-white">Phone:</span>{" "}
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-accent">
                    {siteConfig.phone}
                  </a>
                </p>
              )}
            </div>
          </div>

          {/* Campus */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              Our Campus
            </h3>
            <ul className="space-y-2.5">
              {campusLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-all duration-300 hover:scale-105 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              Useful Links
            </h3>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-all duration-300 hover:scale-105 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-white/70">
              Stay updated with campus news and events.
            </p>
            <form className="flex flex-col gap-3" action="/contact" method="get">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            © {year} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialEntries.map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-accent hover:text-accent"
                aria-label={socialLabels[key]}
              >
                <SocialIcon name={key} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
