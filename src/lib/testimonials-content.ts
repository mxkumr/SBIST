/**
 * Written student testimonials (existing) + video testimonial structure.
 * Do not invent YouTube URLs — leave videoUrl empty until the college provides them.
 */

export type WrittenTestimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  image?: string;
};

export type VideoTestimonial = {
  id: string;
  title: string;
  studentName: string;
  program: string;
  /** YouTube watch or embed URL — empty until officially provided */
  youtubeUrl: string;
  /** Accessible title for iframe / link */
  accessibleTitle: string;
};

export const studentTestimonials: WrittenTestimonial[] = [
  {
    id: "priya-menon",
    quote:
      "SBIST gave me more than classroom learning. The faculty guide you personally, the labs let you practice what you study and the campus environment keeps you motivated to grow every day.",
    name: "Priya Menon",
    title: "B.Tech Information and Communication Technology",
  },
];

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "video-placeholder-1",
    title: "Student Journey — PENDING_VIDEO",
    studentName: "PENDING_STUDENT_NAME",
    program: "PENDING_PROGRAM",
    youtubeUrl: "",
    accessibleTitle: "Student video testimonial — URL pending from the college",
  },
];

export function getYoutubeEmbedUrl(youtubeUrl: string): string | null {
  if (!youtubeUrl.trim()) return null;
  try {
    const url = new URL(youtubeUrl);
    if (url.hostname.includes("youtu.be")) {
      const id = url.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    const v = url.searchParams.get("v");
    if (v) return `https://www.youtube.com/embed/${v}`;
    const embedMatch = url.pathname.match(/\/embed\/([^/]+)/);
    if (embedMatch) return `https://www.youtube.com/embed/${embedMatch[1]}`;
  } catch {
    return null;
  }
  return null;
}
