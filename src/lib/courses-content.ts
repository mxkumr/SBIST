import type { NavIconName } from "@/lib/navigation";

/**
 * Canonical course catalogue for SBIST.
 * Fields marked PENDING_* require official college confirmation before production copy is finalized.
 */

export type CourseCategory = "engineering" | "management" | "commerce";

export type CourseRecord = {
  slug: string;
  title: string;
  shortTitle: string;
  degree: string;
  duration: string;
  category: CourseCategory;
  icon: NavIconName;
  image: string;
  overview: string;
  details: string[];
  eligibility: string;
  qualification: string;
  approval: string;
  syllabus: string;
  regulations: string;
  academicDetails: string[];
  careerOpportunities: string[];
  /** Department-specific facilities (placeholders until confirmed) */
  facilities: string[];
};

export const courses: CourseRecord[] = [
  {
    slug: "computer-science",
    title: "Computer Science",
    shortTitle: "CSE",
    degree: "B.Tech Computer Science",
    duration: "4 Years",
    category: "engineering",
    icon: "cse",
    image: "/images/computer-lab.JPG",
    overview:
      "The School of Computing has experienced faculty members with industry experience and well-equipped laboratories. Students build strong foundations in computing, software development and problem-solving.",
    details: [
      "Core computing fundamentals with project-based learning",
      "Well-equipped laboratories for programming and systems practice",
      "Faculty mentoring aligned with industry-ready skills",
    ],
    eligibility:
      "PENDING_ELIGIBILITY — Confirm official eligibility criteria with the Admissions Office (typically 10+2 with required subjects as per AICTE / university norms).",
    qualification: "B.Tech in Computer Science",
    approval:
      "PENDING_APPROVAL — Confirm current approval / affiliation details with the college (AICTE approval referenced site-wide; Bharath University affiliation for engineering programs).",
    syllabus:
      "PENDING_SYLLABUS — Official syllabus document to be published by the department / Academic Affairs.",
    regulations:
      "PENDING_REGULATIONS — Academic regulations to be published by Academic Affairs.",
    academicDetails: [
      "Duration: 4 years (full-time undergraduate)",
      "Category: Engineering",
      "Focus: Computing fundamentals, software and systems practice",
    ],
    careerOpportunities: [
      "Software development and IT services",
      "Systems analysis and application engineering",
      "Further study in computing and related fields",
    ],
    facilities: [
      "PENDING_FACILITY — Computer laboratories (details to be confirmed)",
      "PENDING_FACILITY — Department-specific equipment list to be confirmed",
    ],
  },
  {
    slug: "information-and-communication-technology",
    title: "Information and Communication Technology",
    shortTitle: "ICT",
    degree: "B.Tech Information and Communication Technology",
    duration: "4 Years",
    category: "engineering",
    icon: "ict",
    image: "/images/computer1.JPG",
    overview:
      "Focused on networks, communication systems and modern IT infrastructure with practical lab-based learning.",
    details: [
      "Networks and communication systems foundations",
      "IT infrastructure and applied technology practice",
      "Hands-on laboratory learning",
    ],
    eligibility:
      "PENDING_ELIGIBILITY — Confirm official eligibility criteria with the Admissions Office.",
    qualification: "B.Tech in Information and Communication Technology",
    approval:
      "PENDING_APPROVAL — Confirm current approval / affiliation details with the college.",
    syllabus:
      "PENDING_SYLLABUS — Official syllabus document to be published by the department / Academic Affairs.",
    regulations:
      "PENDING_REGULATIONS — Academic regulations to be published by Academic Affairs.",
    academicDetails: [
      "Duration: 4 years (full-time undergraduate)",
      "Category: Engineering",
      "Focus: Networks, communication systems and IT infrastructure",
    ],
    careerOpportunities: [
      "Network and communications roles",
      "IT infrastructure and support engineering",
      "Further study in ICT-related fields",
    ],
    facilities: [
      "PENDING_FACILITY — ICT / networking laboratories (details to be confirmed)",
    ],
  },
  {
    slug: "electronics-and-communication-engineering",
    title: "Electronics and Communication Engineering",
    shortTitle: "ECE",
    degree: "B.Tech Electronics and Communication Engineering",
    duration: "4 Years",
    category: "engineering",
    icon: "ece",
    image: "/images/lab2.JPG",
    overview:
      "Electronics and Communication Engineering prepares students to design, analyse and innovate across electronic systems and communication technologies, with an emphasis on practical laboratory skills.",
    details: [
      "Electronics and communication fundamentals",
      "Laboratory practice with circuit and systems work",
      "Innovation-oriented project learning",
    ],
    eligibility:
      "PENDING_ELIGIBILITY — Confirm official eligibility criteria with the Admissions Office.",
    qualification: "B.Tech in Electronics and Communication Engineering",
    approval:
      "PENDING_APPROVAL — Confirm current approval / affiliation details with the college.",
    syllabus:
      "PENDING_SYLLABUS — Official syllabus document to be published by the department / Academic Affairs.",
    regulations:
      "PENDING_REGULATIONS — Academic regulations to be published by Academic Affairs.",
    academicDetails: [
      "Duration: 4 years (full-time undergraduate)",
      "Category: Engineering",
      "Focus: Electronics, circuits and communication systems",
    ],
    careerOpportunities: [
      "Electronics design and embedded systems",
      "Telecommunications and related industries",
      "Further study in ECE and allied fields",
    ],
    facilities: [
      "PENDING_FACILITY — Electronics laboratories (details to be confirmed)",
      "Campus electrical / electronics lab imagery available in the gallery",
    ],
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    shortTitle: "Civil",
    degree: "B.Tech Civil Engineering",
    duration: "4 Years",
    category: "engineering",
    icon: "civil",
    image: "/images/civil_eng.png",
    overview:
      "The Department of Civil Engineering is committed to providing quality education that transforms students into efficient and successful engineers.",
    details: [
      "Structural, materials and infrastructure foundations",
      "Quality-focused academic preparation",
      "Practical exposure through labs and projects",
    ],
    eligibility:
      "PENDING_ELIGIBILITY — Confirm official eligibility criteria with the Admissions Office.",
    qualification: "B.Tech in Civil Engineering",
    approval:
      "PENDING_APPROVAL — Confirm current approval / affiliation details with the college.",
    syllabus:
      "PENDING_SYLLABUS — Official syllabus document to be published by the department / Academic Affairs.",
    regulations:
      "PENDING_REGULATIONS — Academic regulations to be published by Academic Affairs.",
    academicDetails: [
      "Duration: 4 years (full-time undergraduate)",
      "Category: Engineering",
      "Focus: Infrastructure, structures and civil works",
    ],
    careerOpportunities: [
      "Construction and infrastructure roles",
      "Structural and project engineering pathways",
      "Further study in civil and related fields",
    ],
    facilities: [
      "PENDING_FACILITY — Civil engineering laboratory (details to be confirmed)",
    ],
  },
  {
    slug: "mechanical-engineering",
    title: "Mechanical Engineering",
    shortTitle: "Mechanical",
    degree: "B.Tech Mechanical Engineering",
    duration: "4 Years",
    category: "engineering",
    icon: "mechanical",
    image: "/images/lab4.JPG",
    overview:
      "The School of Mechanical Engineering is one of the pioneering departments of our institute, preparing students for design, manufacturing and mechanical systems careers.",
    details: [
      "Core mechanical engineering fundamentals",
      "Workshop and laboratory practice",
      "Design and manufacturing orientation",
    ],
    eligibility:
      "PENDING_ELIGIBILITY — Confirm official eligibility criteria with the Admissions Office.",
    qualification: "B.Tech in Mechanical Engineering",
    approval:
      "PENDING_APPROVAL — Confirm current approval / affiliation details with the college.",
    syllabus:
      "PENDING_SYLLABUS — Official syllabus document to be published by the department / Academic Affairs.",
    regulations:
      "PENDING_REGULATIONS — Academic regulations to be published by Academic Affairs.",
    academicDetails: [
      "Duration: 4 years (full-time undergraduate)",
      "Category: Engineering",
      "Focus: Design, manufacturing and mechanical systems",
    ],
    careerOpportunities: [
      "Manufacturing and design engineering",
      "Automotive and industrial roles",
      "Further study in mechanical and related fields",
    ],
    facilities: [
      "PENDING_FACILITY — Mechanical workshop / laboratories (details to be confirmed)",
    ],
  },
  {
    slug: "biomedical-engineering",
    title: "Biomedical Engineering",
    shortTitle: "BME",
    degree: "B.Tech Biomedical Engineering",
    duration: "4 Years",
    category: "engineering",
    icon: "biomedical",
    image: "/images/lab5.JPG",
    overview:
      "Combining engineering principles with medical sciences to prepare students for healthcare technology and device innovation.",
    details: [
      "Engineering foundations applied to healthcare technology",
      "Interdisciplinary learning across medicine and engineering",
      "Preparation for medical device and health-tech pathways",
    ],
    eligibility:
      "PENDING_ELIGIBILITY — Confirm official eligibility criteria with the Admissions Office.",
    qualification: "B.Tech in Biomedical Engineering",
    approval:
      "PENDING_APPROVAL — Confirm current approval / affiliation details with the college.",
    syllabus:
      "PENDING_SYLLABUS — Official syllabus document to be published by the department / Academic Affairs.",
    regulations:
      "PENDING_REGULATIONS — Academic regulations to be published by Academic Affairs.",
    academicDetails: [
      "Duration: 4 years (full-time undergraduate)",
      "Category: Engineering",
      "Focus: Healthcare technology and biomedical systems",
    ],
    careerOpportunities: [
      "Medical device and healthcare technology roles",
      "Hospital and clinical engineering pathways",
      "Further study in biomedical and related fields",
    ],
    facilities: [
      "PENDING_FACILITY — Biomedical laboratories (details to be confirmed)",
    ],
  },
  {
    slug: "bba",
    title: "BBA",
    shortTitle: "BBA",
    degree: "BBA",
    duration: "3 Years",
    category: "management",
    icon: "bba",
    image: "/images/students-library.png",
    overview:
      "A Bachelor of Business Administration program focused on management fundamentals, entrepreneurship and industry-ready business skills.",
    details: [
      "Management fundamentals and entrepreneurship",
      "Business skills for industry readiness",
      "Project and case-based learning orientation",
    ],
    eligibility:
      "PENDING_ELIGIBILITY — Confirm official eligibility criteria with the Admissions Office.",
    qualification: "Bachelor of Business Administration (BBA)",
    approval:
      "PENDING_APPROVAL — Confirm current approval / affiliation details with the college.",
    syllabus:
      "PENDING_SYLLABUS — Official syllabus document to be published by Academic Affairs.",
    regulations:
      "PENDING_REGULATIONS — Academic regulations to be published by Academic Affairs.",
    academicDetails: [
      "Duration: 3 years (full-time undergraduate)",
      "Category: Management",
    ],
    careerOpportunities: [
      "Business operations and management roles",
      "Entrepreneurship and startup pathways",
      "Further study in management",
    ],
    facilities: [
      "PENDING_FACILITY — Department facilities to be confirmed",
    ],
  },
  {
    slug: "bca",
    title: "BCA",
    shortTitle: "BCA",
    degree: "BCA",
    duration: "3 Years",
    category: "commerce",
    icon: "bca",
    image: "/images/computer2.JPG",
    overview:
      "A Bachelor of Computer Applications program covering software development, databases and applied computing for IT careers.",
    details: [
      "Software development and databases",
      "Applied computing for IT careers",
      "Hands-on computing laboratory practice",
    ],
    eligibility:
      "PENDING_ELIGIBILITY — Confirm official eligibility criteria with the Admissions Office.",
    qualification: "Bachelor of Computer Applications (BCA)",
    approval:
      "PENDING_APPROVAL — Confirm current approval / affiliation details with the college.",
    syllabus:
      "PENDING_SYLLABUS — Official syllabus document to be published by Academic Affairs.",
    regulations:
      "PENDING_REGULATIONS — Academic regulations to be published by Academic Affairs.",
    academicDetails: [
      "Duration: 3 years (full-time undergraduate)",
      "Category: Computer Applications",
    ],
    careerOpportunities: [
      "Software and IT application roles",
      "Database and development support pathways",
      "Further study in computing",
    ],
    facilities: [
      "PENDING_FACILITY — Computing laboratories (details to be confirmed)",
    ],
  },
];

export const engineeringCourses = courses.filter((c) => c.category === "engineering");

export function getCourseBySlug(slug: string): CourseRecord | undefined {
  return courses.find((c) => c.slug === slug);
}

export function courseHref(slug: string): string {
  return `/academics/courses/${slug}`;
}

/** Map legacy department card fields from the canonical course list */
export function coursesAsDepartments() {
  return courses.map((course) => ({
    title: course.title,
    description: course.overview,
    image: course.image,
    href: courseHref(course.slug),
    degree: course.degree,
    icon: course.icon,
    duration: course.duration,
    category: course.category,
  }));
}
