import type { NavIconName } from "@/lib/navigation";

export const sbiolPageContent = {
  header: {
    title: "SBIOL",
    description: "Sree Balaji Institute of Online Learning — UGC-recognized degrees, fully online.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "SBIOL", href: "/sbiol" },
    ],
    backgroundImage: "/images/workstation-quotes.JPG",
  },
  motto: "Aim · Aspire · Inspire",
  brochureHref: "/docs/SBIOL%20BROUCHER.pdf",
  intro: {
    eyebrow: "Online Education",
    title: "Earn a UGC-recognized degree without pausing your career",
    lead: "SBIOL delivers BIHER online programmes through SBIST Chromepet — flexible LMS access, AI-proctored exams and career-focused business degrees.",
    stats: [
      { value: "40+", label: "Years of BIHER trust" },
      { value: "100K+", label: "Alumni network" },
      { value: "24/7", label: "LMS access" },
      { value: "UGC", label: "Approved online model" },
    ],
  },
  benefits: [
    {
      title: "Study anywhere",
      description: "Lectures, e-books and cases on laptop, tablet or phone.",
    },
    {
      title: "Exam from home",
      description: "Secure AI-proctored semester exams — no centre travel.",
    },
    {
      title: "Career-ready",
      description: "Industry electives, case work and mentor-supported forums.",
    },
  ],
  courses: {
    eyebrow: "Online Programs",
    title: "Two pathways. Three degrees.",
    description:
      "Postgraduate MBA (2 years) and undergraduate B.Com or BBA (3 years) — all fully online.",
    items: [
      {
        id: "mba",
        category: "Postgraduate",
        duration: "2 Years",
        title: "Master of Business Administration",
        shortTitle: "Online MBA",
        focus: "Strategic leadership for working professionals",
        summary:
          "Our flagship two-year online MBA builds visionary managers through rigorous management foundations and specialised electives.",
        specializationsLabel: "MBA Specializations",
        specializations: [
          {
            name: "Hospital Administration",
            detail: "Healthcare operations, quality systems, logistics and hospital resource planning.",
          },
          {
            name: "Banking & Finance",
            detail: "Commercial banking, treasury, portfolio management and credit risk.",
          },
          {
            name: "Marketing",
            detail: "Consumer behaviour, digital growth marketing and brand strategy.",
          },
        ],
        eligibility:
          "Bachelor’s degree (minimum 3 years) from a UGC-recognized university with at least 50% aggregate marks.",
        image: "/images/students-library.png",
      },
      {
        id: "bcom",
        category: "Undergraduate",
        duration: "3 Years",
        title: "Bachelor of Commerce",
        shortTitle: "Online B.Com",
        focus: "Accounting & Information Systems",
        summary:
          "A three-year online B.Com that blends financial accounting, taxation and auditing with ERP, databases and modern accounting software.",
        specializationsLabel: "What you will learn",
        specializations: [
          {
            name: "Financial accounting & taxation",
            detail: "Core accounting, corporate taxation and auditing practice.",
          },
          {
            name: "Information systems",
            detail: "Corporate databases, ERP platforms and accounting software.",
          },
          {
            name: "Corporate readiness",
            detail: "Skills that bridge higher secondary education to day-one workplace roles.",
          },
        ],
        eligibility: "Successful completion of 10+2 (Higher Secondary) or equivalent from an approved board.",
        image: "/images/computer-lab.JPG",
      },
      {
        id: "bba",
        category: "Undergraduate",
        duration: "3 Years",
        title: "Bachelor of Business Administration",
        shortTitle: "Online BBA",
        focus: "Finance & Accounts",
        summary:
          "A three-year online BBA preparing future financial analysts and corporate managers with investment, budgeting and quantitative business skills.",
        specializationsLabel: "What you will learn",
        specializations: [
          {
            name: "Finance & investment",
            detail: "Strategic investment management and capital optimisation.",
          },
          {
            name: "Managerial accounts",
            detail: "Budgeting, financial decision-making and performance tracking.",
          },
          {
            name: "Business communication",
            detail: "Corporate communication and quantitative business techniques.",
          },
        ],
        eligibility: "Successful completion of 10+2 (Higher Secondary) or equivalent from an approved board.",
        image: "/images/Gallery/wrokstation.JPG",
      },
    ],
  },
  learning: {
    eyebrow: "How You Learn",
    title: "UGC 4-Quadrant model",
    description: "Explore each learning quadrant — click a tile or step through the model.",
    items: [
      {
        number: "01",
        title: "E-Tutorial",
        short: "Video & live",
        detail: "HD video capsules + live webinars",
        description:
          "Structured lecture capsules in HD, paired with scheduled live webinars so you can learn asynchronously and still join faculty in real time.",
        tip: "Watch capsules on your schedule, then join live sessions for Q&A and clarification.",
      },
      {
        number: "02",
        title: "E-Content",
        short: "Modules",
        detail: "Modules, e-books & industry cases",
        description:
          "Self-paced digital modules, e-books and real industry cases that deepen concepts beyond the video lectures.",
        tip: "Download reading packs early each semester so you can study offline when needed.",
      },
      {
        number: "03",
        title: "Discussion",
        short: "Forums",
        detail: "Mentor-monitored peer forums",
        description:
          "Peer discussion forums monitored by mentors — share insights, debate cases and stay connected with your cohort.",
        tip: "Post thoughtfully and reply often — engagement strengthens understanding and networking.",
      },
      {
        number: "04",
        title: "Assessment",
        short: "Feedback",
        detail: "Quizzes, cases & instant feedback",
        description:
          "Continuous assessment through quizzes, case submissions and prompt feedback so you know where you stand before end-semester exams.",
        tip: "Treat formative quizzes as practice runs — they prepare you for AI-proctored finals.",
      },
    ],
  },
  enrollment: {
    eyebrow: "Enrollment Guide",
    title: "How admissions work",
    description: "Slide through each step — from registration to LMS activation.",
    steps: [
      {
        number: "01",
        title: "Online Registration",
        description:
          "Create your secure candidate profile on the official BIHER online application portal.",
        tip: "Use a personal email you check regularly — LMS credentials arrive there.",
      },
      {
        number: "02",
        title: "Document Upload",
        description:
          "Upload academic certificates, mark sheets, ID proof and photographs as scanned copies.",
        tip: "Keep clear PDF or JPG scans ready before you start the form.",
      },
      {
        number: "03",
        title: "Verification & Fee",
        description:
          "The admissions committee reviews your file digitally. After approval, complete secure online fee payment.",
        tip: "MBA: bachelor’s with ≥ 50%. B.Com / BBA: 10+2 or equivalent.",
      },
      {
        number: "04",
        title: "LMS Activation",
        description:
          "Receive your enrollment ID, university email and login credentials to start learning on the live platform.",
        tip: "Bookmark the LMS — lectures and resources are available 24/7.",
      },
    ],
  },
  legacy: {
    eyebrow: "Legacy & Credibility",
    title: "BIHER since 1984",
    subtitle: "40+ years of academic trust",
    description:
      "Bharath Institute of Higher Education and Research is a Deemed-to-be University under Section 3 of the UGC Act, 1956. SBIOL online programmes are delivered with SBIST Chromepet as the admissions and academic centre.",
    tagline: "Built for ambitious learners. Backed by legacy.",
    image: "/images/main-building-side.JPG",
    pillars: [
      {
        title: "Global Validity",
        description: "Recognised academic credibility with value for learners in India and beyond.",
      },
      {
        title: "Corporate Edge",
        description: "Career-focused learning, industry exposure and professional growth orientation.",
      },
      {
        title: "UGC Online Framework",
        description: "Approved online programmes structured around the UGC 4-Quadrant academic model.",
      },
    ],
    credentials: [
      "Deemed-to-be University (UGC Act, 1956)",
      "UGC recognition for approved online programmes",
      "Constituent institution accredited with ‘A’ Grade",
      "Admissions centre: SBIST, Chromepet, Chennai",
    ],
  },
  faculty: {
    eyebrow: "Academic Faculty",
    title: "Learn from mentors who lead in academia and industry",
    description:
      "BIHER brings premium teaching quality to your screen — senior academicians, research scholars and executive practitioners guiding every online cohort.",
    synergy: {
      title: "Strategic academic synergy with IIT Madras",
      description:
        "Curriculum insights integrate quantitative research and analytical frameworks into management education — a structured approach for modern business learning.",
    },
    mentors: [
      {
        title: "Distinguished faculty",
        description:
          "Senior academicians, PhD holders and research scholars in corporate strategy, accounting and consumer psychology.",
      },
      {
        title: "Industry experts",
        description:
          "Executive guest lecturers, management consultants and founders sharing real-world business challenges.",
      },
      {
        title: "Mentor-led forums",
        description:
          "Discussion boards and project rooms monitored by academic mentors so you never learn in isolation.",
      },
    ],
    image: "/images/computer.jpg",
  },
  contact: {
    institute: "Sree Balaji Institute of Science and Technology",
    address: "No. 7 Works Road, Chromepet, Chennai - 600044",
    website: "www.biher.online",
    websiteHref: "https://www.biher.online",
    email: "admissions@biheronline.edu.in",
    emailHref: "mailto:admissions@biheronline.edu.in",
  },
  sidebar: {
    title: "Quick Access",
    subtitle: "On this page",
    image: "/images/workstation-quotes.JPG",
    links: [
      { label: "Why Online", href: "/sbiol#benefits", icon: "campus" as NavIconName },
      { label: "BIHER Legacy", href: "/sbiol#legacy", icon: "history" as NavIconName },
      { label: "Online Programs", href: "/sbiol#courses", icon: "programs" as NavIconName },
      { label: "Learning Model", href: "/sbiol#learning", icon: "library" as NavIconName },
      { label: "Academic Faculty", href: "/sbiol#faculty", icon: "faculty" as NavIconName },
      { label: "Enrollment", href: "/sbiol#enrollment", icon: "apply" as NavIconName },
    ],
  },
  cta: {
    title: "Start your online degree journey",
    description: "Apply on the BIHER portal or download the SBIOL brochure for programme details.",
    primaryLabel: "Apply on BIHER Online",
    primaryHref: "https://www.biher.online",
    secondaryLabel: "Download Brochure",
    secondaryHref: "/docs/SBIOL%20BROUCHER.pdf",
    image: "/images/students-library.png",
  },
};
