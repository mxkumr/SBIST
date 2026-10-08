import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The page you are looking for does not exist on the SBIST website.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <>
      <Navbar variant="default" />
      <main className="flex flex-1 flex-col bg-background">
        <section className="flex flex-1 items-center py-28 lg:py-36">
          <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Error 404</p>
            <h1 className="mt-4 text-4xl leading-tight text-foreground lg:text-5xl">
              Page not found
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted">
              The page you requested may have been moved or no longer exists. Return home or contact
              admissions for help finding what you need.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                Admission Enquiry
              </Link>
              <Link
                href="/academics"
                className="inline-flex items-center justify-center rounded-md border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                View Academics
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
