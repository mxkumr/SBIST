import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { HashScroll } from "@/components/layout/HashScroll";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { CampusLifeIntroSection } from "@/components/sections/campus-life/CampusLifePageSections";
import { CampusFacilitiesSection } from "@/components/sections/campus-life/CampusFacilitiesSection";
import { CampusLifeGallerySection } from "@/components/sections/campus-life/CampusLifeGallerySection";
import {
  LaboratoriesSection,
  NccNssSection,
  StudentActivitiesSection,
} from "@/components/sections/campus-life/CampusExtrasSection";
import { campusLifePageContent } from "@/lib/campus-life-content";
import { siteConfig } from "@/lib/navigation";

export const metadata: Metadata = {
  title: `Campus Life | ${siteConfig.shortName}`,
  description: campusLifePageContent.header.description,
  alternates: { canonical: `${siteConfig.url}/campus-life` },
  openGraph: {
    title: `Campus Life | ${siteConfig.shortName}`,
    description: campusLifePageContent.header.description,
    url: `${siteConfig.url}/campus-life`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function CampusLifePage() {
  const { header, cta } = campusLifePageContent;

  return (
    <>
      <HashScroll />
      <Navbar variant="default" />
      <PageHeader
        title={header.title}
        description={header.description}
        breadcrumbs={header.breadcrumbs}
        backgroundImage={header.backgroundImage}
      />

      <main>
        <CampusLifeIntroSection />
        <CampusFacilitiesSection />
        <LaboratoriesSection />
        <NccNssSection />
        <StudentActivitiesSection />
        <CampusLifeGallerySection />
        <CTA
          title="Ready to Explore Campus?"
          description="Discover facilities and community life at SBIST — or explore SBSB clubs and signature campus events."
          primaryLabel="Explore SBSB"
          primaryHref="/sbsb"
          secondaryLabel="Admission Enquiry"
          secondaryHref="/admissions"
          image={cta.image}
        />
      </main>

      <Footer />
    </>
  );
}
