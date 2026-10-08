export type EnquiryFormValues = {
  studentName: string;
  email: string;
  phone: string;
  department: string;
  message: string;
};

export type FormErrors = Partial<Record<keyof EnquiryFormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Indian-friendly: optional +91, 10 digits, allows spaces/dashes */
const PHONE_RE = /^(\+91[\s-]?)?[6-9]\d{9}$|^(\+91[\s-]?)?\d{5}[\s-]?\d{5}$/;

export function normalizePhone(phone: string): string {
  return phone.replace(/[\s-]/g, "");
}

export function validateEnquiryForm(
  values: EnquiryFormValues,
  options?: { requirePhone?: boolean },
): FormErrors {
  const errors: FormErrors = {};
  const name = values.studentName.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const department = values.department.trim();
  const message = values.message.trim();

  if (!name) {
    errors.studentName = "Please enter the student name.";
  } else if (name.length < 2) {
    errors.studentName = "Name must be at least 2 characters.";
  }

  if (!email) {
    errors.email = "Please enter an email address.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (options?.requirePhone !== false) {
    if (!phone) {
      errors.phone = "Please enter a phone number.";
    } else if (!PHONE_RE.test(normalizePhone(phone)) && !PHONE_RE.test(phone)) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    }
  } else if (phone && !PHONE_RE.test(normalizePhone(phone)) && !PHONE_RE.test(phone)) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }

  if (!department) {
    errors.department = "Please select a department or course of interest.";
  }

  if (!message) {
    errors.message = "Please enter your enquiry message.";
  } else if (message.length < 10) {
    errors.message = "Please provide a little more detail (at least 10 characters).";
  }

  return errors;
}

export function buildMailtoUrl(
  to: string,
  subject: string,
  values: EnquiryFormValues,
): string {
  const body = [
    `Student Name: ${values.studentName.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Department / Course: ${values.department.trim()}`,
    "",
    "Enquiry:",
    values.message.trim(),
  ].join("\n");

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const COURSE_INTEREST_OPTIONS = [
  "B.Tech Computer Science",
  "B.Tech Information and Communication Technology",
  "B.Tech Electronics and Communication Engineering",
  "B.Tech Civil Engineering",
  "B.Tech Mechanical Engineering",
  "B.Tech Biomedical Engineering",
  "BBA",
  "BCA",
  "SBIOL Online Programmes",
  "General / Not sure yet",
] as const;
