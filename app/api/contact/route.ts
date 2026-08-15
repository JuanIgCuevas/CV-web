import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
  turnstileToken?: unknown;
  startedAt?: unknown;
};

type RateEntry = { count: number; resetAt: number };

const rateLimit = new Map<string, RateEntry>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 3;

function getClientIp(request: NextRequest) {
  return request.headers.get("cf-connecting-ip")
    ?? request.headers.get("x-real-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimit.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > MAX_REQUESTS;
}

async function validateTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token || token.length > 2048) return false;

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, response: token, remoteip: ip }),
    signal: AbortSignal.timeout(8_000),
  });
  if (!response.ok) return false;

  const result = await response.json() as { success?: boolean };
  return result.success === true;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  let body: ContactPayload;
  try {
    body = await request.json() as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";
  const turnstileToken = typeof body.turnstileToken === "string" ? body.turnstileToken : "";
  const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0;

  // Bots commonly fill hidden fields. Return success without sending so the trap is not disclosed.
  if (website) return NextResponse.json({ ok: true });

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const submittedTooFast = !startedAt || Date.now() - startedAt < 2_500;
  if (name.length < 2 || name.length > 80 || !validEmail || email.length > 160 || message.length < 20 || message.length > 3_000 || submittedTooFast) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    if (!await validateTurnstile(turnstileToken, ip)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Contact form environment variables are not configured.");
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `Portfolio contact - ${name.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!resendResponse.ok) {
    console.error("Resend rejected the contact email.", await resendResponse.text());
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
