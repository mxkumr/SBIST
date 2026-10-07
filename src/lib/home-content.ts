import type { CounterItem } from "@/components/blocks/Counters";
import type { GalleryImage } from "@/components/blocks/Gallery";
import type { NavIconName } from "@/lib/navigation";

export const heroContent = {
  watermark: "sree balaji institute of science and technology",
  watermarkSubtitle: "What the World Needs Begins Here",
  eyebrow: "Welcome to Sree Balaji Institute of Science and Technology",
  title: "Highly Qualified Faculties Will Guide You for Career Growth",
  campusTourLabel: "About Us",
  campusTourHref: "/about",
  applyHref: "/contact",
  /** Auto-advance interval for main banner carousel (ms) */
  bannerIntervalMs: 6500,
  /** Tablet & desktop hero (primary slide) */
  buildingImage: "/images/hero-desktop.png",
  /** Mobile-only hero (primary slide) */
  heroMobileImage: "/images/hero-campus-mobile.png",
  banners: [
    {
      id: "primary",
      alt: "SBIST students looking toward the future",
      desktopSrc: "/images/hero-desktop.png",
      mobileSrc: "/images/hero-campus-mobile.png",
      desktopObjectPosition: "object-[center_35%]",
      mobileObjectPosition: "object-[50%_30%]",
      /** Soft sky fade so watermark reads in open sky */
      skyMask: true,
      showWatermark: true,
    },
    {
      id: "campus",
      alt: "SBIST admission open 2025-26 — Sree Balaji Institute of Science and Technology",
      desktopSrc: "/images/main-academic-block2.png",
      mobileSrc: "/images/main-academic-block1.png",
      desktopObjectPosition: "object-center",
      mobileObjectPosition: "object-center",
      /** Designed poster — skip image optimizer soft-compression */
      graphicBanner: true,
      skyMask: false,
      showWatermark: false,
    },
  ],
};

/** Shared local imagery from public/images */
export const stockImages = {
  campus: "/images/hero-campus.jpg",
  library: "/images/Library_AI.png",
  graduation: "/images/slide-2.jpg",
  sports: "/images/mechanical.jpg",
  students: "/images/students-library.png",
};

export const aboutContent = {
  eyebrow: "About Our Institute",
  title: "Empowering Students to Lead the Future",
  paragraphs: [
    "Sree Balaji Institute of Science and Technology is an AICTE-approved engineering college in Chrompet, Chennai. We offer undergraduate programs in engineering, management and computer applications, with a focus on strong fundamentals and practical, industry-ready skills.",
    "Our campus brings together experienced faculty, modern laboratories and a supportive academic environment. Through structured teaching, hands-on training and career guidance, we help students grow into capable engineers and professionals.",
  ],
  highlights: [
    "Qualified Faculty with Industry Experience",
    "Modern Laboratories & Research Infrastructure",
    "Structured Academic & Research Goals",
  ],
  stat: {
    value: "Shaping Tomorrow's Engineers",
    label: "Today, at SBIST",
    description:
      "Through dedicated teaching, hands-on learning and strong values, we help students turn ambition into lasting success.",
  },
  images: {
    primary: "/images/auditorium.JPG",
    secondary: "/images/computer-lab.JPG",
  },
};

export type Department = {
  title: string;
  description: string;
  image: string;
  href: string;
  degree: string;
  icon: NavIconName;
  duration: string;
  category: "engineering" | "management" | "commerce";
};

