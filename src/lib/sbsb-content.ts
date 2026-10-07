export type StudentClubIcon =
  | "sports"
  | "dance"
  | "music"
  | "literature"
  | "gaming"
  | "creative"
  | "festival"
  | "women"
  | "movies"
  | "fashion"
  | "defense"
  | "social"
  | "finearts"
  | "photography"
  | "coding"
  | "robotics"
  | "ai"
  | "entrepreneurship"
  | "research"
  | "debate"
  | "media";

export type StudentClub = {
  id: string;
  name: string;
  description: string;
  icon: StudentClubIcon;
};

export const sbsbPageContent = {
  header: {
    title: "SBSB",
    description:
      "Sree Balaji Students Board — Empowering Students. Building Leaders.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "SBSB", href: "/sbsb" },
    ],
    backgroundImage: "/images/cultural-fest.jpg",
  },
  charterHref: "/docs/SBSB%20ECO%20System.pdf",
  eyebrow: "Sree Balaji Students Board",
  brand: "SBSB",
  tagline: "Empowering Students. Building Leaders.",
  title: "Official Charter & Framework",
  description:
    "The Sree Balaji Students Board (SBSB) functions as a premier student-led organization dedicated to promoting leadership, innovation, creativity, and student welfare. Serving as a crucial bridge between the student body and the institution, SBSB aims to empower students beyond traditional academic boundaries by providing diverse opportunities to develop core leadership skills, explore emerging talents, and actively contribute to the enrichment of campus life.",
  vision: {
    title: "Vision",
    text: "To create a vibrant, inclusive, and dynamic student community that nurtures leadership, excellence, and holistic development.",
  },
  mission: {
    title: "Mission",
    items: [
      "Promote student leadership and responsibility.",
      "Encourage cultural, technical, and sports activities.",
      "Strengthen student engagement and campus life.",
      "Provide guidance and support to students.",
      "Foster innovation, teamwork, and social responsibility.",
      "Build future leaders with strong values and ethics.",
    ],
  },
  pillars: {
    eyebrow: "Core Areas",
    title: "Nine core areas of SBSB",
    description: "The official SBSB framework spans engagement, welfare, leadership, culture, innovation, sports, entrepreneurship, outreach, and career development.",
    items: [
      { title: "Student Engagement", detail: "Active participation across campus initiatives" },
      { title: "Cultural Activities", detail: "Arts, performance and creative expression" },
      { title: "Entrepreneurship", detail: "Ideas, ventures and startup mindset" },
      { title: "Student Welfare & Support", detail: "Guidance, care and peer support" },
      { title: "Technical & Innovation", detail: "Coding, robotics, AI and research" },
      { title: "Community Outreach", detail: "Service that strengthens society" },
      { title: "Leadership Development", detail: "Roles that build future leaders" },
      { title: "Sports and Fitness", detail: "Team spirit, health and competition" },
      { title: "Career & Skill Dev.", detail: "Skills for professional growth" },
    ],
  },
  leadership: {
    eyebrow: "Governance",
    title: "Leadership Team",
    description: "Student officers and committees that guide welfare, culture, sports and discipline.",
    roles: [
      "President",
      "General Secretary",
      "Cultural Secretary",
      "Sports Secretary",
      "Media & Communications Secretary",
      "Club Coordinators",
    ],
    committees: ["Student Welfare Committee", "Discipline Committee"],
  },
  clubGroups: {
    eyebrow: "Clubs & Forums",
    title: "SBSB Clubs & Forums",
    description: "Cultural, technical and student-life clubs that power campus energy.",
    items: [
      {
        title: "Cultural Clubs",
        items: ["Dance Club", "Music Club", "Drama Club", "Fine Arts Club", "Photography Club"],
      },
      {
        title: "Technical Clubs",
        items: [
          "Coding Club",
          "Robotics Club",
          "AI & Innovation Club",
          "Entrepreneurship Cell",
          "Research Forum",
        ],
      },
      {
        title: "Student Life",
        items: ["Sports Club", "Literary Club", "Debate Society", "Social Service Club", "Media Club"],
      },
    ],
  },
  events: {
    eyebrow: "Signature Events",
    title: "Official Signature Events",
    description: "Flagship gatherings that define campus energy through the year.",
    items: [
      {
        title: "SBSB Fest",
        detail: "The flagship student festival celebrating talent, culture and community.",
        image: "/images/cultural-fest.jpg",
      },
      {
        title: "Sports Meet",
        detail: "Campus-wide athletics, team spirit and competitive excellence.",
        image: "/images/campus-sports.png",
      },
      {
        title: "Freshers’ Day",
        detail: "A warm welcome that helps new students find belonging from day one.",
        image: "/images/freshers-day.jpg",
      },
      {
        title: "Annual Cultural Festival",
        detail: "Music, dance, drama and fine arts on one vibrant stage.",
        image: "/images/annual-cultural-fest.jpg",
      },
      {
        title: "Entrepreneurship Summit",
        detail: "Ideas, mentors and ventures from the Entrepreneurship Cell.",
        image: "/images/entrepreneur-summit.jpg",
      },
      {
        title: "Community Programs",
        detail: "Outreach and service initiatives that give back beyond campus.",
        image: "/images/community-programs.jpg",
      },
    ],
  },
  image: "/images/freshers-day.jpg",
  imageAlt: "SBIST students celebrating Freshers’ Day",
  clubs: {
    eyebrow: "Student Clubs",
    title: "Explore Our Clubs",
    subtitle:
      "From fashion and music to coding, robotics, sports and service — find your community under the SBSB ecosystem at SBIST.",
    items: [
          {
            id: "sports",
            name: "Sports",
            description: "Team spirit, fitness and competitive play across indoor and outdoor games.",
            icon: "sports",
          },
          {
            id: "dance",
            name: "Dance Club",
            description: "Classical, contemporary and group dance for stage and celebration.",
            icon: "dance",
          },
          {
            id: "music",
            name: "Music",
            description: "Bands, vocal ensembles and performances that bring rhythm to campus.",
            icon: "music",
          },
          {
            id: "literature",
            name: "Literature Club",
            description: "Reading circles, writing workshops and conversations around ideas that matter.",
            icon: "literature",
          },
          {
            id: "gaming",
            name: "Gaming",
            description: "Esports, strategy sessions and friendly competition for gamers.",
            icon: "gaming",
          },
          {
            id: "creative-arts-media",
            name: "Creative Arts & Media",
            description: "Visual arts, design, photography and campus media projects.",
            icon: "creative",
          },
          {
            id: "festival",
            name: "Festival",
            description: "Planning and celebrating cultural festivals that unite the SBIST community.",
            icon: "festival",
          },
          {
            id: "women-empowerment",
            name: "Women Empowerment",
            description: "Leadership, awareness and initiatives that uplift and support women on campus.",
            icon: "women",
          },
          {
            id: "movies-dramatics",
            name: "Movies and Dramatics",
            description: "Theatre, short films and storytelling that bring characters to life.",
            icon: "movies",
          },
          {
            id: "fashion",
            name: "Fashion",
            description: "Style, design showcases and creative expression on the runway and beyond.",
            icon: "fashion",
          },
          {
            id: "self-defense",
            name: "Self Defense Club",
            description: "Practical training and confidence-building for personal safety.",
            icon: "defense",
          },
          {
            id: "social",
            name: "Social Club",
            description: "Community service, outreach and initiatives that give back.",
            icon: "social",
          },
          {
            id: "fine-arts",
            name: "Fine Arts Club",
            description: "Painting, sketching and visual expression for creative minds on campus.",
            icon: "finearts",
          },
          {
            id: "photography",
            name: "Photography Club",
            description: "Campus stories through the lens — events, portraits and creative shoots.",
            icon: "photography",
          },
          {
            id: "coding",
            name: "Coding Club",
            description: "Programming challenges, hackathons and peer learning for builders.",
            icon: "coding",
          },
          {
            id: "robotics",
            name: "Robotics Club",
            description: "Design, build and compete with robots that turn ideas into motion.",
            icon: "robotics",
          },
          {
            id: "ai-innovation",
            name: "AI & Innovation Club",
            description: "Explore emerging tech, machine learning projects and innovation sprints.",
            icon: "ai",
          },
          {
            id: "entrepreneurship",
            name: "Entrepreneurship Cell",
            description: "Startup mindset, mentorship and ventures that turn campus ideas into action.",
            icon: "entrepreneurship",
          },
          {
            id: "research-forum",
            name: "Research Forum",
            description: "Inquiry, papers and collaborative research beyond the classroom.",
            icon: "research",
          },
          {
            id: "debate",
            name: "Debate Society",
            description: "Argument, analysis and public speaking that sharpen critical thinking.",
            icon: "debate",
          },
          {
            id: "media",
            name: "Media Club",
            description: "Campus journalism, digital content and storytelling for the SBIST community.",
            icon: "media",
          },
        ] satisfies StudentClub[],
  },
  cta: {
    title: "Join the SBSB community",
    description: "Explore student clubs, get involved in signature events, or download the official SBSB charter.",
    primaryLabel: "Explore Student Clubs",
    primaryHref: "/sbsb#clubs",
    secondaryLabel: "Download Charter PDF",
    secondaryHref: "/docs/SBSB%20ECO%20System.pdf",
    image: "/images/annual-cultural-fest.jpg",
  },
};
