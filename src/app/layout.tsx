import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4, Cinzel } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/navigation";
import { defaultOgImage, organizationJsonLd, siteUrl } from "@/lib/seo";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "AICTE-approved college in Chromepet, Chennai. Undergraduate programmes in engineering, management and computer applications at Sree Balaji Institute of Science and Technology.",
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "SBIST",
    "Sree Balaji Institute of Science and Technology",
    "engineering college Chromepet",
    "BIHER affiliated",
    "Chennai engineering college",
    "B.Tech Chennai",
  ],
  icons: {
    icon: [{ url: "/images/SREE_Balaji_logo.svg", type: "image/svg+xml" }],
    shortcut: "/images/SREE_Balaji_logo.svg",
    apple: "/images/SREE_Balaji_logo.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteConfig.shortName,
    title: `${siteConfig.shortName} | ${siteConfig.name}`,
    description:
      "AICTE-approved college in Chromepet, Chennai offering engineering, management and computer application programmes.",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | ${siteConfig.name}`,
    description:
      "AICTE-approved college in Chromepet, Chennai offering engineering, management and computer application programmes.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "education",
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
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={organizationJsonLd} />
        {children}
      </body>
    </html>
  );
}