export const departments = [
  {
    title: "Computer Science Engineering",
    description:
      "The School of Computing has experienced faculty members with industry experience and well equipped laboratories.",
    image: "/images/computer-lab.JPG",
    href: "/academics#courses",
    degree: "B.E. Computer Science Engineering",
    icon: "cse",
    duration: "4 Years",
    category: "engineering",
  },
  {
    title: "Information and Communication Technology",
    description:
      "Focused on networks, communication systems and modern IT infrastructure with practical lab-based learning.",
    image: "/images/computer1.JPG",
    href: "/academics#courses",
    degree: "B.E. Information and Communication Technology",
    icon: "ict",
    duration: "4 Years",
    category: "engineering",
  },
  {
    title: "Electrical and Communication Engineering",
    description:
      "The electrical engineers prepared to make the world eco friendly through innovation and sustainable design.",
    image: "/images/lab2.JPG",
    href: "/academics#courses",
    degree: "B.E. Electrical and Communication Engineering",
    icon: "ece",
    duration: "4 Years",
    category: "engineering",
  },
  {
    title: "Civil Engineering",
    description:
      "The department of Civil Engineering is committed to the task of providing quality education, which will transform the students into efficient and successful engineers.",
    image: "/images/civil_eng.png",
    href: "/academics#courses",
    degree: "B.E. Civil Engineering",
    icon: "civil",
    duration: "4 Years",
    category: "engineering",
  },
  {
    title: "Mechanical Engineering",
    description:
      "The School of Mechanical Engineering is one of the pioneering departments of our institute.",
    image: "/images/lab4.JPG",
    href: "/academics#courses",
    degree: "B.E. Mechanical Engineering",
    icon: "mechanical",
    duration: "4 Years",
    category: "engineering",
  },
  {
    title: "Biomedical Engineering",
    description:
      "Combining engineering principles with medical sciences to prepare students for healthcare technology and device innovation.",
    image: "/images/lab5.JPG",
    href: "/academics#courses",
    degree: "B.E. Biomedical Engineering",
    icon: "biomedical",
    duration: "4 Years",
    category: "engineering",
  },
  {
    title: "BBA",
    description:
      "A Bachelor of Business Administration program focused on management fundamentals, entrepreneurship and industry-ready business skills.",
    image: "/images/students-library.png",
    href: "/academics#courses",
    degree: "BBA",
    icon: "bba",
    duration: "3 Years",
    category: "management",
  },
  {
    title: "BCA",
    description:
      "A Bachelor of Computer Applications program covering software development, databases and applied computing for IT careers.",
    image: "/images/computer2.JPG",
    href: "/academics#courses",
    degree: "BCA",
    icon: "bca",
    duration: "3 Years",
    category: "commerce",
  },
] satisfies Department[];

export const counterItems: CounterItem[] = [
  { headline: "Excellence", label: "Quality engineering education" },
  { headline: "Innovation", label: "Learning beyond the classroom" },
  { headline: "Opportunity", label: "A fresh start for ambitious minds" },
  { headline: "Growth", label: "Skills for a successful career" },
];

export const notices = [
  {
    title: "Freshers' Day Coming Soon",
    date: "Coming Soon",
    ref: "SBIST/SBSB/FRESHERS/2026",
    href: "/sbsb#events",
  },
  {
    title: "Online Admissions Are Open",
    date: "Apply Now",
    ref: "SBIST/SBIOL/ADM/2026",
    href: "/sbiol",
  },
  {
    title: "Project Expo — Tech Fusion",
    date: "December 2026",
    ref: "SBIST/CSE/TECHFUSION/2026",
    href: "/academics#admissions",
  },
  {
    title: "1st International Conference for Computer Science Engineering",
    date: "December 2026",
    ref: "SBIST/CSE/ICCSE/2026",
    href: "/academics#admissions",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/main-building-side.JPG",
    alt: "Main Campus",
    caption: "Academic block",
  },
  {
    src: "/images/Library_AI.png",
    alt: "Central Library",
    caption: "Study spaces & resources",
  },
  {
    src: "/images/Classroom.JPG",
    alt: "Lecture Hall",
    caption: "Modern classrooms",
  },
  {
    src: "/images/computer-lab.JPG",
    alt: "Computer Lab",
    caption: "Hands-on computing",
  },
  {
    src: "/images/workstation-quotes.JPG",
    alt: "Library Study Hall",
    caption: "Focused learning spaces",
  },
  {
    src: "/images/lab.JPG",
    alt: "Engineering Lab",
    caption: "Practical engineering",
  },
];

export type CampusLifeTile = {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
};

