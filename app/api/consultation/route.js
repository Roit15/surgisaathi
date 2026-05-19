import { NextResponse } from "next/server";
import { validateConsultation } from "@/lib/validation";
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
  const limit = rateLimit(`consultation:${ip}`, { max: 5, windowMs: 60_000 });
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

  const parsed = validateConsultation(body);
  if (!parsed.ok) {
    return NextResponse.json(
      { success: false, message: parsed.message },
      { status: 400 }
    );
  }

  const id = `SS-${Date.now()}`;
  const stored = await forwardToSheet({
    id,
    source: "consultation-form",
    fields: parsed.value,
  });

  if (!stored) {
    console.error(`Consultation relay failed for ${id}`);
    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't save your booking right now. Please call us at +91 70114 73737.",
      },
      { status: 502 }
    );
  }

  console.log(`New consultation: ${id}`);

  return NextResponse.json({
    success: true,
    message: "Consultation booked successfully!",
    consultationId: id,
  });
}
