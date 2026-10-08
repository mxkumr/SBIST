import { NextResponse } from "next/server";
import {
  buildMailtoUrl,
  validateEnquiryForm,
  type EnquiryFormValues,
} from "@/lib/form-utils";
import { siteConfig } from "@/lib/navigation";

/**
 * Enquiry integration point.
 *
 * Currently validates the payload and returns a mailto URL so the frontend
 * can hand off to the user's email client. Wire a mail provider (SMTP / API)
 * here later — do not put private API keys in client code.
 */
export async function POST(request: Request) {
  let body: Partial<EnquiryFormValues> & { variant?: string; subject?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const values: EnquiryFormValues = {
    studentName: String(body.studentName ?? ""),
    email: String(body.email ?? ""),
    phone: String(body.phone ?? ""),
    department: String(body.department ?? ""),
    message: String(body.message ?? ""),
  };

  const errors = validateEnquiryForm(values, { requirePhone: true });
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const subject =
    body.subject ||
    (body.variant === "admission"
      ? `Admission Enquiry — ${values.department}`
      : `Student Enquiry — ${values.department}`);

  const mailtoUrl = buildMailtoUrl(siteConfig.email, subject, values);

  // 202 Accepted: validated and ready for delivery once a mail provider is configured
  return NextResponse.json(
    {
      ok: true,
      delivery: "mailto",
      message:
        "Enquiry validated. Email service is not fully configured on the server; use mailto delivery.",
      mailtoUrl,
    },
    { status: 202 },
  );
}
