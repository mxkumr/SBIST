import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  AcademicsIntroSection,
  AdmissionsSection,
  AlumniSection,
  CourseCatalogueSection,
  WhyJoinSection,
} from "@/components/sections/academics/AcademicsPageSections";
import { AcademicResourcesSection } from "@/components/sections/academics/AcademicResourcesSection";
import { PlacementCareerSection } from "@/components/sections/academics/PlacementCareerSection";
import { CTA } from "@/components/sections/CTA";
import { academicsPageContent } from "@/lib/academics-content";
import { siteConfig } from "@/lib/navigation";

export const metadata: Metadata = {
  title: `Academics | ${siteConfig.shortName}`,
  description: academicsPageContent.header.description,
  alternates: { canonical: `${siteConfig.url}/academics` },
  openGraph: {
    title: `Academics | ${siteConfig.shortName}`,
    description: academicsPageContent.header.description,
    url: `${siteConfig.url}/academics`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function AcademicsPage() {
  const { header } = academicsPageContent;

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
        <AcademicsIntroSection />
        <AcademicResourcesSection />
        <CourseCatalogueSection />
        <PlacementCareerSection />
        <WhyJoinSection />
        <AlumniSection />
        <AdmissionsSection />
        <CTA
          title="Ready to Begin Your Engineering Career?"
          description="Apply to SBIST and join a community of aspiring engineers backed by qualified faculty, modern laboratories and strong industry connections in Chennai."
          primaryLabel="Apply Now"
          primaryHref="/admissions"
          secondaryLabel="Explore Programs"
          secondaryHref="/academics#courses"
          image={academicsPageContent.cta.image}
        />
      </main>

      <Footer />
    </>
  );
}
