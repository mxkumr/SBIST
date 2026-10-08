import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  AboutCampusTourSection,
  AboutGallerySection,
  AboutMainSection,
  AboutTestimonialsSection,
} from "@/components/sections/about/AboutPageSections";
import { CTA } from "@/components/sections/CTA";
import { aboutPageContent } from "@/lib/about-content";
import { stockImages } from "@/lib/home-content";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: aboutPageContent.header.description,
  path: "/about",
});

export default function AboutPage() {
  const { header } = aboutPageContent;

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
        <AboutMainSection />
        <AboutCampusTourSection />
        <AboutTestimonialsSection />
        <AboutGallerySection />
        <CTA
          title="Ready to Join SBIST?"
          description="Take the first step toward an engineering career at our Chromepet campus. Apply now or explore our academic programs."
          primaryLabel="Apply Now"
          primaryHref="/contact"
          secondaryLabel="Explore Academics"
          secondaryHref="/academics"
          image={stockImages.students}
        />
      </main>

      <Footer />
    </>
  );
}
