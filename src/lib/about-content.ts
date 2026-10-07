import type { GalleryImage } from "@/components/blocks/Gallery";
import type { NavIconName } from "@/lib/navigation";
import { stockImages } from "@/lib/home-content";

export type PageStatItem = {
  label: string;
  icon: NavIconName;
  value?: number;
  suffix?: string;
  headline?: string;
};

export type HighlightStatItem = {
  label: string;
  value?: number;
  suffix?: string;
  headline?: string;
};

export const aboutPageContent = {
  header: {
    title: "About SBIST",
    description:
      "At Sree Balaji Institute of Science and Technology, we combine strong academic foundations with practical learning to help students build meaningful careers in engineering, management and technology.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About SBIST", href: "/about" },
    ],
    backgroundImage: stockImages.campus,
  },
  sidebar: {
    title: "SBIST Inside",
    links: [
      { label: "Who We Are", href: "/about", icon: "about" as NavIconName },
      { label: "Our Leader", href: "/about/leadership", icon: "founder" as NavIconName },
      { label: "Academics", href: "/academics", icon: "programs" as NavIconName },
      { label: "Careers", href: "/careers", icon: "faculty" as NavIconName },
      { label: "Contact", href: "/contact", icon: "apply" as NavIconName },
    ],
    image: stockImages.students,
  },
  main: {
    eyebrow: "About SBIST",
    title: "About Sree Balaji Institute of Science and Technology",
    paragraphs: [
      "At SBIST, education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions, challenge conventions and discover their potential through meaningful experiences. Our distinguished faculty members are leaders in their respective fields, dedicated to delivering world-class education that integrates theory with practical application.",
      "With cutting-edge facilities, modern laboratories and a vibrant learning environment, we ensure that every student has the tools and support to excel academically and personally.",
    ],
    quote: {
      text: "Our diverse community welcomes students from across the region, fostering cultural exchange and mutual understanding. Through industry collaborations, research initiatives and innovation hubs, we provide opportunities for students to engage with real-world challenges and contribute to sustainable solutions.",
    },
    closingParagraph:
      "At the heart of SBIST lies a commitment to excellence and inclusivity — helping students gain the skills, confidence and perspective to lead in an ever-changing world.",
    images: {
      primary: "/images/computer-lab.JPG",
      secondary: "/images/entrepreneur-summit.jpg",
    },
  },
  stats: [
    { headline: "Excellence", label: "Academic quality", icon: "campus" as NavIconName },
    { headline: "Innovation", label: "Modern learning", icon: "faculty" as NavIconName },
    { headline: "Growth", label: "Career development", icon: "research" as NavIconName },
  ] as PageStatItem[],
  vision: {
    title: "Our Vision",
    description:
      "In a world rapidly reshaped by AI and technology, Balaji stands as a beacon of what makes us truly human. Our vision is to nurture not just sharp minds, but resilient souls empowering every individual to discover their purpose, lead with empathy, and thrive in an ever-changing world. We strive to inspire creative thinkers, ethical leaders, and lifelong learners who will shape a future defined by intelligence, grounded in humanity.",
    image: "/images/Dr-Nisha.jpg",
    imageAlt: "DR. J. Srinisha Elamaran, Founder & Chairman of SBIST",
    founderName: "DR. J. Srinisha Elamaran",
    founderRole: "Founder & Chairman",
    pillars: [
      {
        title: "Affordability",
        description:
          "SBIST provides transparent, competitive tuition fees and flexible payment options for deserving students.",
        icon: "tuition" as NavIconName,
      },
      {
        title: "Academics",
        description:
          "World-class programs with expert faculty guidance across engineering, management and computer applications.",
        icon: "programs" as NavIconName,
      },
      {
        title: "Campus Life",
        description:
          "Vibrant campus activities, cultural events, sports and clubs that go beyond the classroom.",
        icon: "campus" as NavIconName,
      },
    ],
  },
  mission: {
    title: "Our Mission",
    description:
      "Our mission is to deliver quality education that blends strong academic foundations with practical, industry-aligned learning. We are committed to mentoring every student with care, fostering innovation and research, and building graduates who lead with skill, integrity and social responsibility.",
    pillars: [
      {
        title: "Quality Education",
        description:
          "Rigorous programs taught by qualified faculty, combining theory with hands-on practice across every discipline.",
        icon: "programs" as NavIconName,
      },
      {
        title: "Student Mentorship",
        description:
          "Personal guidance and support that help students grow in confidence, competence and character.",
        icon: "faculty" as NavIconName,
      },
      {
        title: "Industry Readiness",
        description:
          "Labs, projects and real-world exposure that prepare graduates for careers and lifelong learning.",
        icon: "research" as NavIconName,
      },
    ],
  },
  campusTour: {
    title: "Our Campus Tour",
    description:
      "Explore our Chrompet campus — from modern lecture halls and engineering laboratories to the central library and sports grounds. See where SBIST students learn, research and grow.",
    videoHref: "/campus-life",
    image: "/images/interior3.JPG",
  },
  testimonials: {
    title: "Professional Opinions",
    description:
      "Leaders and professionals share why they value Sree Balaji Institute of Science and Technology as a strong choice for students.",
    items: [
      {
        rating: 5.0,
        quote:
          "I strongly recommend Sree Balaji Institute of Science and Technology for students who want quality education with discipline and purpose. It is a college I trust for student growth.",
        name: "Mr. Arjun Desai",
        role: "Industry Mentor, Chennai",
        image: "/images/SREE_Balaji_logo.svg",
      },
      {
        rating: 5.0,
        quote:
          "SBIST stands out for its practical approach to learning. I would confidently suggest Balaji college to students and parents looking for a focused engineering education.",
        name: "Dr. Meera Srinivasan",
        role: "Academic Advisor",
        image: "/images/SREE_Balaji_logo.svg",
      },
      {
        rating: 5.0,
        quote:
          "The institute emphasizes strong fundamentals, modern labs and student responsibility. That is why I prefer Sree Balaji college when guiding young learners.",
        name: "Mr. Karthik Rajan",
        role: "Industry Mentor",
        image: "/images/SREE_Balaji_logo.svg",
      },
      {
        rating: 5.0,
        quote:
          "Sree Balaji Institute of Science and Technology is building students with both skill and character. It is an institution I respect and recommend for aspiring engineers.",
        name: "Ms. Anitha Devi",
        role: "HR & Talent Development",
        image: "/images/SREE_Balaji_logo.svg",
      },
    ],
  },
  gallery: {
    title: "Discover Campus Life",
    subtitle: "Gallery",
    images: [
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
        src: "/images/entrepreneur-summit.jpg",
        alt: "Entrepreneur Summit",
        caption: "Ideate, innovate & inspire",
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
    ] satisfies GalleryImage[],
    ctaHref: "/campus-life",
  },
};
