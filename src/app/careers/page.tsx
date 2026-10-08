import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { CareersApplySection, CareersMainSection } from "@/components/sections/careers/CareersPageSections";
import { CTA } from "@/components/sections/CTA";
import { careersPageContent } from "@/lib/careers-content";
import { siteConfig } from "@/lib/navigation";

export const metadata: Metadata = {
  title: `Careers | ${siteConfig.shortName}`,
  description: careersPageContent.header.description,
};

export default function CareersPage() {
  const { header, cta } = careersPageContent;

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
        <CareersMainSection />
        <CareersApplySection />
        <CTA
          title="Interested in Teaching at SBIST?"
          description={`Send your résumé to ${careersPageContent.apply.email} and join a faculty community committed to academic excellence at our Chromepet campus.`}
          primaryLabel="Email Your Application"
          primaryHref={careersPageContent.apply.applicationMailto}
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          image={cta.image}
        />
      </main>

      <Footer />
    </>
  );
}
