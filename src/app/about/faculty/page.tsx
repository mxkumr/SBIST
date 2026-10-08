import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  DeanMessageSection,
  FacultyDirectorySection,
  StaffDirectorySection,
} from "@/components/sections/about/FacultyPageSections";
import { CTA } from "@/components/sections/CTA";
import { facultyPageContent } from "@/lib/faculty-content";
import { siteConfig } from "@/lib/navigation";
import { stockImages } from "@/lib/home-content";

export const metadata: Metadata = {
  title: `Faculty & Staff | ${siteConfig.shortName}`,
  description: facultyPageContent.header.description,
  alternates: { canonical: `${siteConfig.url}/about/faculty` },
  openGraph: {
    title: `Faculty & Staff | ${siteConfig.shortName}`,
    description: facultyPageContent.header.description,
    url: `${siteConfig.url}/about/faculty`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function FacultyPage() {
  const { header } = facultyPageContent;

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
        <DeanMessageSection />
        <FacultyDirectorySection />
        <StaffDirectorySection />
        <CTA
          title="Interested in Joining Our Faculty?"
          description="See current faculty recruitment openings and apply by email."
          primaryLabel="Faculty Careers"
          primaryHref="/careers"
          secondaryLabel="Contact Office"
          secondaryHref="/contact"
          image={stockImages.students}
        />
      </main>
      <Footer />
    </>
  );
}