export const campusLifeContent = {
  eyebrow: "Campus Life",
  title: "Discover Campus Life",
  viewAllHref: "/campus-life",
  tiles: [
    {
      id: "campus",
      title: "Main Academic Block",
      description:
        "Our central campus building houses lecture halls, faculty offices and student services — the heart of daily life at SBIST.",
      image: "/images/main-building-side.JPG",
      href: "/campus-life#campus",
    },
    {
      id: "library",
      title: "Central Library",
      description:
        "A quiet, well-stocked library with digital resources, journals and study spaces for focused learning.",
      image: "/images/Library_AI.png",
      href: "/campus-life#library",
    },
    {
      id: "lecture",
      title: "Modern Lecture Halls",
      description:
        "Spacious, technology-enabled classrooms designed for interactive teaching and collaborative learning.",
      image: "/images/Classroom.JPG",
      href: "/campus-life#lecture",
    },
    {
      id: "lab",
      title: "Engineering Laboratories",
      description:
        "Hands-on labs equipped for engineering, management and computer applications programs with industry-standard tools.",
      image: "/images/lab.JPG",
      href: "/campus-life#lab",
    },
    {
      id: "graduation",
      title: "Graduation & Convocation",
      description:
        "Celebrating milestones as our graduates step into engineering careers across India and abroad.",
      image: "/images/auditorium.JPG",
      href: "/campus-life#graduation",
    },
    {
      id: "sports",
      title: "Sports, Arts & Culture",
      description:
        "Outdoor grounds for cricket and volleyball, dance and arts clubs and cultural events — a vibrant campus life beyond the classroom.",
      image: "/images/campus-sports.png",
      href: "/campus-life#sports",
    },
  ] satisfies CampusLifeTile[],
};

export const contactContent = {
  address: "No. 7 Works Road, Chrompet, Chennai - 600 044",
  email: "office@sbist.in",
};

export const foundersNoteContent = {
  quote:
    "SBIST gave me more than classroom learning. The faculty guide you personally, the labs let you practice what you study and the campus environment keeps you motivated to grow every day.",
  name: "Priya Menon",
  title: "B.E. Information and Communication Technology",
  readMoreHref: "/about",
};

export const upcomingEventsContent = {
  eyebrow: "Upcoming Events",
  title: "Join Our Latest Events",
  viewMoreHref: "/sbsb#events",
  events: [
    {
      title: "SBSB Fest",
      date: "August 22, 2026",
      time: "09:00 AM - 06:00 PM",
      location: "SBIST Campus, Chromepet",
      image: "/images/cultural-fest.jpg",
      href: "/sbsb#events",
    },
    {
      title: "Sports Meet",
      date: "September 12, 2026",
      time: "08:00 AM - 05:00 PM",
      location: "SBIST Sports Grounds, Chennai",
      image: "/images/campus-sports.png",
      href: "/sbsb#events",
    },
    {
      title: "Freshers’ Day",
      date: "July 25, 2026",
      time: "10:00 AM - 02:00 PM",
      location: "SBIST Main Auditorium, Chennai",
      image: "/images/freshers-day.jpg",
      href: "/sbsb#events",
    },
    {
      title: "Annual Cultural Festival",
      date: "October 18, 2026",
      time: "11:00 AM - 08:00 PM",
      location: "SBIST Auditorium & Campus Grounds",
      image: "/images/annual-cultural-fest.jpg",
      href: "/sbsb#events",
    },
    {
      title: "Entrepreneurship Summit",
      date: "November 7, 2026",
      time: "09:30 AM - 04:30 PM",
      location: "SBIST Innovation Hub, Chennai",
      image: "/images/entrepreneur-summit.jpg",
      href: "/sbsb#events",
    },
    {
      title: "Community Programs",
      date: "December 5, 2026",
      time: "09:00 AM - 01:00 PM",
      location: "SBIST Outreach Initiatives, Chennai",
      image: "/images/community-programs.jpg",
      href: "/sbsb#events",
    },
  ],
};

export type HomeGalleryItem = {
  src: string;
  alt: string;
  label: string;
  role: "hero" | "side" | "strip";
};

