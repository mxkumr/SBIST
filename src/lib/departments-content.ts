import type { NavIconName } from "@/lib/navigation";

export type DepartmentFaculty = {
  name: string;
  role: string;
  focus: string;
};

export type DepartmentPageContent = {
  slug: string;
  name: string;
  shortName: string;
  degree: string;
  category: "engineering" | "science" | "humanities" | "management" | "applications";
  icon: NavIconName;
  image: string;
  headerDescription: string;
  overview: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  vision: {
    title: string;
    text: string;
  };
  mission: {
    title: string;
    text: string;
  };
  outcomes: {
    peos: string[];
    pos: string[];
    psos: string[];
  };
  faculties: DepartmentFaculty[];
  activities: { title: string; description: string }[];
  achievements: { title: string; detail: string }[];
  eLearning: {
    title: string;
    description: string;
    resources: { label: string; detail: string }[];
  };
  gallery: { src: string; alt: string; label: string }[];
};

const sectionNav = [
  { label: "Overview / About", href: "#overview", icon: "about" as NavIconName },
  { label: "Vision & Mission", href: "#vision-mission", icon: "mission" as NavIconName },
  { label: "PEOs | POs | PSOs", href: "#outcomes", icon: "programs" as NavIconName },
  // { label: "Faculties", href: "#faculties", icon: "faculty" as NavIconName },
  { label: "Activities", href: "#activities", icon: "events" as NavIconName },
  { label: "Academic Achievements", href: "#achievements", icon: "alumni" as NavIconName },
  { label: "E-Learning", href: "#e-learning", icon: "library" as NavIconName },
  { label: "Gallery", href: "#gallery", icon: "gallery" as NavIconName },
];

export const departmentSectionNav = sectionNav;

function defaultFaculties(dept: string): DepartmentFaculty[] {
  return [
    { name: `Dr. A. Sharma`, role: "Professor & Head", focus: `${dept} leadership and curriculum design` },
    { name: `Dr. B. Krishnan`, role: "Professor", focus: "Research mentoring and advanced coursework" },
    { name: `Prof. C. Mehta`, role: "Associate Professor", focus: "Laboratory instruction and projects" },
    { name: `Prof. D. Iyer`, role: "Associate Professor", focus: "Student mentoring and assessments" },
    { name: `Ms. E. Reddy`, role: "Assistant Professor", focus: "Foundation courses and tutorials" },
    { name: `Mr. F. Nair`, role: "Assistant Professor", focus: "Practical training and workshops" },
  ];
}

function defaultOutcomes(subject: string) {
  return {
    peos: [
      `Graduates will practise ${subject} with professional competence and ethical responsibility.`,
      `Graduates will pursue continuous learning, research or higher studies in related fields.`,
      `Graduates will contribute to industry and society through innovation and teamwork.`,
    ],
    pos: [
      "Apply knowledge of mathematics, science and engineering fundamentals to solve problems.",
      "Design and conduct experiments, analyse and interpret data.",
      "Communicate effectively and work as a member or leader of multidisciplinary teams.",
      "Understand professional ethics, sustainability and societal impact.",
    ],
    psos: [
      `Apply domain knowledge of ${subject} to design, implement and evaluate practical solutions.`,
      `Use modern tools and techniques relevant to the discipline for academic and industry projects.`,
    ],
  };
}

type DeptSeed = {
  slug: string;
  name: string;
  shortName: string;
  degree: string;
  category: DepartmentPageContent["category"];
  icon: NavIconName;
  image: string;
  overview: string[];
  highlights: string[];
  vision: string;
  mission: string;
  gallery: DepartmentPageContent["gallery"];
};

