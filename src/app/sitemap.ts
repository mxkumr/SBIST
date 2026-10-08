import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about/leadership", changeFrequency: "monthly", priority: 0.8 },
  { path: "/academics", changeFrequency: "weekly", priority: 0.9 },
  { path: "/campus-life", changeFrequency: "weekly", priority: 0.8 },
  { path: "/sbiol", changeFrequency: "weekly", priority: 0.8 },
  { path: "/sbsb", changeFrequency: "weekly", priority: 0.7 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