/** Homepage community gallery — curated mosaic with link to full campus gallery */
export const homeGalleryContent = {
  eyebrow: "Our Community",
  title: "One Campus. One Team.",
  description:
    "From labs and classrooms to celebrations and achievements — SBIST is built by people who learn, create and grow together.",
  viewMoreHref: "/campus-life#gallery",
  viewMoreLabel: "View more",
  items: [
    {
      src: "/images/freshers-day.jpg",
      alt: "Students celebrating together at Freshers Day",
      label: "Celebrate Together",
      role: "hero",
    },
    {
      src: "/images/Gallery/auditorium.JPG",
      alt: "Modern SBIST seminar hall and auditorium",
      label: "Spaces to Gather",
      role: "side",
    },
    {
      src: "/images/community-programs.jpg",
      alt: "Students volunteering in a community outreach program",
      label: "Serve Together",
      role: "side",
    },
    {
      src: "/images/Gallery/lab3.JPG",
      alt: "Students collaborating in the engineering laboratory",
      label: "Build Side by Side",
      role: "strip",
    },
    {
      src: "/images/Gallery/Classroom3.JPG",
      alt: "Students learning together in a modern classroom",
      label: "Learn Together",
      role: "strip",
    },
    {
      src: "/images/Gallery/computer-lab.JPG",
      alt: "Peers working together in the computer lab",
      label: "Create Together",
      role: "strip",
    },
    {
      src: "/images/Gallery/main-building-front.JPG",
      alt: "Front entrance of Sree Balaji Institute of Science and Technology",
      label: "Our Campus",
      role: "strip",
    },
    {
      src: "/images/Gallery/interior2.JPG",
      alt: "Bright campus interiors and common spaces",
      label: "Belong Here",
      role: "strip",
    },
    {
      src: "/images/Gallery/computer1.JPG",
      alt: "Modern computing facilities for hands-on learning",
      label: "Proud Moments",
      role: "strip",
    },
  ] satisfies HomeGalleryItem[],
};

export type CampusLifeGalleryItem = {
  src: string;
  alt: string;
  label: string;
};

