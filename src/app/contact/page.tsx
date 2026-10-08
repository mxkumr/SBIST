import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  ContactDepartmentsSection,
  ContactMainSection,
} from "@/components/sections/contact/ContactPageSections";
import { CTA } from "@/components/sections/CTA";
import { contactPageContent } from "@/lib/contact-content";
import { siteConfig } from "@/lib/navigation";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.shortName}`,
  description: contactPageContent.header.description,
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: `Contact | ${siteConfig.shortName}`,
    description: contactPageContent.header.description,
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    type: "website",
  },
};

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
          primaryLabel="Admission Enquiry"
          primaryHref="/admissions"
          secondaryLabel="Explore Academics"
          secondaryHref="/academics"
          image={cta.image}
        />
      </main>

      <Footer />
    </>
  );
}
