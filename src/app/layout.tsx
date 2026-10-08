import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4, Cinzel } from "next/font/google";
import { siteConfig } from "@/lib/navigation";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const defaultDescription =
  "Sree Balaji Institute of Science and Technology (SBIST) — AICTE-approved engineering college in Chromepet, Chennai. B.Tech programmes, BBA, BCA, campus life and admissions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: defaultDescription,
  applicationName: siteConfig.shortName,
  keywords: [
    "SBIST",
    "Sree Balaji Institute of Science and Technology",
    "engineering college Chennai",
    "Chromepet",
    "B.Tech",
    "Bharath University",
    "admissions",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.shortName} | ${siteConfig.name}`,
    description: defaultDescription,
    images: [
      {
        url: "/images/main-building-front.JPG",
        width: 1200,
        height: 630,
        alt: "Sree Balaji Institute of Science and Technology campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | ${siteConfig.name}`,
    description: defaultDescription,
    images: ["/images/main-building-front.JPG"],
  },
  icons: {
    icon: [{ url: "/images/SREE_Balaji_logo.svg", type: "image/svg+xml" }],
    shortcut: "/images/SREE_Balaji_logo.svg",
    apple: "/images/SREE_Balaji_logo.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  email: siteConfig.email,
  telephone: siteConfig.phone || undefined,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 7 Works Road",
    addressLocality: "Chromepet",
    addressRegion: "Tamil Nadu",
    postalCode: "600044",
    addressCountry: "IN",
  },
  sameAs: Object.values(siteConfig.social).filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} ${cinzel.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
