/**
 * Faculty, staff and dean content structure.
 * Do not invent names, qualifications or contact details.
 * Replace PENDING_* placeholders when the college provides official data.
 */

export type FacultyMember = {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string;
  email: string;
  photo: string;
};

export type StaffMember = {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  photo: string;
};

export const deanMessageContent = {
  eyebrow: "Dean’s Message",
  title: "A Message from the Dean",
  /**
   * PENDING_DEAN — Official dean name, designation, photo and message
   * are required from the college before this section goes live with real content.
   */
  name: "PENDING_DEAN_NAME",
  designation: "PENDING_DEAN_DESIGNATION",
  photo: "/images/SREE_Balaji_logo.svg",
  photoAlt: "Placeholder for Dean portrait — official photo pending",
  paragraphs: [
    "PENDING_DEAN_MESSAGE — Official message from the Dean will be published here once provided by the college.",
  ],
};

export const facultyMembers: FacultyMember[] = [
  {
    id: "placeholder-faculty-1",
    name: "PENDING_FACULTY_NAME",
    designation: "PENDING_DESIGNATION",
    department: "PENDING_DEPARTMENT",
    qualification: "PENDING_QUALIFICATION",
    experience: "PENDING_EXPERIENCE",
    specialization: "PENDING_SPECIALIZATION",
    email: "",
    photo: "/images/SREE_Balaji_logo.svg",
  },
];

export const staffMembers: StaffMember[] = [
  {
    id: "placeholder-staff-1",
    name: "PENDING_STAFF_NAME",
    designation: "PENDING_DESIGNATION",
    department: "PENDING_DEPARTMENT",
    email: "",
    photo: "/images/SREE_Balaji_logo.svg",
  },
];

export const facultyPageContent = {
  header: {
    title: "Faculty & Staff",
    description:
      "Meet the academic and administrative teams who guide teaching, mentoring and student support at SBIST. Detailed profiles will be published as official information is confirmed.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About SBIST", href: "/about" },
      { label: "Faculty & Staff", href: "/about/faculty" },
    ],
    backgroundImage: "/images/Classroom.JPG",
  },
  intro: {
    eyebrow: "Our People",
    title: "Faculty and Staff Directory",
    description:
      "This directory is structured for official faculty and staff profiles. Names, qualifications and contact details will appear here once provided by the institute — we do not publish unverified personal information.",
  },
  departmentsNote:
    "Department information is linked from Academics. Course-specific academic pages list department facilities where available.",
};

/** Remove fabricated demo faculty from public surfaces */
export const hasRealFacultyData = facultyMembers.every(
  (m) => !m.name.startsWith("PENDING_"),
);
