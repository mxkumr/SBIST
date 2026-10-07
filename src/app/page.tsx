import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { SbiolHomeSection } from "@/components/sections/SbiolHomeSection";
import { AwardsMarquee } from "@/components/blocks/AwardsMarquee";
import { InsideCampusSection } from "@/components/sections/InsideCampusSection";
import { FoundersNoteSection } from "@/components/sections/FoundersNoteSection";
import { CampusLifeSection } from "@/components/sections/CampusLifeSection";
import { HomeGallerySection } from "@/components/sections/HomeGallerySection";
import { CTA } from "@/components/sections/CTA";
import { HomeClosingSections } from "@/components/sections/HomeClosingSections";

export default function Home() {
  return (
    <>
      {/* Hero — navbar overlays hero via absolute positioning until scroll */}
      <div className="relative">
        <Hero />
        <Navbar variant="hero" />
      </div>

      <main>
        {/* 1. Identity — who we are */}
        <AboutSection />

        {/* 2. Academics — what we offer */}
        <ProgramsSection />

        {/* 3. Online learning — SBIOL */}
        <SbiolHomeSection />

        {/* 4. Credibility ribbon */}
        <AwardsMarquee />

        {/* 5. Proof — campus scale & stats */}
        <InsideCampusSection />

        {/* 6. Leadership & community — events + founder */}
        <FoundersNoteSection />

        {/* 7. Explore — visual campus bento */}
        <CampusLifeSection />

        {/* 8. Community — team gallery */}
        <HomeGallerySection />

        {/* 9. Convert — admissions push */}
        <CTA
          title="Admissions Open Now"
          description="Begin your engineering journey at Sree Balaji Institute of Science and Technology — where qualified faculty and modern laboratories support your career growth."
          primaryLabel="Apply Now"
          primaryHref="/contact"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          image="/images/Admissions-open.png"
        />

        {/* 10. Close — contact & learn more */}
        <HomeClosingSections />
      </main>

      <Footer />
    </>
  );
}
