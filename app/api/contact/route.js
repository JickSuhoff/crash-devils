import { Resend } from "resend";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 3;

const ipMap = new Map();

function getRateLimit(ip) {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000 / 60);
    return { allowed: false, retryAfter };
  }

  entry.count += 1;
  return { allowed: true };
}

export async function POST(request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const { allowed, retryAfter } = getRateLimit(ip);

  if (!allowed) {
    return Response.json(
      { error: `Too many requests. Please try again in ${retryAfter} minute(s).` },
      { status: 429 }
    );
  }

  const { email, subject, message } = await request.json();

  if (!email) {
    return Response.json({ error: "Email is required." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Crash Devils <noreply@crashdevils.com>",
      to: "info@crashdevils.com",
      replyTo: email,
      subject: subject || "New contact form submission",
      html: `
        <p><strong>From:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        ${message ? `<p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>` : ""}
      `,
    });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }

  return Response.json({ success: true });
}