function buildDepartment(seed: DeptSeed): DepartmentPageContent {
  return {
    slug: seed.slug,
    name: seed.name,
    shortName: seed.shortName,
    degree: seed.degree,
    category: seed.category,
    icon: seed.icon,
    image: seed.image,
    headerDescription: `Explore the Department of ${seed.name} at SBIST - overview, vision, outcomes, faculty, activities and learning resources.`,
    overview: {
      eyebrow: "Overview / About",
      title: `Department of ${seed.name}`,
      paragraphs: seed.overview,
      highlights: seed.highlights,
    },
    vision: {
      title: "Vision",
      text: seed.vision,
    },
    mission: {
      title: "Mission",
      text: seed.mission,
    },
    outcomes: defaultOutcomes(seed.name),
    faculties: defaultFaculties(seed.shortName),
    activities: [
      {
        title: "Guest Lectures & Seminars",
        description: "Industry and academic experts share emerging trends with students.",
      },
      {
        title: "Workshops & Hands-on Sessions",
        description: "Practical workshops that strengthen laboratory and project skills.",
      },
      {
        title: "Student Clubs & Competitions",
        description: "Department-led clubs encourage innovation, teamwork and presentation skills.",
      },
      {
        title: "Industrial Visits",
        description: "Structured visits that connect classroom learning with real workplace practice.",
      },
    ],
    achievements: [
      {
        title: "Academic Excellence",
        detail: "Consistent student performance in university examinations and project evaluations.",
      },
      {
        title: "Project Showcases",
        detail: "Student teams present innovative solutions at campus expos and technical events.",
      },
      {
        title: "Faculty Mentorship",
        detail: "Guided research mini-projects and publication support for motivated learners.",
      },
      {
        title: "Community Engagement",
        detail: "Outreach and awareness programmes that extend learning beyond the classroom.",
      },
    ],
    eLearning: {
      title: "E-Learning Resources",
      description:
        "Students access digital notes, recorded sessions and curated open learning resources to reinforce classroom teaching.",
      resources: [
        { label: "Lecture Notes & Handouts", detail: "Topic-wise notes shared through the learning portal." },
        { label: "Recorded Demonstrations", detail: "Lab demos and concept refreshers for revision." },
        { label: "NPTEL / Online Courses", detail: "Guided recommendations for complementary self-study." },
        { label: "Question Banks", detail: "Practice sets aligned to course outcomes and assessments." },
      ],
    },
    gallery: seed.gallery,
  };
}

