import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { NavIcon } from "@/components/layout/NavIcons";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { CTA } from "@/components/sections/CTA";
import { admissionsPageContent } from "@/lib/contact-content";
import { siteConfig } from "@/lib/navigation";
import { stockImages } from "@/lib/home-content";

export const metadata: Metadata = {
  title: `Admissions | ${siteConfig.shortName}`,
  description: admissionsPageContent.header.description,
  alternates: { canonical: `${siteConfig.url}/admissions` },
  openGraph: {
    title: `Admissions | ${siteConfig.shortName}`,
    description: admissionsPageContent.header.description,
    url: `${siteConfig.url}/admissions`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function AdmissionsPage() {
  const { header, intro, form, sidebar } = admissionsPageContent;

  return (
    <>
      <Navbar variant="default" />
      <PageHeader
        title={header.title}
        description={header.description}
        breadcrumbs={header.breadcrumbs}
        backgroundImage={header.backgroundImage}
      />

      <main>
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <div className="border-b border-border bg-surface/60 px-6 py-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {sidebar.title}
                    </p>
                  </div>
                  <nav aria-label="Admissions navigation">
                    <ul className="divide-y divide-border">
                      {sidebar.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
                          >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                              <NavIcon name={link.icon} className="h-4 w-4" />
                            </span>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>

              <div className="min-w-0 space-y-8">
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <div className="border-b border-border bg-surface/60 px-6 py-5 lg:px-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {intro.eyebrow}
                    </p>
                    <p className="mt-1.5 text-sm text-muted">{intro.description}</p>
                  </div>
                  <div className="px-6 py-8 lg:px-8 lg:py-10">
                    <h2 className="text-3xl leading-tight text-foreground">{intro.title}</h2>
                    <div className="mt-4 h-0.5 w-10 rounded-full bg-accent/50" aria-hidden />
                    <div className="mt-6 space-y-2 text-sm text-muted">
                      <p>
                        <span className="font-medium text-foreground">Email:</span>{" "}
                        <a className="text-primary hover:underline" href={`mailto:${siteConfig.email}`}>
                          {siteConfig.email}
                        </a>
                      </p>
                      {siteConfig.phone && (
                        <p>
                          <span className="font-medium text-foreground">Phone:</span>{" "}
                          <a
                            className="text-primary hover:underline"
                            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                          >
                            {siteConfig.phone}
                          </a>
                        </p>
                      )}
                      <p>
                        <span className="font-medium text-foreground">Campus:</span> {siteConfig.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <div className="border-b border-border bg-surface/60 px-6 py-5 lg:px-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {form.eyebrow}
                    </p>
                    <p className="mt-1.5 text-sm text-muted">{form.description}</p>
                  </div>
                  <div className="px-6 py-8 lg:px-8 lg:py-10">
                    <h2 className="text-2xl text-foreground lg:text-3xl">{form.title}</h2>
                    <div className="mt-4 h-0.5 w-10 rounded-full bg-accent/50" aria-hidden />
                    <div className="mt-8">
                      <EnquiryForm
                        variant="admission"
                        submitLabel={form.submitLabel}
                        successMessage={form.successMessage}
                        failureMessage={form.failureMessage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA
          title="Explore Our Programs First?"
          description="Browse engineering and management programmes, then return here to submit your admission enquiry."
          primaryLabel="View Courses"
          primaryHref="/academics#courses"
          secondaryLabel="Contact Office"
          secondaryHref="/contact"
          image={stockImages.students}
        />
      </main>

      <Footer />
    </>
  );
}
