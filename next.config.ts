import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer modern formats; fall back when unsupported
    formats: ["image/avif", "image/webp"],
    // Allow HD quality (default Next quality is 75)
    qualities: [75, 90, 100],
    // Prefer larger sources for retina displays
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
