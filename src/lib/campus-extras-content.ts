/**
 * Laboratories, NCC, NSS and student-life expansions.
 * Uses existing campus imagery where available; marks missing copy clearly.
 */

export type LabFacility = {
  id: string;
  title: string;
  department: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const laboratoriesContent = {
  eyebrow: "Laboratories",
  title: "Engineering & Computing Laboratories",
  description:
    "Hands-on laboratories support teaching across engineering and computer applications. Detailed equipment lists will be published when confirmed by each department.",
  items: [
    {
      id: "computing",
      title: "Computer Laboratories",
      department: "Computer Science / BCA",
      description:
        "Computing labs for programming, systems practice and applied IT coursework.",
      image: "/images/computer-lab.JPG",
      imageAlt: "Students working in the SBIST computer laboratory",
    },
    {
      id: "electronics",
      title: "Electronics Laboratories",
      department: "Electronics and Communication Engineering",
      description:
        "Electronics and circuit practice spaces supporting ECE laboratory courses.",
      image: "/images/electricallab.jpg",
      imageAlt: "Electronics laboratory benches and equipment at SBIST",
    },
    {
      id: "mechanical",
      title: "Mechanical Workshops & Labs",
      department: "Mechanical Engineering",
      description:
        "Workshop and laboratory spaces for mechanical engineering practice.",
      image: "/images/mechanical.jpg",
      imageAlt: "Mechanical engineering workshop facilities at SBIST",
    },
    {
      id: "civil",
      title: "Civil Engineering Lab",
      department: "Civil Engineering",
      description:
        "Civil engineering laboratory spaces for materials and practical work.",
      image: "/images/civil.jpg",
      imageAlt: "Civil engineering laboratory at SBIST",
    },
    {
      id: "general-eng",
      title: "Engineering Laboratories",
      department: "Multi-department",
      description:
        "Shared engineering laboratory spaces used across undergraduate programs.",
      image: "/images/lab.JPG",
      imageAlt: "Engineering laboratory workstations at SBIST",
    },
    {
      id: "biomedical",
      title: "Biomedical Practice Spaces",
      department: "Biomedical Engineering",
      description:
        "PENDING_LAB_DETAIL — Confirm dedicated biomedical lab facilities and equipment list with the department.",
      image: "/images/lab5.JPG",
      imageAlt: "Laboratory space supporting biomedical engineering learning at SBIST",
    },
  ] satisfies LabFacility[],
};

export const nccNssContent = {
  eyebrow: "NCC & NSS",
  title: "National Cadet Corps and National Service Scheme",
  description:
    "Structured service and cadet programs help students build discipline, leadership and community engagement. Official unit details will be published when confirmed.",
  items: [
    {
      id: "ncc",
      title: "NCC",
      summary:
        "PENDING_NCC — Confirm NCC unit affiliation, enrollment process and activity calendar with the college.",
      highlights: [
        "PENDING — Unit / wing details",
        "PENDING — Training schedule",
        "PENDING — Contact officer",
      ],
    },
    {
      id: "nss",
      title: "NSS",
      summary:
        "PENDING_NSS — Confirm NSS unit details, outreach programs and student enrollment process with the college.",
      highlights: [
        "PENDING — Unit details",
        "PENDING — Community programs",
        "PENDING — Faculty coordinator",
      ],
    },
  ],
};

export const studentActivitiesContent = {
  eyebrow: "Student Activities",
  title: "Campus Life Beyond the Classroom",
  description:
    "Clubs, cultural events, sports and community programs shape a full student experience. Explore SBSB for the official clubs framework and signature events.",
  links: [
    { label: "SBSB Clubs & Forums", href: "/sbsb#clubs" },
    { label: "Campus Facilities", href: "/campus-life" },
    { label: "Campus Gallery", href: "/campus-life#gallery" },
  ],
};

export const placementCareerContent = {
  eyebrow: "Placements & Careers",
  title: "Dedicated Placement and Career Guidance",
  description:
    "SBIST supports students with placement training and career guidance — helping them prepare for interviews, build professional skills and connect with industry opportunities.",
  points: [
    {
      title: "Career Guidance",
      description:
        "Personal and group guidance to help students plan academic pathways and career goals.",
    },
    {
      title: "Placement Preparation",
      description:
        "Training that strengthens communication, aptitude and interview readiness before placement drives.",
    },
    {
      title: "Industry Connections",
      description:
        "Guest lectures, industry visits and placement drives that connect students with employers.",
    },
  ],
  /** Do not invent statistics — none are confirmed in the repository */
  note: "Official placement statistics will be published here once confirmed by the Placement Cell.",
  primaryCta: { label: "Contact Admissions", href: "/admissions" },
  secondaryCta: { label: "Explore Programs", href: "/academics#courses" },
  image: "/images/students-classroom.jpg",
  imageAlt: "SBIST students in a classroom preparing for career growth",
};
