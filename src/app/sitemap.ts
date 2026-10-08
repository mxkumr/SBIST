import type { MetadataRoute } from "next";
import { courses, courseHref } from "@/lib/courses-content";
import { siteConfig } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/about/leadership",
    "/about/faculty",
    "/academics",
    "/admissions",
    "/campus-life",
    "/careers",
    "/contact",
    "/sbiol",
    "/sbsb",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path || "/"}`,
      lastModified: now,
      changeFrequency: path === "" || path === "/admissions" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/admissions" || path === "/academics" ? 0.9 : 0.7,
    })),
    ...courses.map((course) => ({
      url: `${base}${courseHref(course.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
