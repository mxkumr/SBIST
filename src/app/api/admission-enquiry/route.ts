import { NextResponse } from "next/server";
import type { AdmissionEnquiryPayload } from "@/lib/admission-content";
import { buildTableEmail, sendSiteEmail } from "@/lib/mail";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{7,18}$/;

function sanitize(value: unknown, max = 200): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function validate(body: Record<string, unknown>): AdmissionEnquiryPayload | string {
  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 160).toLowerCase();
  const phone = sanitize(body.phone, 30);
  const course = sanitize(body.course, 120);
  const address = sanitize(body.address, 240);
  const state = sanitize(body.state, 80);
  const city = sanitize(body.city, 80);

  if (!name) return "Name is required.";
  if (!email || !EMAIL_RE.test(email)) return "A valid email is required.";
  if (!phone || !PHONE_RE.test(phone)) return "A valid phone number is required.";
  if (!course) return "Course selection is required.";
  if (!address) return "Address is required.";
  if (!state) return "State is required.";
  if (!city) return "City is required.";

  return { name, email, phone, course, address, state, city };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const parsed = validate(body);
    if (typeof parsed === "string") {
      return NextResponse.json({ ok: false, error: parsed }, { status: 400 });
    }

    const { html, text } = buildTableEmail(
      "New SBIST Admission Enquiry",
      "Submitted via the website admission form.",
      [
        ["Name", parsed.name],
        ["Email", parsed.email],
        ["Phone", parsed.phone],
        ["Course", parsed.course],
        ["Address", parsed.address],
        ["State", parsed.state],
        ["City", parsed.city],
      ],
    );

    await sendSiteEmail({
      to: process.env.ADMISSION_TO_EMAIL || "admission@sbist.edu.in",
      subject: `Admission Enquiry - ${parsed.name} - ${parsed.course}`,
      html,
      text,
      replyTo: parsed.email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admission-enquiry]", error);
    const message =
      error instanceof Error && error.message.includes("Email is not configured")
        ? error.message
        : "Unable to send enquiry right now. Please try again later.";
    const status = message.includes("Email is not configured") ? 503 : 500;
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}
