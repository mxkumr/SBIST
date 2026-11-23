import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { DepartmentsIndexSection } from "@/components/sections/departments/DepartmentPageSections";
import { departmentsIndexContent } from "@/lib/departments-content";

export const metadata: Metadata = createPageMetadata({
  title: "Departments",
  description: departmentsIndexContent.header.description,
  path: "/departments",
});

export default function DepartmentsPage() {
  const { header } = departmentsIndexContent;

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
        <DepartmentsIndexSection />
        <CTA
          title="Ready to Join a Department at SBIST?"
          description="Explore programmes across engineering, sciences, languages, computer applications and management - then apply for admission."
          primaryLabel="Apply Now"
          openAdmissionOnPrimary
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          image="/images/Admissions-open.png"
        />
      </main>

      <Footer />
    </>
  );
}
