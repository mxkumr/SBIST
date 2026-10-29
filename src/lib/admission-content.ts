import { departments } from "@/lib/home-content";

export const admissionEnquiryContent = {
  title: "Admission Form",
  subtitle: "Admissions Open 2026-27",
  description:
    "Share your details and our admissions team will get back to you shortly.",
  promo: {
    eyebrow: "SBIST",
    headline: "Begin Your Engineering Journey",
    points: [
      "AICTE-approved programmes",
      "BIHER-affiliated B.Tech courses",
      "Modern labs & campus facilities",
      "Chromepet, Chennai campus",
    ],
  },
  submitLabel: "Submit Admission Enquiry",
  successMessage:
    "Thank you for your admission enquiry. Our team will contact you shortly.",
  courses: departments.map((d) => d.degree),
  states: [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Other",
  ],
};

export type AdmissionEnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  course: string;
  address: string;
  state: string;
  city: string;
};
