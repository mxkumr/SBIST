import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { CourseDetailSections } from "@/components/sections/academics/CoursePageSections";
import { courses, getCourseBySlug } from "@/lib/courses-content";
import { siteConfig } from "@/lib/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    return { title: `Course | ${siteConfig.shortName}` };
  }
  return {
    title: `${course.degree} | ${siteConfig.shortName}`,
    description: course.overview.slice(0, 155),
    alternates: { canonical: `${siteConfig.url}/academics/courses/${course.slug}` },
    openGraph: {
      title: `${course.degree} | ${siteConfig.shortName}`,
      description: course.overview.slice(0, 155),
      url: `${siteConfig.url}/academics/courses/${course.slug}`,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <>
      <Navbar variant="default" />
      <PageHeader
        title={course.title}
        description={course.degree}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: course.shortTitle, href: `/academics/courses/${course.slug}` },
        ]}
        backgroundImage={course.image}
      />
      <main className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <CourseDetailSections course={course} />
        </div>
      </main>
      <Footer />
    </>
  );
}
