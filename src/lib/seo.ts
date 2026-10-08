import type { Metadata } from "next";
import { siteConfig } from "@/lib/navigation";

/** Production site origin used for canonical, OG, sitemap and JSON-LD */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.sbist.in";

export const defaultOgImage = "/images/hero-desktop.jpg";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteUrl,
  logo: `${siteUrl}${siteConfig.logo}`,
  image: `${siteUrl}${defaultOgImage}`,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 7 Works Road",
    addressLocality: "Chromepet",
    addressRegion: "Tamil Nadu",
    postalCode: "600 044",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.954555,
    longitude: 80.137863,
  },
  sameAs: Object.values(siteConfig.social),
  telephone: siteConfig.phone || undefined,
};

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  /** Use full title without layout template (e.g. homepage) */
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  noIndex = false,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: siteConfig.shortName,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
