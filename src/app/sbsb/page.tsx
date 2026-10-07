import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { HashScroll } from "@/components/layout/HashScroll";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTA } from "@/components/sections/CTA";
import {
  SbsbClubGroupsSection,
  SbsbClubsSection,
  SbsbEventsSection,
  SbsbIntroSection,
  SbsbLeadershipSection,
  SbsbPillarsSection,
  SbsbVisionMissionSection,
} from "@/components/sections/sbsb/SbsbPageSections";
import { sbsbPageContent } from "@/lib/sbsb-content";
import { siteConfig } from "@/lib/navigation";

export const metadata: Metadata = {
  title: `SBSB | ${siteConfig.shortName}`,
  description: sbsbPageContent.header.description,
};

export default function SbsbPage() {
  const { header, cta } = sbsbPageContent;

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
        <SbsbIntroSection />
        <SbsbVisionMissionSection />
        <SbsbPillarsSection />
        <SbsbLeadershipSection />
        <SbsbClubGroupsSection />
        <SbsbClubsSection />
        <SbsbEventsSection />
        <CTA
          title={cta.title}
          description={cta.description}
          primaryLabel={cta.primaryLabel}
          primaryHref={cta.primaryHref}
          secondaryLabel={cta.secondaryLabel}
          secondaryHref={cta.secondaryHref}
          image={cta.image}
        />
      </main>

      <Footer />
    </>
  );
}
