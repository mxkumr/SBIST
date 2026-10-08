import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  ContactDepartmentsSection,
  ContactMainSection,
} from "@/components/sections/contact/ContactPageSections";
import { CTA } from "@/components/sections/CTA";
import { contactPageContent } from "@/lib/contact-content";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: contactPageContent.header.description,
  path: "/contact",
});

export default function ContactPage() {
  const { header, cta } = contactPageContent;

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
        <ContactMainSection />
        <ContactDepartmentsSection />
        <CTA
          title="Ready to Join SBIST?"
          description="Take the first step toward an engineering career at our Chromepet campus. Apply now or reach out to our admissions team for guidance."
          primaryLabel="Apply Now"
          primaryHref="/contact"
          secondaryLabel="Explore Academics"
          secondaryHref="/academics"
          image={cta.image}
        />
      </main>

      <Footer />
    </>
  );
}
