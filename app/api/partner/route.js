import { NextResponse } from "next/server";
import { validatePartner } from "@/lib/validation";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { isAllowedOrigin } from "@/lib/origin";
import { forwardToSheet } from "@/lib/google-sheet";

export const runtime = "nodejs";

export async function POST(request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { success: false, message: "Origin not allowed" },
      { status: 403 }
    );
  }

  const ip = clientIp(request);
  const limit = rateLimit(`partner:${ip}`, { max: 5, windowMs: 60_000 });
  if (!limit.ok) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = validatePartner(body);
  if (!parsed.ok) {
    return NextResponse.json(
      { success: false, message: parsed.message },
      { status: 400 }
    );
  }

  const id = `PT-${Date.now()}`;
  const stored = await forwardToSheet({
    id,
    source: "partner-form",
    fields: {
      ...parsed.value,
      procedure: `Partner (${parsed.value.type}): ${parsed.value.specialization}`,
      preferred: "—",
    },
  });

  if (!stored) {
    console.error(`Partner relay failed for ${id}`);
    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't submit your application right now. Please email partners@surgisaathi.com or call +91 70114 73737.",
      },
      { status: 502 }
    );
  }

  console.log(`New partner application: ${id}`);

  return NextResponse.json({
    success: true,
    message: "Application submitted! Our partnerships team will reach out within 2 business days.",
    applicationId: id,
  });
}
