export const campusLifePageContent = {
  header: {
    title: "Campus Life",
    description:
      "Campus spaces, facilities and community moments that shape life at SBIST beyond the classroom.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Campus Life", href: "/campus-life" },
    ],
    backgroundImage: "/images/campus-sports.jpg",
  },
  intro: {
    eyebrow: "Beyond Academics",
    title: "Where Ambition Meets Belonging",
    quote: "Education is not the filling of a pail, but the lighting of a fire",
    image: "/images/workstation-quotes.JPG",
    imageAlt: "Modern workstation space at SBIST",
    paragraphs: [
      "At Sree Balaji Institute of Science and Technology, learning never ends at the classroom door. We believe every student carries a spark — of talent, curiosity and purpose — and campus life is where that spark becomes a flame.",
      "Through culture, sports, shared spaces and community moments, students discover new strengths, find friends who share their passions and grow into confident leaders.",
      "Explore our spaces, gather for celebrations and grow with a campus community that shapes not only skilled professionals, but well-rounded human beings ready to inspire the world around them.",
    ],
  },
  cta: {
    image: "/images/students-library.png",
  },
};

export type CampusFacility = {
  id: string;
  eyebrow: string;
  title: string;
  headline: string;
  paragraphs: string[];
  highlights: string[];
  images: { src: string; alt: string }[];
};

export const campusFacilitiesContent = {
  eyebrow: "Campus Spaces",
  title: "Where Ambition Finds Its Place",
  description:
    "Every corner of SBIST is designed to spark curiosity, deepen learning and bring people together.",
  facilities: [
    {
      id: "campus",
      eyebrow: "The Heart of Campus",
      title: "Main Academic Block",
      headline: "Where every journey begins",
      paragraphs: [
        "Step through the doors of our main academic block and feel the pulse of SBIST — lecture halls alive with ideas, faculty offices open to guidance and student services ready to support every dream.",
        "This is more than a building. It is the daily meeting place of ambition and opportunity, where futures are shaped one conversation, one class and one breakthrough at a time.",
      ],
      highlights: [
        "Lecture halls & faculty offices",
        "Student services at the centre",
        "The everyday home of SBIST life",
      ],
      images: [
        { src: "/images/main-building-side.JPG", alt: "SBIST main academic block exterior" },
        { src: "/images/main-building-front.JPG", alt: "Front entrance of the main academic block" },
      ],
    },
    {
      id: "library",
      eyebrow: "Knowledge Commons",
      title: "Central Library",
      headline: "Quiet minds. Boundless horizons.",
      paragraphs: [
        "In the stillness of our central library, students find more than books — they find focus, discovery and the freedom to think deeply.",
        "Rows of journals, digital resources and inviting study spaces create a sanctuary where curiosity thrives and excellence takes root.",
      ],
      highlights: [
        "Rich print & digital collections",
        "Focused study environments",
        "Resources that fuel research",
      ],
      images: [
        { src: "/images/Library_AI.png", alt: "Students studying in the central library" },
        { src: "/images/computer2.JPG", alt: "Focused study spaces at SBIST" },
      ],
    },
    {
      id: "lecture",
      eyebrow: "Learning Spaces",
      title: "Modern Lecture Halls",
      headline: "Classrooms built for tomorrow’s thinkers",
      paragraphs: [
        "Bright, technology-enabled halls turn every lecture into an experience — interactive screens, collaborative seating and spaces designed for questions that change how you see the world.",
        "Here, teaching meets technology so ideas move freely from board to breakthrough.",
      ],
      highlights: [
        "Smart boards & modern AV",
        "Spaces for active learning",
        "Designed for engagement",
      ],
      images: [
        { src: "/images/classroom2.png", alt: "Modern technology-enabled lecture hall" },
        { src: "/images/classroom1.png", alt: "Students learning in a contemporary classroom" },
      ],
    },
    {
      id: "lab",
      eyebrow: "Hands-On Discovery",
      title: "Engineering Laboratories",
      headline: "Theory comes alive in practice",
      paragraphs: [
        "Our laboratories are where curiosity becomes competence. Equipped for engineering, computing and applied sciences, they invite students to experiment, fail forward and invent with confidence.",
        "Industry-standard tools and guided exploration prepare graduates who don’t just understand concepts — they can build them.",
      ],
      highlights: [
        "Industry-ready equipment",
        "Guided experimental learning",
        "Engineering & computing labs",
      ],
      images: [
        { src: "/images/lab.JPG", alt: "Engineering laboratory workstations" },
        { src: "/images/computer-lab.JPG", alt: "Modern computer laboratory at SBIST" },
        { src: "/images/lab3.JPG", alt: "Students working in a hands-on lab environment" },
      ],
    },
    {
      id: "graduation",
      eyebrow: "Milestones & Moments",
      title: "Graduation & Convocation",
      headline: "Celebrating every hard-won success",
      paragraphs: [
        "In our auditorium, applause marks more than a ceremony — it honours years of dedication, late nights and bold dreams realized.",
        "From convocations to conferences, this hall gathers the SBIST family to celebrate the engineers and leaders stepping into the world.",
      ],
      highlights: [
        "Convocation ceremonies",
        "Conferences & gatherings",
        "A stage for shared pride",
      ],
      images: [
        { src: "/images/auditorium.JPG", alt: "SBIST auditorium ready for ceremonies" },
        { src: "/images/freshers-day.jpg", alt: "Campus community celebrating together" },
      ],
    },
    {
      id: "sports",
      eyebrow: "Energy Beyond Class",
      title: "Sports, Arts & Culture",
      headline: "Play hard. Create boldly. Belong fully.",
      paragraphs: [
        "On the grounds and in the spotlight, students discover strength, rhythm and friendship. Cricket, volleyball, dance, arts and cultural festivals keep campus life vibrant long after the last lecture.",
        "Because true education shapes the whole person — body, mind and spirit.",
      ],
      highlights: [
        "Outdoor sports & fitness",
        "Dance, arts & cultural events",
        "A campus that celebrates life",
      ],
      images: [
        { src: "/images/campus-sports.png", alt: "Students playing sports on campus grounds" },
        { src: "/images/community-programs.jpg", alt: "Students engaged in campus community life" },
      ],
    },
  ] satisfies CampusFacility[],
};

