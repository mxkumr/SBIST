import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { HashScroll } from "@/components/layout/HashScroll";
import { Navbar } from "@/components/layout/Navbar";
import { CTA } from "@/components/sections/CTA";
import { SbiolMainSection } from "@/components/sections/sbiol/SbiolPageSections";
import { sbiolPageContent } from "@/lib/sbiol-content";

export const metadata: Metadata = createPageMetadata({
  title: "SBIOL - Online Learning",
  description: sbiolPageContent.header.description,
  path: "/sbiol",
});

export default function SbiolPage() {
  const { cta } = sbiolPageContent;

  return (
    <>
      <HashScroll />
      <Navbar variant="default" />

      <main>
        <SbiolMainSection />
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
