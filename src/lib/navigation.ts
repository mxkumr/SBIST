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
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "SBIOL", href: "/sbiol" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "SBSB", href: "/sbsb" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "Sree Balaji Institute of Science and Technology",
  shortName: "SBIST",
  logo: "/images/sbist-logo.jpg",
  email: "office@sbist.in",
  phone: "",
  address: "No. 7 Works Road, Chrompet, Chennai - 600 044",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61592126405933",
    instagram: "https://www.instagram.com/sbist__",
    linkedin: "https://www.linkedin.com/company/142907523",
    youtube: "https://www.youtube.com/@SreeBalajiInstituteofScience",
  },
};
