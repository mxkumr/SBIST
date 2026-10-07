import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  LeadershipInstitutionsSection,
  LeadershipIntroSection,
  LeadershipNarrativeSection,
} from "@/components/sections/about/LeadershipPageSections";
import { CTA } from "@/components/sections/CTA";
import { leadershipPageContent } from "@/lib/leadership-content";
import { stockImages } from "@/lib/home-content";
import { siteConfig } from "@/lib/navigation";

export const metadata: Metadata = {
  title: `Our Leader | ${siteConfig.shortName}`,
  description: leadershipPageContent.header.description,
};

export default function LeadershipPage() {
  const { header } = leadershipPageContent;

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
        <LeadershipIntroSection />
        <LeadershipInstitutionsSection />
        <LeadershipNarrativeSection />
        <CTA
          title="Ready to Join SBIST?"
          description="Take the first step toward an engineering career at our Chrompet campus. Apply now or explore our academic programs."
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