export const departmentPages: DepartmentPageContent[] = [
  buildDepartment({
    slug: "computer-science",
    name: "Computer Science",
    shortName: "CSE",
    degree: "B.Tech Computer Science",
    category: "engineering",
    icon: "cse",
    image: "/images/computer-lab.JPG",
    overview: [
      "The Department of Computer Science at SBIST prepares students for software, systems and data-driven careers through a blend of theory and practice.",
      "With well-equipped computing laboratories and experienced faculty, learners build strong foundations in programming, algorithms, networks and emerging technologies.",
    ],
    highlights: ["Programming & software engineering", "Networks and databases", "Project-based learning"],
    vision:
      "To be a centre of excellence in computer science education that nurtures innovative, ethical and industry-ready professionals.",
    mission:
      "To deliver quality computing education through rigorous academics, modern laboratories, research orientation and continuous mentoring.",
    gallery: [
      { src: "/images/Gallery/computer-lab.JPG", alt: "Computer science laboratory", label: "Computing Lab" },
      { src: "/images/Gallery/computer1.JPG", alt: "Student workstations", label: "Workstations" },
      { src: "/images/Gallery/computer2.JPG", alt: "Students at terminals", label: "Practice Sessions" },
      { src: "/images/Gallery/Classroom3.JPG", alt: "Smart classroom", label: "Smart Classroom" },
    ],
  }),
  buildDepartment({
    slug: "electronics-and-communication-engineering",
    name: "Electronics and Communication Engineering",
    shortName: "ECE",
    degree: "B.Tech Electronics and Communication Engineering",
    category: "engineering",
    icon: "ece",
    image: "/images/lab2.JPG",
    overview: [
      "Electronics and Communication Engineering at SBIST focuses on circuits, communication systems, signal processing and embedded applications.",
      "Students gain hands-on exposure through laboratories and projects that connect electronic design with real-world communication challenges.",
    ],
    highlights: ["Analog & digital electronics", "Communication systems", "Embedded applications"],
    vision:
      "To develop competent electronics and communication engineers who innovate for a connected and sustainable future.",
    mission:
      "To provide strong fundamentals, laboratory practice and industry-aligned learning in electronics and communication.",
    gallery: [
      { src: "/images/Gallery/electrical.jpg", alt: "Electronics facilities", label: "Electronics" },
      { src: "/images/Gallery/electricallab.jpg", alt: "Electronics lab", label: "Lab Practice" },
      { src: "/images/Gallery/lab2.JPG", alt: "Engineering lab", label: "Circuits Lab" },
      { src: "/images/Gallery/Classroom.JPG", alt: "Lecture hall", label: "Lecture Hall" },
    ],
  }),
  buildDepartment({
    slug: "information-and-communication-technology",
    name: "Information and Communication Technology",
    shortName: "ICT",
    degree: "B.Tech Information and Communication Technology",
    category: "engineering",
    icon: "ict",
    image: "/images/computer1.JPG",
    overview: [
      "The ICT department combines computing, networking and communication technologies to prepare students for modern digital infrastructure roles.",
      "Curriculum and labs emphasise practical skills in networks, information systems and communication platforms.",
    ],
    highlights: ["Networks & infrastructure", "Information systems", "Applied communication tech"],
    vision:
      "To create ICT graduates who can design, manage and secure reliable information and communication systems.",
    mission:
      "To integrate computing and communication learning with laboratory practice, projects and professional mentoring.",
    gallery: [
      { src: "/images/Gallery/computer.jpg", alt: "ICT computing facilities", label: "ICT Lab" },
      { src: "/images/Gallery/computer-lab2.JPG", alt: "Network lab seating", label: "Lab Rows" },
      { src: "/images/Gallery/computer-lab-board.JPG", alt: "Guided practice lab", label: "Guided Practice" },
      { src: "/images/Gallery/Classroom2.JPG", alt: "Active learning classroom", label: "Classroom" },
    ],
  }),
  buildDepartment({
    slug: "mechanical-engineering",
    name: "Mechanical Engineering",
    shortName: "MECH",
    degree: "B.Tech Mechanical Engineering",
    category: "engineering",
    icon: "mechanical",
    image: "/images/lab4.JPG",
    overview: [
      "Mechanical Engineering at SBIST is a pioneering department focused on design, manufacturing, thermal systems and applied mechanics.",
      "Students learn through workshops, laboratories and projects that convert engineering theory into practical capability.",
    ],
    highlights: ["Design & manufacturing", "Thermal & fluid systems", "Workshop practice"],
    vision:
      "To produce mechanical engineers with strong fundamentals, creative design ability and professional integrity.",
    mission:
      "To offer rigorous mechanical engineering education supported by laboratories, industry exposure and faculty mentorship.",
    gallery: [
      { src: "/images/Gallery/mechanical.jpg", alt: "Mechanical workshop", label: "Workshop" },
      { src: "/images/Gallery/lab4.JPG", alt: "Mechanical lab session", label: "Lab Session" },
      { src: "/images/Gallery/lab5.JPG", alt: "Engineering equipment", label: "Equipment" },
      { src: "/images/Gallery/lab.JPG", alt: "Engineering laboratory", label: "Engineering Lab" },
    ],
  }),
  buildDepartment({
    slug: "civil-engineering",
    name: "Civil Engineering",
    shortName: "CIVIL",
    degree: "B.Tech Civil Engineering",
    category: "engineering",
    icon: "civil",
    image: "/images/civil_eng.jpg",
    overview: [
      "The Civil Engineering department is committed to quality education that transforms students into efficient and responsible infrastructure professionals.",
      "Learning spans structural concepts, materials, surveying and construction practice with emphasis on safety and sustainability.",
    ],
    highlights: ["Structures & materials", "Surveying practice", "Sustainable construction"],
    vision:
      "To develop civil engineers who build safe, sustainable and community-centred infrastructure.",
    mission:
      "To deliver strong civil engineering foundations through theory, field exposure and laboratory-based learning.",
    gallery: [
      { src: "/images/Gallery/civil.jpg", alt: "Civil engineering laboratory", label: "Civil Lab" },
      { src: "/images/Gallery/main-building-side.JPG", alt: "Academic block", label: "Campus Structures" },
      { src: "/images/Gallery/lab3.JPG", alt: "Students in lab", label: "Team Practice" },
      { src: "/images/Gallery/interior4.JPG", alt: "Campus architecture", label: "Architecture" },
    ],
  }),
  buildDepartment({
    slug: "biomedical-engineering",
    name: "Biomedical Engineering",
    shortName: "BME",
    degree: "B.Tech Biomedical Engineering",
    category: "engineering",
    icon: "biomedical",
    image: "/images/lab5.JPG",
    overview: [
      "Biomedical Engineering at SBIST blends engineering principles with medical sciences for healthcare technology and device innovation.",
      "Students explore instrumentation, biomaterials and system design that support diagnosis, therapy and medical research.",
    ],
    highlights: ["Medical instrumentation", "Biomaterials basics", "Healthcare technology projects"],
    vision:
      "To prepare biomedical engineers who advance healthcare through ethical technology and interdisciplinary skill.",
    mission:
      "To integrate engineering and life-science learning with laboratories, projects and professional guidance.",
    gallery: [
      { src: "/images/Gallery/lab5.JPG", alt: "Biomedical lab equipment", label: "Lab Equipment" },
      { src: "/images/Gallery/lab.JPG", alt: "Engineering laboratory", label: "Practice Lab" },
      { src: "/images/Gallery/Classroom4.JPG", alt: "Learning space", label: "Learning Space" },
      { src: "/images/Gallery/computer-lab.JPG", alt: "Computing support lab", label: "Computing Support" },
    ],
  }),
  buildDepartment({
    slug: "physics",
    name: "Physics",
    shortName: "PHY",
    degree: "Department of Physics",
    category: "science",
    icon: "research",
    image: "/images/lab.JPG",
    overview: [
      "The Department of Physics strengthens scientific foundations for engineering and technology programmes through conceptual clarity and laboratory practice.",
      "Students develop analytical thinking that supports applied engineering learning across disciplines.",
    ],
    highlights: ["Core physics concepts", "Laboratory experiments", "Engineering applications"],
    vision:
      "To cultivate scientific temper and strong physics fundamentals that empower engineering learners.",
    mission:
      "To teach physics with clarity, experimentation and relevance to modern engineering practice.",
    gallery: [
      { src: "/images/Gallery/lab.JPG", alt: "Physics laboratory", label: "Physics Lab" },
      { src: "/images/Gallery/lab2.JPG", alt: "Experiment benches", label: "Experiments" },
      { src: "/images/Gallery/Classroom.JPG", alt: "Physics classroom", label: "Classroom" },
      { src: "/images/Gallery/quotes1.JPG", alt: "Inspiration wall", label: "Inspiration" },
    ],
  }),
  buildDepartment({
    slug: "chemistry",
    name: "Chemistry",
    shortName: "CHEM",
    degree: "Department of Chemistry",
    category: "science",
    icon: "research",
    image: "/images/lab3.JPG",
    overview: [
      "The Department of Chemistry supports engineering education with applied chemistry concepts, materials awareness and laboratory skills.",
      "Learners gain confidence in experimental methods that underpin many engineering and industrial processes.",
    ],
    highlights: ["Applied chemistry", "Materials awareness", "Lab safety & practice"],
    vision:
      "To build chemistry competence that strengthens engineering judgement and laboratory discipline.",
    mission:
      "To deliver chemistry teaching that is practical, safe and connected to engineering applications.",
    gallery: [
      { src: "/images/Gallery/lab3.JPG", alt: "Chemistry lab collaboration", label: "Chemistry Lab" },
      { src: "/images/Gallery/lab4.JPG", alt: "Laboratory practice", label: "Lab Practice" },
      { src: "/images/Gallery/Classroom2.JPG", alt: "Classroom learning", label: "Classroom" },
      { src: "/images/Gallery/interior2.JPG", alt: "Campus interiors", label: "Campus Spaces" },
    ],
  }),
  buildDepartment({
    slug: "maths",
    name: "Maths",
    shortName: "MATH",
    degree: "Department of Mathematics",
    category: "science",
    icon: "programs",
    image: "/images/Classroom.JPG",
    overview: [
      "The Department of Maths provides the analytical backbone for engineering and technology programmes through rigorous mathematical foundations.",
      "Students develop problem-solving habits essential for modelling, computation and advanced technical study.",
    ],
    highlights: ["Engineering mathematics", "Problem solving", "Analytical thinking"],
    vision:
      "To make mathematics a strength for every SBIST learner across engineering and professional programmes.",
    mission:
      "To teach mathematics with clarity, practice and direct relevance to technical education.",
    gallery: [
      { src: "/images/Gallery/Classroom.JPG", alt: "Mathematics classroom", label: "Classroom" },
      { src: "/images/Gallery/Classroom3.JPG", alt: "Smart classroom", label: "Smart Class" },
      { src: "/images/Gallery/wrokstation.JPG", alt: "Study stations", label: "Study Stations" },
      { src: "/images/Gallery/workstation-quotes.JPG", alt: "Focused study area", label: "Focus Zones" },
    ],
  }),
  buildDepartment({
    slug: "languages",
    name: "Languages",
    shortName: "LANG",
    degree: "Department of Languages",
    category: "humanities",
    icon: "library",
    image: "/images/students-library.jpg",
    overview: [
      "The Department of Languages builds communication competence that supports academic writing, presentations and professional interaction.",
      "Students strengthen English and communication skills essential for placements, teamwork and lifelong learning.",
    ],
    highlights: ["Professional communication", "Academic writing", "Presentation skills"],
    vision:
      "To develop confident communicators who express ideas clearly in academic and professional settings.",
    mission:
      "To nurture language and communication skills through interactive teaching, practice and continuous feedback.",
    gallery: [
      { src: "/images/Gallery/Classroom4.JPG", alt: "Language classroom", label: "Language Class" },
      { src: "/images/students-library.jpg", alt: "Library study", label: "Library" },
      { src: "/images/Gallery/reception.JPG", alt: "Campus reception", label: "Campus Life" },
      { src: "/images/Gallery/auditorium.JPG", alt: "Auditorium presentations", label: "Auditorium" },
    ],
  }),
  buildDepartment({
    slug: "computer-applications",
    name: "Computer Applications",
    shortName: "BCA",
    degree: "BCA",
    category: "applications",
    icon: "bca",
    image: "/images/computer2.JPG",
    overview: [
      "Computer Applications at SBIST covers software development, databases and applied computing pathways for IT careers.",
      "The programme balances programming fundamentals with practical application development and project experience.",
    ],
    highlights: ["Software development", "Databases & applications", "IT career readiness"],
    vision:
      "To prepare application-oriented computing graduates ready for industry and higher studies.",
    mission:
      "To provide practical computer applications education through coding practice, projects and mentoring.",
    gallery: [
      { src: "/images/Gallery/computer2.JPG", alt: "Computer applications lab", label: "Applications Lab" },
      { src: "/images/Gallery/computer1.JPG", alt: "Coding workstations", label: "Coding Desks" },
      { src: "/images/Gallery/computer-lab.JPG", alt: "IT laboratory", label: "IT Lab" },
      { src: "/images/Gallery/Classroom3.JPG", alt: "Learning classroom", label: "Classroom" },
    ],
  }),
  buildDepartment({
    slug: "management",
    name: "Management",
    shortName: "BBA",
    degree: "BBA",
    category: "management",
    icon: "bba",
    image: "/images/students-library.jpg",
    overview: [
      "The Management department offers business fundamentals, entrepreneurship exposure and industry-ready managerial skills through the BBA pathway.",
      "Students learn organisational behaviour, marketing, finance basics and leadership practices suited to modern workplaces.",
    ],
    highlights: ["Business fundamentals", "Entrepreneurship mindset", "Industry-ready skills"],
    vision:
      "To develop ethical, capable management graduates who lead teams and create value in organisations.",
    mission:
      "To deliver management education that blends theory, case discussion, communication and practical exposure.",
    gallery: [
      { src: "/images/students-library.jpg", alt: "Management study space", label: "Study Space" },
      { src: "/images/Gallery/auditorium.JPG", alt: "Seminar auditorium", label: "Seminars" },
      { src: "/images/Gallery/Classroom2.JPG", alt: "Management classroom", label: "Classroom" },
      { src: "/images/entrepreneur-summit.jpg", alt: "Entrepreneurship event", label: "Entrepreneurship" },
    ],
  }),
];

export function getDepartmentBySlug(slug: string): DepartmentPageContent | undefined {
  return departmentPages.find((dept) => dept.slug === slug);
}

export function getAllDepartmentSlugs(): string[] {
  return departmentPages.map((dept) => dept.slug);
}

export const departmentsIndexContent = {
  header: {
    title: "Departments",
    description:
      "Explore academic departments at SBIST - engineering, sciences, languages, computer applications and management.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Departments", href: "/departments" },
    ],
    backgroundImage: "/images/classroom1.jpg",
  },
};
