import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { stockImages } from "@/lib/home-content";
import { siteConfig } from "@/lib/navigation";

export const metadata: Metadata = {
  title: `Site Under Construction | ${siteConfig.shortName}`,
  description: "This section of the SBIST website is currently under construction.",
};

type UnderConstructionPageProps = {
  searchParams: Promise<{ from?: string }>;
};

export default async function UnderConstructionPage({ searchParams }: UnderConstructionPageProps) {
  const { from } = await searchParams;
  const requestedPage = from && from !== "/under-construction" ? from : null;

  return (
    <>
      <Navbar variant="default" />
      <PageHeader
        title="Site Under Construction"
        description="We are building this section of the SBIST website. Please check back soon or explore our available pages below."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Under Construction", href: "/under-construction" },
        ]}
        backgroundImage={stockImages.campus}
      />

      <main className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <div className="motion-lift rounded-2xl border border-border bg-white p-8 shadow-sm lg:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>

            <h2 className="mt-6 text-3xl leading-tight text-foreground lg:text-4xl">
              This Page Is Coming Soon
            </h2>

            {requestedPage ? (
              <p className="mt-4 text-base leading-relaxed text-muted">
                <span className="font-medium text-foreground">{requestedPage}</span> is not available yet.
                Our team is working on this section of the site.
              </p>
            ) : (
              <p className="mt-4 text-base leading-relaxed text-muted">
                This part of the SBIST website is still under development. In the meantime, you can
                visit our homepage, learn about the institute or get in touch with us.
              </p>
            )}

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/" variant="primary" size="lg">
                Back to Home
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Available Now
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                {[
                  { label: "About", href: "/about" },
                  { label: "Academics", href: "/academics" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="font-medium text-primary hover:text-accent">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
