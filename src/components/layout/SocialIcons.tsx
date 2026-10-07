import { siteConfig } from "@/lib/navigation";

export type SocialPlatform = keyof typeof siteConfig.social;

export const socialLabels: Record<SocialPlatform, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  youtube: "YouTube",
};

export const socialDescriptions: Record<SocialPlatform, string> = {
  facebook: "Campus updates, events and community highlights.",
  instagram: "Daily moments from student life and campus culture.",
  linkedin: "News, careers and professional updates from SBIST.",
  youtube: "Campus tours, events and institute highlights.",
};

export function SocialIcon({
  name,
  className = "h-4 w-4",
}: {
  name: SocialPlatform;
  className?: string;
}) {
  switch (name) {
    case "facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M14 8.5h2.5V5.2A20 20 0 0 0 13.8 5C11.1 5 9.3 6.7 9.3 9.8V12H7v3.5h2.3V22h3.5v-6.5H15.7l.5-3.5h-3.1V10c0-1 .3-1.5 1.5-1.5Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2Zm6.1-8.1a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 3.5c-2.3 0-2.6 0-3.5.05-2.3.1-4.2 2-4.3 4.3C4.1 8.7 4.1 9 4.1 12s0 3.3.05 4.15c.1 2.3 2 4.2 4.3 4.3.9.05 1.2.05 3.5.05s2.6 0 3.5-.05c2.3-.1 4.2-2 4.3-4.3.05-.85.05-1.15.05-4.15s0-3.3-.05-4.15c-.1-2.3-2-4.2-4.3-4.3-.9-.05-1.2-.05-3.5-.05Zm0 1.7c2.25 0 2.52 0 3.4.05 1.62.07 2.98 1.43 3.05 3.05.05.88.05 1.15.05 3.4s0 2.52-.05 3.4c-.07 1.62-1.43 2.98-3.05 3.05-.88.05-1.15.05-3.4.05s-2.52 0-3.4-.05c-1.62-.07-2.98-1.43-3.05-3.05C5.5 14.52 5.5 14.25 5.5 12s0-2.52.05-3.4c.07-1.62 1.43-2.98 3.05-3.05.88-.05 1.15-.05 3.4-.05Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.94 8.5H3.75V20.3h3.19V8.5ZM5.34 3.7a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 20.3h-3.18v-6.1c0-1.45-.03-3.32-2.02-3.32-2.03 0-2.34 1.58-2.34 3.21v6.21H9.53V8.5h3.05v1.61h.04c.43-.8 1.47-1.65 3.02-1.65 3.23 0 3.83 2.13 3.83 4.9v6.94Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28.4 28.4 0 0 0 2 12a28.4 28.4 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28.4 28.4 0 0 0 22 12a28.4 28.4 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
        </svg>
      );
  }
}

export function getSocialEntries() {
  return Object.entries(siteConfig.social) as [SocialPlatform, string][];
}
