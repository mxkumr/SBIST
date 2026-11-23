export type NavIconName =
  | "about"
  | "history"
  | "administration"
  | "mission"
  | "map"
  | "founder"
  | "cse"
  | "ict"
  | "ece"
  | "civil"
  | "mechanical"
  | "biomedical"
  | "bba"
  | "bca"
  | "programs"
  | "apply"
  | "requirements"
  | "tuition"
  | "scholarship"
  | "faculty"
  | "research"
  | "campus"
  | "events"
  | "library"
  | "gallery"
  | "alumni"
  | "faq";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon: NavIconName;
  /** Nested links shown under this item (e.g. Approval → AICTE, BIHER) */
  children?: NavLink[];
};

export type MegaMenuColumn = {
  title: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href?: string;
  /** Compact dropdown with a few links (icon, title, description) */
  dropdown?: NavLink[];
  megaMenu?: MegaMenuColumn[];
  featured?: {
    title: string;
    description: string;
    stat: string;
    statLabel: string;
    image: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

/** Only routes with live pages */
export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      {
        label: "About SBIST",
        href: "/about#about-sbist",
        description: "Who we are and what we stand for",
        icon: "about",
      },
      {
        label: "Vision & Mission",
        href: "/about#vision-mission",
        description: "Purpose that guides SBIST",
        icon: "mission",
      },
      {
        label: "Chairman’s Message",
        href: "/about#chairman-message",
        description: "From the Founder & Chairman",
        icon: "founder",
      },
      {
        label: "Dean’s Message",
        href: "/about#dean-message",
        description: "From the Office of the Dean",
        icon: "faculty",
      },
      {
        label: "Approval",
        href: "/about#approvals",
        description: "Statutory approvals & affiliation",
        icon: "requirements",
        children: [
          {
            label: "AICTE",
            href: "/about#approval-aicte",
            description: "Approved by AICTE, New Delhi",
            icon: "requirements",
          },
          {
            label: "BIHER",
            href: "/about#approval-biher",
            description: "Constituent institution of BIHER",
            icon: "programs",
          },
        ],
      },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    dropdown: [
      {
        label: "Overview",
        href: "/academics#overview",
        description: "Programs built for real careers",
        icon: "programs",
      },
      {
        label: "Program Catalogue",
        href: "/academics#courses",
        description: "Browse our courses",
        icon: "cse",
      },
      {
        label: "Why Join SBIST",
        href: "/academics#why-join",
        description: "Faculty, labs and community",
        icon: "faculty",
      },
      {
        label: "Professional Opinions",
        href: "/academics#alumni",
        description: "What professionals say",
        icon: "alumni",
      },
      {
        label: "Admissions",
        href: "/academics#admissions",
        description: "Start your academic journey",
        icon: "apply",
      },
    ],
  },
  {
    label: "Departments",
    href: "/departments",
    dropdown: [
      {
        label: "Computer Science",
        href: "/departments/computer-science",
        description: "B.Tech Computer Science",
        icon: "cse",
      },
      {
        label: "Electronics and Communication Engineering",
        href: "/departments/electronics-and-communication-engineering",
        description: "B.Tech ECE",
        icon: "ece",
      },
      {
        label: "Information and Communication Technology",
        href: "/departments/information-and-communication-technology",
        description: "B.Tech ICT",
        icon: "ict",
      },
      {
        label: "Mechanical Engineering",
        href: "/departments/mechanical-engineering",
        description: "B.Tech Mechanical",
        icon: "mechanical",
      },
      {
        label: "Civil Engineering",
        href: "/departments/civil-engineering",
        description: "B.Tech Civil",
        icon: "civil",
      },
      {
        label: "Biomedical Engineering",
        href: "/departments/biomedical-engineering",
        description: "B.Tech Biomedical",
        icon: "biomedical",
      },
      {
        label: "Physics",
        href: "/departments/physics",
        description: "Department of Physics",
        icon: "research",
      },
      {
        label: "Chemistry",
        href: "/departments/chemistry",
        description: "Department of Chemistry",
        icon: "research",
      },
      {
        label: "Maths",
        href: "/departments/maths",
        description: "Department of Mathematics",
        icon: "programs",
      },
      {
        label: "Languages",
        href: "/departments/languages",
        description: "Department of Languages",
        icon: "library",
      },
      {
        label: "Computer Applications",
        href: "/departments/computer-applications",
        description: "BCA",
        icon: "bca",
      },
      {
        label: "Management",
        href: "/departments/management",
        description: "BBA",
        icon: "bba",
      },
    ],
  },
  {
    label: "SBIOL",
    href: "/sbiol",
    dropdown: [
      {
        label: "Why Online",
        href: "/sbiol#benefits",
        description: "Flexible learning benefits",
        icon: "campus",
      },
      {
        label: "Online Programs",
        href: "/sbiol#courses",
        description: "MBA, B.Com and BBA",
        icon: "programs",
      },
      {
        label: "Learning Model",
        href: "/sbiol#learning",
        description: "UGC 4-Quadrant approach",
        icon: "library",
      },
      {
        label: "Enrollment",
        href: "/sbiol#enrollment",
        description: "How admissions work",
        icon: "apply",
      },
      {
        label: "BIHER Legacy",
        href: "/sbiol#legacy",
        description: "40+ years of academic trust",
        icon: "history",
      },
      {
        label: "Academic Faculty",
        href: "/sbiol#faculty",
        description: "Mentors from academia and industry",
        icon: "faculty",
      },
    ],
  },
  {
    label: "Campus Life",
    href: "/campus-life",
    dropdown: [
      {
        label: "Overview",
        href: "/campus-life#intro",
        description: "Where ambition meets belonging",
        icon: "campus",
      },
      {
        label: "Main Academic Block",
        href: "/campus-life#campus",
        description: "Heart of campus",
        icon: "about",
      },
      {
        label: "Central Library",
        href: "/campus-life#library",
        description: "Knowledge commons",
        icon: "library",
      },
      {
        label: "Modern Lecture Halls",
        href: "/campus-life#lecture",
        description: "Learning spaces",
        icon: "programs",
      },
      {
        label: "Engineering Laboratories",
        href: "/campus-life#lab",
        description: "Hands-on discovery",
        icon: "research",
      },
      {
        label: "Graduation & Convocation",
        href: "/campus-life#graduation",
        description: "Milestones and moments",
        icon: "events",
      },
      {
        label: "Sports, Arts & Culture",
        href: "/campus-life#sports",
        description: "Energy beyond class",
        icon: "gallery",
      },
      {
        label: "Campus Gallery",
        href: "/campus-life#gallery",
        description: "Photos from campus life",
        icon: "gallery",
      },
    ],
  },
  {
    label: "SBSB",
    href: "/sbsb",
    dropdown: [
      {
        label: "Official Charter",
        href: "/sbsb#overview",
        description: "Student board framework",
        icon: "about",
      },
      {
        label: "Vision & Mission",
        href: "/sbsb#vision-mission",
        description: "Purpose of SBSB",
        icon: "mission",
      },
      {
        label: "Nine Core Areas",
        href: "/sbsb#pillars",
        description: "Focus areas of the board",
        icon: "programs",
      },
      {
        label: "Leadership Team",
        href: "/sbsb#leadership",
        description: "Governance and committees",
        icon: "administration",
      },
      {
        label: "Clubs & Forums",
        href: "/sbsb#club-groups",
        description: "Cultural, technical and student life",
        icon: "events",
      },
      {
        label: "Explore Our Clubs",
        href: "/sbsb#clubs",
        description: "Find a club to join",
        icon: "campus",
      },
      {
        label: "Signature Events",
        href: "/sbsb#events",
        description: "Fest, sports meet and more",
        icon: "events",
      },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "Sree Balaji Institute of Science and Technology",
  shortName: "SBIST",
  url: "https://www.sbist.in",
  logo: "/images/logo-original.png",
  biherLogo: "/images/biher-logo.png",
  biherName: "Bharath Institute of Higher Education and Research",
  email: "officesbist@gmail.com",
  phone: "+91 9150135754",
  phones: ["+91 9150135754", "+91 9840055185"] as const,
  address: "No. 7 Works Road, Chromepet, Chennai - 600 044",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61592126405933",
    instagram: "https://www.instagram.com/sbist__",
    linkedin: "https://www.linkedin.com/company/142907523",
    youtube: "https://www.youtube.com/@SreeBalajiInstituteofScience",
  },
};
