import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { HashScroll } from "@/components/layout/HashScroll";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { CampusLifeIntroSection } from "@/components/sections/campus-life/CampusLifePageSections";
import { CampusFacilitiesSection } from "@/components/sections/campus-life/CampusFacilitiesSection";
import { CampusLifeGallerySection } from "@/components/sections/campus-life/CampusLifeGallerySection";
import { campusLifePageContent } from "@/lib/campus-life-content";

export const metadata: Metadata = createPageMetadata({
  title: "Campus Life",
  description: campusLifePageContent.header.description,
  path: "/campus-life",
});

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
        <CampusLifeGallerySection />
        <CTA
          title="Ready to Explore Campus?"
          description="Discover facilities and community life at SBIST - or explore SBSB clubs and signature campus events."
          primaryLabel="Explore SBSB"
          primaryHref="/sbsb"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          image={cta.image}
        />
      </main>

      <Footer />
    </>
  );
}
