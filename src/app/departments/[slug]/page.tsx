import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { HashScroll } from "@/components/layout/HashScroll";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { DepartmentMainSection } from "@/components/sections/departments/DepartmentPageSections";
import {
  getAllDepartmentSlugs,
  getDepartmentBySlug,
} from "@/lib/departments-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllDepartmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);
  if (!department) {
    return createPageMetadata({
      title: "Department",
      description: "SBIST academic department",
      path: `/departments/${slug}`,
    });
  }

  return createPageMetadata({
    title: department.name,
    description: department.headerDescription,
    path: `/departments/${department.slug}`,
  });
}

export default async function DepartmentPage({ params }: PageProps) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);
  if (!department) notFound();

  return (
    <>
      <HashScroll />
      <Navbar variant="default" />
      <PageHeader
        title={department.name}
        description={department.headerDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          { label: department.name, href: `/departments/${department.slug}` },
        ]}
        backgroundImage={department.image}
      />

      <main>
        <DepartmentMainSection department={department} />
        <CTA
          title={`Begin Your Journey in ${department.name}`}
          description="Apply to SBIST and learn with dedicated faculty, laboratories and a supportive Chromepet campus community."
          primaryLabel="Apply Now"
          openAdmissionOnPrimary
          secondaryLabel="All Departments"
          secondaryHref="/departments"
          image={department.image}
        />
      </main>

      <Footer />
    </>
  );
}
