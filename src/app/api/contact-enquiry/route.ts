import { NextResponse } from "next/server";
import { buildTableEmail, sendSiteEmail } from "@/lib/mail";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function sanitize(value: unknown, max = 200): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function validate(body: Record<string, unknown>): ContactPayload | string {
  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 160).toLowerCase();
  const phone = sanitize(body.phone, 30);
  const subject = sanitize(body.subject, 120);
  const message = sanitize(body.message, 2000);

  if (!name) return "Name is required.";
  if (!email || !EMAIL_RE.test(email)) return "A valid email is required.";
  if (!subject) return "Subject is required.";
  if (!message) return "Message is required.";

  return { name, email, phone, subject, message };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const parsed = validate(body);
    if (typeof parsed === "string") {
      return NextResponse.json({ ok: false, error: parsed }, { status: 400 });
    }

    const { html, text } = buildTableEmail(
      "New SBIST Get in Touch Message",
      "Submitted via the website contact form.",
      [
        ["Name", parsed.name],
        ["Email", parsed.email],
        ["Phone", parsed.phone || "-"],
        ["Subject", parsed.subject],
        ["Message", parsed.message],
      ],
    );

    await sendSiteEmail({
      to: process.env.CONTACT_TO_EMAIL || "officesbist@gmail.com",
      subject: `Get in Touch - ${parsed.subject} - ${parsed.name}`,
      html,
      text,
      replyTo: parsed.email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact-enquiry]", error);
    const message =
      error instanceof Error && error.message.includes("Email is not configured")
        ? error.message
        : "Unable to send message right now. Please try again later.";
    const status = message.includes("Email is not configured") ? 503 : 500;
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}
