import nodemailer from "nodemailer";

export function escapeHtml(value: string): string {
  return value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function buildTableEmail(title: string, intro: string, rows: [string, string][]): {
  html: string;
  text: string;
} {
  const html = `
    <div style="font-family:Arial,sans-serif;color:#1d2733;line-height:1.5">
      <h2 style="color:#0f2744;margin:0 0 12px">${escapeHtml(title)}</h2>
      <p style="margin:0 0 16px;color:#5c6b7a">${escapeHtml(intro)}</p>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 10px;border:1px solid #dde3ea;background:#eef2f5;font-weight:600;width:140px">${escapeHtml(label)}</td>
            <td style="padding:8px 10px;border:1px solid #dde3ea">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `;

  const text = [title, "", ...rows.map(([label, value]) => `${label}: ${value}`)].join("\n");
  return { html, text };
}

export async function sendSiteEmail(options: {
  to?: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}): Promise<"resend" | "smtp"> {
  const to =
    options.to || process.env.ADMISSION_TO_EMAIL || "admission@sbist.edu.in";

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const from = process.env.MAIL_FROM || "SBIST Website <onboarding@resend.dev>";
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: options.replyTo,
        subject: options.subject,
        html: options.html,
        text: options.text,
      }),
    });
    if (!res.ok) {
      throw new Error(`Resend failed: ${await res.text()}`);
    }
    return "resend";
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error(
      "Email is not configured. Set RESEND_API_KEY or SMTP_HOST/SMTP_USER/SMTP_PASS.",
    );
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE !== "false";
  const from = process.env.MAIL_FROM || user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
    text: options.text,
  });

  return "smtp";
}
