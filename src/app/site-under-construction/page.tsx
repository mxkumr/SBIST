import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Site Under Construction",
  description: "This section of the SBIST website is currently under construction.",
  path: "/site-under-construction",
  noIndex: true,
});

export default function SiteUnderConstructionPage() {
  return (
    <>
      <Navbar variant="default" />
      <main className="flex flex-1 items-center bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <div className="motion-lift rounded-2xl border border-border bg-white p-10 shadow-sm lg:p-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Coming Soon
            </span>
            <h1 className="mt-4 text-4xl leading-tight text-foreground lg:text-5xl">
              Site Under Construction
            </h1>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" aria-hidden />
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
              This page is not available yet. We are working to bring you more information about{" "}
              {siteConfig.shortName}. Thank you for your patience.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/" variant="primary" size="lg">
                Back to Home
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
            <p className="mt-10 text-sm text-muted">
              Explore available pages:{" "}
              <Link href="/about" className="font-medium text-primary hover:text-accent">
                About
              </Link>
              {" · "}
              <Link href="/academics" className="font-medium text-primary hover:text-accent">
                Academics
              </Link>
              {" · "}
              <Link href="/careers" className="font-medium text-primary hover:text-accent">
                Careers
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
