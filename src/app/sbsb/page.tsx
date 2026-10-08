import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
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

export const metadata: Metadata = createPageMetadata({
  title: "SBSB",
  description: sbsbPageContent.header.description,
  path: "/sbsb",
});

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
