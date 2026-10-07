import type { NavIconName } from "@/lib/navigation";
import { contactContent, stockImages } from "@/lib/home-content";
import { siteConfig } from "@/lib/navigation";

const applicationEmail = contactContent.email;
const applicationMailto = `mailto:${applicationEmail}?subject=Faculty%20Application`;

export const careersPageContent = {
  header: {
    title: "Faculty Recruitment",
    description: `Applications invited for faculty positions at SBIST. Apply by emailing your résumé to ${applicationEmail}.`,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Careers", href: "/careers" },
    ],
    backgroundImage: stockImages.campus,
  },
  affiliations: {
    address: "No. 7, Works Road, Chromepet, Chennai - 600 044",
    approvals: [
      "Approved by AICTE, New Delhi",
      "A Constituent Institution of Bharath Institute of Higher Education and Research (Declared as Deemed to be University u/s 3 of UGC Act, 1956) Chennai",
    ],
  },
  announcement: {
    eyebrow: "Now Hiring",
    title: "Applications Invited for Faculty Recruitment",
    description: `SBIST welcomes qualified academicians to join our Chrompet campus. Applicants may email their résumé directly to ${applicationEmail} to apply for faculty positions.`,
  },
  engineeringRoles: {
    eyebrow: "Engineering & Management",
    title: "Professors · Associate Professors · Assistant Professors",
    departments: ["BME", "ICT", "CSE", "ECE", "MECH", "CIVIL", "BBA", "BCA"],
    qualifications: "Ph.D / M.E / M.Tech / MBA / MCA — First Class with Teaching Experience",
    roles: ["Professor", "Associate Professor", "Assistant Professor"],
  },
  scienceRoles: {
    eyebrow: "Basic Sciences & Humanities",
    title: "Assistant Professors",
    departments: ["Physics", "Chemistry", "Maths", "English"],
    qualifications: "M.Sc, Ph.D",
    roles: ["Assistant Professor"],
  },
  criteria: {
    payScale: "As per AICTE Norms",
    preferences: [
      "Preference will be given for candidates with First Class in both UG & PG with teaching experience in engineering colleges.",
      "Ph.D with relevant experience is a must for Professor and Associate Professor posts.",
    ],
    deadline: "31.08.2026",
    deadlineNote: `Eligible candidates may apply by emailing their résumé to ${applicationEmail} before the deadline. Shortlisted applicants will be contacted by the office.`,
  },
  apply: {
    eyebrow: "How to Apply",
    title: "Send Your Application by Email",
    description: `Email your résumé and supporting documents to ${applicationEmail}. Include your department preference, qualifications and teaching experience in the message.`,
    applicationMailto,
    applicationCta: "Email Your Application",
    website: "www.sbist.in",
    websiteHref: "https://www.sbist.in",
    email: applicationEmail,
    phone: "+91 9941546335",
    signatory: "Registrar",
    instituteName: siteConfig.name,
  },
  sidebar: {
    title: "Careers",
    links: [
      { label: "Faculty Recruitment", href: "/careers", icon: "faculty" as NavIconName },
      { label: "Email Application", href: applicationMailto, icon: "apply" as NavIconName },
      { label: "Open Positions", href: "/careers#positions", icon: "programs" as NavIconName },
      { label: "Application Details", href: "/careers#apply", icon: "requirements" as NavIconName },
      { label: "About SBIST", href: "/about", icon: "about" as NavIconName },
    ],
    image: stockImages.students,
  },
  cta: {
    image: stockImages.students,
  },
};
