import type { NavIconName } from "@/lib/navigation";
import { contactContent, stockImages } from "@/lib/home-content";
import { siteConfig } from "@/lib/navigation";

export const contactPageContent = {
  header: {
    title: "Contact SBIST",
    description:
      "Reach our admissions and administration teams for enquiries about programs, campus visits and student services at our Chrompet campus in Chennai.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Contact", href: "/contact" },
    ],
    backgroundImage: "/images/main-academic-block.png",
  },
  sidebar: {
    title: "Get in Touch",
    links: [
      { label: "Contact Us", href: "/contact", icon: "about" as NavIconName },
      { label: "Academics", href: "/academics", icon: "programs" as NavIconName },
      { label: "About SBIST", href: "/about", icon: "mission" as NavIconName },
      { label: "Careers", href: "/careers", icon: "faculty" as NavIconName },
    ],
    image: stockImages.students,
  },
  intro: {
    eyebrow: "Contact Information",
    title: "We Are Here to Help You",
    description:
      "Whether you are a prospective student, parent or partner institution, our team at Sree Balaji Institute of Science and Technology is ready to assist with your enquiries.",
  },
  details: [
    {
      label: "Location",
      value: contactContent.address,
      href: "https://maps.google.com/?q=No.+7+Works+Road,+Chrompet,+Chennai+600044",
      icon: "map" as NavIconName,
    },
    {
      label: "Email",
      value: contactContent.email,
      href: `mailto:${contactContent.email}`,
      icon: "apply" as NavIconName,
    },
  ],
  officeHours: {
    title: "Office Hours",
    items: [
      { day: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
      { day: "Saturday", time: "9:00 AM – 1:00 PM" },
      { day: "Sunday & Public Holidays", time: "Closed" },
    ],
  },
  form: {
    eyebrow: "Send a Message",
    title: "Write to Us",
    description:
      "Fill out the form below and our team will respond to your enquiry as soon as possible during office hours.",
    subjects: [
      "General Enquiry",
      "Admissions",
      "Academic Programs",
      "Campus Visit",
      "Other",
    ],
    submitLabel: "Send Message",
    successMessage:
      "Thank you for contacting SBIST. We have received your message and will get back to you shortly.",
  },
  map: {
    title: "Find Us on the Map",
    description:
      "SBIST is located on Works Road in Chrompet, Chennai — easily accessible by road and public transport from across the city.",
    embedUrl:
      "https://maps.google.com/maps?q=No.+7+Works+Road,+Chrompet,+Chennai+600044&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directionsHref:
      "https://maps.google.com/?q=No.+7+Works+Road,+Chrompet,+Chennai+600044",
  },
  departments: {
    eyebrow: "Department Contacts",
    title: "Who Should You Contact?",
    items: [
      {
        title: "Admissions Office",
        description: "Applications, eligibility and enrollment support.",
        href: "/contact",
        icon: "apply" as NavIconName,
      },
      {
        title: "Academic Affairs",
        description: "Programs, departments and curriculum enquiries.",
        href: "/academics",
        icon: "programs" as NavIconName,
      },
      {
        title: "Careers",
        description: "Faculty recruitment and employment enquiries.",
        href: "/careers",
        icon: "faculty" as NavIconName,
      },
    ],
  },
  social: {
    eyebrow: "Connect With Us",
    title: "Follow SBIST on Social Media",
    description:
      "Stay close to campus life — events, announcements and community moments across our official channels.",
  },
  cta: {
    image: stockImages.students,
  },
};

/** Keep site-wide contact details in sync */
export const sbistContact = {
  address: contactContent.address,
  email: contactContent.email,
  instituteName: siteConfig.name,
};
