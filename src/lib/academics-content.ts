import type { NavIconName } from "@/lib/navigation";
import { departments, notices, stockImages } from "@/lib/home-content";
import type { HighlightStatItem, PageStatItem } from "@/lib/about-content";

/** Local image paths for the Academics page */
export const academicsImages = {
  header: "/images/classroom1.png",
  sidebar: stockImages.students,
  whyJoin: "/images/students-classroom.jpg",
  cta: stockImages.students,
} as const;

export const academicsPageContent = {
  header: {
    title: "Academics at SBIST",
    description:
      "Explore our programs, world-class laboratories and the pathways that prepare students for careers in technology, infrastructure, healthcare and business.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Academics", href: "/academics" },
    ],
    backgroundImage: academicsImages.header,
  },
  sidebar: {
    title: "Academics",
    links: [
      { label: "Overview", href: "/academics", icon: "programs" as NavIconName },
      { label: "Program Catalogue", href: "/academics#courses", icon: "cse" as NavIconName },
      { label: "Why Join SBIST", href: "/academics#why-join", icon: "faculty" as NavIconName },
      { label: "Alumni Network", href: "/academics#alumni", icon: "alumni" as NavIconName },
      { label: "Admissions", href: "/academics#admissions", icon: "apply" as NavIconName },
    ],
    image: academicsImages.sidebar,
  },
  intro: {
    eyebrow: "Academic Excellence",
    title: "Academic Programs Built for the Real World",
    paragraphs: [
      "At Sree Balaji Institute of Science and Technology, academics are designed to bridge classroom theory with hands-on practice. We offer eight programs — Computer Science Engineering, Information and Communication Technology, Electrical and Communication Engineering, Civil Engineering, Mechanical Engineering, Biomedical Engineering, BBA and BCA.",
      "From modern laboratories and qualified faculty to placement training and research opportunities, SBIST provides a complete academic ecosystem on our Chrompet campus in Chennai.",
    ],
    highlights: [
      "Anna University–affiliated B.E. engineering programs",
      "BBA and BCA pathways in management and computer applications",
      "Dedicated placement and career guidance cell",
    ],
  },
  stats: [
    { value: 8, suffix: "", label: "Programs Offered", icon: "programs" as NavIconName },
    { value: 3, suffix: "+", label: "Specialized Labs", icon: "research" as NavIconName },
    { headline: "Excellence", label: "Academic quality", icon: "faculty" as NavIconName },
    { headline: "Growth", label: "Career development", icon: "apply" as NavIconName },
  ] as PageStatItem[],
  courses: {
    eyebrow: "Program Catalogue",
    title: "Browse Our Programs",
    description:
      "Choose from eight undergraduate programs across engineering, management and computer applications. Each pathway combines core fundamentals with practical labs and project-based learning.",
    programs: departments.map((dept) => ({
      ...dept,
      programs: [dept.degree],
    })),
    viewAllHref: "/academics#courses",
  },
  whyJoin: {
    eyebrow: "Why Join SBIST",
    title: "Where Qualified Faculty Guide Your Career Growth",
    description:
      "SBIST combines academic rigour with practical exposure — giving students the confidence, skills and network to succeed in competitive engineering careers.",
    reasons: [
      {
        title: "Expert Faculty",
        description:
          "Learn from experienced professors and industry practitioners who mentor students through projects, internships and research.",
        icon: "faculty" as NavIconName,
      },
      {
        title: "Modern Infrastructure",
        description:
          "Well-equipped labs, digital learning resources and spacious lecture halls create an environment built for engineering excellence.",
        icon: "research" as NavIconName,
      },
      {
        title: "Industry Connections",
        description:
          "Regular industry visits, guest lectures and placement drives connect students with leading companies across Tamil Nadu and beyond.",
        icon: "programs" as NavIconName,
      },
      {
        title: "Affordable Education",
        description:
          "Transparent tuition fees, scholarship options and flexible payment plans make quality engineering education accessible.",
        icon: "scholarship" as NavIconName,
      },
      {
        title: "Campus Community",
        description:
          "Clubs, cultural events, sports and peer networks foster collaboration and personal growth beyond academics.",
        icon: "campus" as NavIconName,
      },
      {
        title: "Research Opportunities",
        description:
          "Students engage in faculty-led research, symposiums and innovation projects that strengthen their academic portfolios.",
        icon: "research" as NavIconName,
      },
    ],
    image: academicsImages.whyJoin,
  },
  alumni: {
    eyebrow: "Professional Opinions",
    title: "What Professionals Say About SBIST",
    description:
      "Leaders and professionals share why they value Sree Balaji Institute of Science and Technology as a strong choice for students pursuing engineering and technology education.",
    stats: [
      { headline: "Excellence", label: "Academic quality" },
      { headline: "Innovation", label: "Modern learning" },
      { headline: "Growth", label: "Career development" },
    ] as HighlightStatItem[],
    stories: [
      {
        name: "Mr. Arjun Desai",
        role: "Industry Mentor, Chennai",
        quote:
          "I strongly recommend Sree Balaji Institute of Science and Technology for students who want quality education with discipline and purpose. It is a college I trust for student growth.",
        image: "/images/SREE_Balaji_logo.svg",
      },
      {
        name: "Dr. Meera Srinivasan",
        role: "Academic Advisor",
        quote:
          "SBIST stands out for its practical approach to learning. I would confidently suggest Balaji college to students and parents looking for a focused engineering education.",
        image: "/images/SREE_Balaji_logo.svg",
      },
      {
        name: "Mr. Karthik Rajan",
        role: "Industry Mentor",
        quote:
          "The institute emphasizes strong fundamentals, modern labs and student responsibility. That is why I prefer Sree Balaji college when guiding young learners.",
        image: "/images/SREE_Balaji_logo.svg",
      },
    ],
    ctaHref: "/contact",
    ctaLabel: "Contact Admissions",
  },
  admissions: {
    eyebrow: "Admissions",
    title: "Start Your Academic Journey",
    description:
      "Admissions are open for the upcoming academic year. Review eligibility, explore fee structures and apply to join a community of aspiring engineers and professionals.",
    links: [
      {
        label: "Apply Now",
        description: "Contact our admissions team to begin your application",
        href: "/contact",
        icon: "apply" as NavIconName,
      },
      {
        label: "Academic Programs",
        description: "Explore our engineering and management programs",
        href: "/academics#courses",
        icon: "programs" as NavIconName,
      },
    ],
  },
  notices: {
    eyebrow: "Academic Notices",
    title: "Latest Announcements",
    description: "Stay updated on examinations, admissions and academic calendar changes.",
    items: notices,
    viewAllHref: "/academics#admissions",
  },
  cta: {
    image: academicsImages.cta,
  },
};
