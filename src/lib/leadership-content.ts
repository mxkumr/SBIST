import { stockImages } from "@/lib/home-content";

export const leadershipPageContent = {
  header: {
    title: "Our Leader",
    description:
      "DR. J. Srinisha Elamaran — A Leader with Vision. A Heart with Purpose.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About SBIST", href: "/about" },
      { label: "Our Leader", href: "/about/leadership" },
    ],
    backgroundImage: stockImages.campus,
  },
  intro: {
    eyebrow: "Leadership",
    name: "Srinisha Elamaran",
    formalName: "DR. J. Srinisha Elamaran",
    tagline: "A Leader with Vision. A Heart with Purpose.",
    role: "Founder & Chairman",
    image: "/images/Dr-Nisha.jpg",
    imageAlt: "DR. J. Srinisha Elamaran, Founder & Chairman of SBIST",
    paragraphs: [
      "Srinisha Elamaran is a compassionate leader and visionary administrator whose work reflects a strong commitment to excellence, empathy, education, healthcare and service.",
      "Through her leadership and involvement across diverse institutions, she has contributed to building and strengthening organisations that serve communities through healthcare, education, hospitality, engineering and industry.",
      "Her approach to leadership is rooted not merely in managing institutions, but in creating systems that place people, quality and long-term impact at the centre of every decision.",
    ],
  },
  institutions: {
    eyebrow: "Institutions & Organisations",
    title: "Associated Institutions",
    description:
      "Under her leadership and stewardship, she is associated with a diverse group of institutions and organisations, including:",
    groups: [
      {
        title: "Healthcare & Medical Education",
        items: [
          "Sree Balaji Medical College & Hospital, Chrompet",
          "Sree Balaji Dental College, Pallikaranai",
          "Nandivarman Medical College & Hospital, Walajabad",
          "JR Medical College & Hospital, Dindivanam",
        ],
      },
      {
        title: "Education & Engineering",
        items: ["Balaji Engineering College", "JR Engineering College"],
      },
      {
        title: "Hospitality",
        items: ["Kaldan Group of Hotels"],
      },
      {
        title: "Industry",
        items: ["Panyam Cements"],
      },
    ],
  },
  beyondAdmin: {
    eyebrow: "Leadership Beyond Administration",
    title: "Value, Opportunity and Positive Change",
    paragraphs: [
      "Her leadership extends beyond the conventional boundaries of administration.",
      "She believes that every institution has a responsibility to create value, opportunity and positive change for the people it serves.",
      "Whether it is a healthcare institution caring for patients, an educational institution shaping young minds, an engineering institution preparing future professionals, or an industrial organisation contributing to economic growth, her focus remains on people, performance and sustainable development.",
    ],
  },
  healthcare: {
    eyebrow: "A Commitment to Healthcare",
    title: "Excellence Supported by Compassion",
    paragraphs: [
      "Healthcare represents one of the most important areas of her institutional leadership.",
      "Behind every patient is a family seeking not only treatment, but also hope, confidence and reassurance.",
      "Her philosophy is therefore centred on creating environments where excellence in healthcare is supported by compassion, accessibility, professionalism and responsible administration.",
    ],
    quote: "She is not just overseeing systems — she is helping create institutions that touch lives.",
    highlights: ["Every patient treated.", "Every family reassured.", "Every life supported."],
  },
  education: {
    eyebrow: "A Vision for Education",
    title: "Where Knowledge Meets Opportunity",
    paragraphs: [
      "Education is another important dimension of her leadership.",
      "Through her association with medical, dental, engineering and other educational institutions, she is part of an ecosystem focused on preparing the next generation of professionals and leaders.",
      "Her vision goes beyond academic instruction — encouraging institutions to develop students with professional excellence, innovation and creativity, research orientation, ethical values, leadership capabilities and social responsibility.",
      "The objective is to build institutions where knowledge meets opportunity and education creates meaningful impact.",
    ],
  },
  sectors: {
    eyebrow: "Leadership Across Diverse Sectors",
    title: "A Multidisciplinary Perspective",
    paragraphs: [
      "Her association with healthcare, education, hospitality, engineering and industry reflects a broad understanding of institutional development.",
      "This multidisciplinary perspective enables her to approach leadership with a wider vision — combining people, process, innovation, excellence and responsibility.",
      "Her work reflects the belief that successful institutions are not built only through infrastructure or resources, but through strong values, capable people and a clear purpose.",
    ],
  },
  philosophy: {
    eyebrow: "Her Leadership Philosophy",
    title: "Lead with Purpose. Serve with Empathy. Build for the Future.",
    paragraphs: [
      "For Srinisha Elamaran, leadership is not simply about authority or position.",
      "It is about responsibility, trust and the ability to make a meaningful difference.",
      "She believes that true leadership is reflected in the institutions one builds, the people one empowers and the lives one positively influences.",
    ],
  },
  lookingAhead: {
    eyebrow: "Looking Ahead",
    title: "Her Work Is Her Promise. Her Leadership Is Her Legacy.",
    paragraphs: [
      "With a growing presence across healthcare, education, engineering, hospitality and industry, her journey represents a continuing commitment to institutional excellence and meaningful social impact.",
      "Her vision is to strengthen institutions that are progressive in thought, strong in values, excellence-driven in execution and meaningful in their impact on society.",
    ],
  },
};

/** Compact preview used on the About page */
export const aboutLeaderPreview = {
  eyebrow: "Our Leader",
  title: "DR. J. Srinisha Elamaran",
  tagline: "A Leader with Vision. A Heart with Purpose.",
  role: "Founder & Chairman",
  image: "/images/Dr-Nisha.jpg",
  imageAlt: "DR. J. Srinisha Elamaran, Founder & Chairman of SBIST",
  paragraphs: leadershipPageContent.intro.paragraphs,
  readMoreHref: "/about/leadership",
  readMoreLabel: "Read More",
};
