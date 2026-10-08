import type { Metadata } from "next";
import { LaunchExperience } from "@/components/launch/LaunchExperience";
import { createPageMetadata } from "@/lib/seo";
import "./launch.css";

export const metadata: Metadata = createPageMetadata({
  title: "SBIST | Official Website Launch",
  description:
    "Official website launch of Sree Balaji Institute of Science and Technology.",
  path: "/launch",
  noIndex: true,
  absoluteTitle: true,
});

export default function LaunchPage() {
  return <LaunchExperience />;
}