/** Full campus life gallery carousel — all photos from /images/Gallery (excl. *-mobile) */
export const campusLifeGalleryContent = {
  eyebrow: "Campus Gallery",
  title: "Moments Across Campus",
  description:
    "Scroll through labs, classrooms, celebrations and everyday life at SBIST.",
  items: [
    { src: "/images/Gallery/auditorium.JPG", alt: "SBIST auditorium", label: "Auditorium" },
    { src: "/images/Gallery/civil.jpg", alt: "Civil engineering laboratory", label: "Civil Lab" },
    { src: "/images/Gallery/Classroom.JPG", alt: "Modern lecture classroom", label: "Lecture Hall" },
    { src: "/images/Gallery/Classroom2.JPG", alt: "Students in classroom learning", label: "Active Learning" },
    { src: "/images/Gallery/Classroom3.JPG", alt: "Technology-enabled classroom", label: "Smart Classroom" },
    { src: "/images/Gallery/Classroom4.JPG", alt: "Campus classroom interior", label: "Learning Spaces" },
    { src: "/images/Gallery/computer.jpg", alt: "Computing facilities", label: "Computing" },
    { src: "/images/Gallery/computer1.JPG", alt: "Computer lab workstations", label: "Computer Lab" },
    { src: "/images/Gallery/computer2.JPG", alt: "Students at computer terminals", label: "Digital Skills" },
    { src: "/images/Gallery/computer-lab.JPG", alt: "Modern computer laboratory", label: "IT Laboratory" },
    { src: "/images/Gallery/computer-lab2.JPG", alt: "Computer lab seating rows", label: "Lab Practice" },
    { src: "/images/Gallery/computer-lab-board.JPG", alt: "Computer lab with instructional board", label: "Guided Practice" },
    { src: "/images/Gallery/electrical.jpg", alt: "Electrical engineering facilities", label: "Electrical" },
    { src: "/images/Gallery/electricallab.jpg", alt: "Electrical engineering laboratory", label: "Electrical Lab" },
    { src: "/images/Gallery/electricallab1.jpg", alt: "Electrical lab equipment", label: "Power Systems" },
    { src: "/images/Gallery/electricallab2.jpg", alt: "Students in electrical lab", label: "Circuit Work" },
    { src: "/images/Gallery/electricallab3.jpg", alt: "Electrical lab benches", label: "Hands-On Circuits" },
    { src: "/images/Gallery/electricallab4.jpg", alt: "Electrical laboratory setup", label: "Lab Ready" },
    { src: "/images/Gallery/interior.JPG", alt: "Campus interior corridor", label: "Campus Interior" },
    { src: "/images/Gallery/interior2.JPG", alt: "Academic building interior", label: "Inside Campus" },
    { src: "/images/Gallery/interior3.JPG", alt: "Campus hallway and spaces", label: "Walkways" },
    { src: "/images/Gallery/interior4.JPG", alt: "Building interior details", label: "Architecture" },
    { src: "/images/Gallery/interior5.JPG", alt: "Campus interior view", label: "Spaces to Grow" },
    { src: "/images/Gallery/interior6.JPG", alt: "Campus common area", label: "Common Spaces" },
    { src: "/images/Gallery/lab.JPG", alt: "Engineering laboratory", label: "Engineering Lab" },
    { src: "/images/Gallery/lab2.JPG", alt: "Laboratory workstations", label: "Lab Work" },
    { src: "/images/Gallery/lab3.JPG", alt: "Students collaborating in lab", label: "Build Side by Side" },
    { src: "/images/Gallery/lab4.JPG", alt: "Hands-on laboratory session", label: "Experiment" },
    { src: "/images/Gallery/lab5.JPG", alt: "Engineering lab equipment", label: "Tools & Practice" },
    { src: "/images/Gallery/legend-map.JPG", alt: "Campus legend map", label: "Campus Map" },
    { src: "/images/Gallery/logo.JPG", alt: "SBIST logo display", label: "Our Identity" },
    { src: "/images/Gallery/main-building-front.JPG", alt: "Main building front elevation", label: "Main Building" },
    { src: "/images/Gallery/main-building-side.JPG", alt: "Main academic block side view", label: "Academic Block" },
    { src: "/images/Gallery/mechanical.jpg", alt: "Mechanical engineering workshop", label: "Mechanical" },
    { src: "/images/Gallery/quotes1.JPG", alt: "Inspirational campus display", label: "Inspiration" },
    { src: "/images/Gallery/quotes2.JPG", alt: "Campus motivational wall", label: "Words to Live By" },
    { src: "/images/Gallery/reception.JPG", alt: "Campus reception area", label: "Welcome Desk" },
    { src: "/images/Gallery/slide-1.jpg", alt: "Campus highlight view", label: "Campus Life" },
    { src: "/images/Gallery/slide-2.jpg", alt: "Campus facility highlight", label: "Our Facilities" },
    { src: "/images/Gallery/slide-3.jpg", alt: "Campus academic highlight", label: "Academic Spirit" },
    { src: "/images/Gallery/workstation-quotes.JPG", alt: "Workstation area with quotes", label: "Workstations" },
    { src: "/images/Gallery/wrokstation.JPG", alt: "Student workstation space", label: "Study Stations" },
    { src: "/images/freshers-day.jpg", alt: "Students at Freshers Day celebration", label: "Freshers Day" },
    { src: "/images/community-programs.jpg", alt: "Community outreach and service", label: "Community Programs" },
  ] satisfies CampusLifeGalleryItem[],
};

export const sbiolHomeContent = {
  eyebrow: "Sree Balaji Institute of Online Learning",
  brand: "SBIOL",
  title: "Earn a UGC-recognized degree without pausing your career",
  description:
    "Flexible online MBA, B.Com and BBA programmes from BIHER — delivered through SBIST Chromepet with 24/7 LMS access and AI-proctored exams.",
  image: "/images/workstation-quotes.JPG",
  imageAlt: "Online learning workstation at SBIST",
  motto: "Aim · Aspire · Inspire",
  programs: [
    {
      title: "Online MBA",
      detail: "2 Years · Postgraduate",
      description: "Strategic leadership with specialised electives for working professionals.",
      href: "/sbiol#courses",
    },
    {
      title: "B.Com",
      detail: "3 Years · Undergraduate",
      description: "Accounting, taxation and information systems — fully online.",
      href: "/sbiol#courses",
    },
    {
      title: "BBA",
      detail: "3 Years · Undergraduate",
      description: "Finance, accounts and business skills for corporate careers.",
      href: "/sbiol#courses",
    },
  ],
  stats: [
    { value: "40+", label: "Years of BIHER trust" },
    { value: "100K+", label: "Alumni network" },
    { value: "24/7", label: "LMS access" },
  ],
  primaryCta: { label: "Explore SBIOL", href: "/sbiol" },
  secondaryCta: { label: "Download Brochure", href: "/docs/SBIOL%20BROUCHER.pdf" },
};

