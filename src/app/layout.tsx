import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4, Cinzel } from "next/font/google";
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
  title: "SBIST | Sree Balaji Institute of Science and Technology",
  description:
    "Highly qualified faculties will guide you for career growth at Sree Balaji Institute of Science and Technology, Chennai.",
  icons: {
    icon: [{ url: "/images/SREE_Balaji_logo.svg", type: "image/svg+xml" }],
    shortcut: "/images/SREE_Balaji_logo.svg",
    apple: "/images/SREE_Balaji_logo.svg",
  },
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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
