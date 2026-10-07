import type { CounterItem } from "@/components/blocks/Counters";
import type { GalleryImage } from "@/components/blocks/Gallery";
import type { TimelineEvent } from "@/components/blocks/Timeline";
import { departments, stockImages } from "@/lib/home-content";

export { departments };

export const faculty = [
  {
    name: "Dr. Cameron Williamson",
    role: "Research Assistant",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    href: "/about",
  },
  {
    name: "Dr. Savannah Nguyen",
    role: "Academic Advisor",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    href: "/about",
  },
];

export const counterItems: CounterItem[] = [
  { value: 1500, suffix: "+", label: "Students Enrolled" },
  { value: 8, suffix: "", label: "Programs Offered" },
  { value: 80, suffix: "+", label: "Faculty Members" },
  { value: 15, suffix: "+", label: "Modern Laboratories" },
];

export const galleryImages: GalleryImage[] = [
  { src: stockImages.campus, alt: "Campus Building", caption: "Main academic block" },
  { src: stockImages.library, alt: "Library" },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2001",
    title: "Institute Founded",
    description: "Sree Balaji Institute of Science and Technology established in Chrompet, Chennai.",
  },
  {
    year: "2010",
    title: "AICTE Approval",
    description:
      "Received full approval from AICTE for engineering and technology programs.",
  },
  {
    year: "2020",
    title: "Campus Expansion",
    description:
      "Modern labs and digital learning infrastructure added across all programs.",
  },
];
