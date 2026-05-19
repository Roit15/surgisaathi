import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "consultations.json");
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

async function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  try { await fs.access(dir); } catch { await fs.mkdir(dir, { recursive: true }); }
  try { await fs.access(DATA_FILE); } catch { await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2)); }
}

async function sendToGoogleSheet(consultation) {
  if (!GOOGLE_SCRIPT_URL) {
    console.log("⚠️  GOOGLE_SCRIPT_URL not configured — skipping Google Sheet + email");
    return;
  }

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: consultation.id,
        name: consultation.name,
        phone: consultation.phone,
        procedure: consultation.procedure,
        city: consultation.city,
        preferred: consultation.preferred,
        source: "consultation-form",
      }),
    });

    if (res.ok) {
      console.log(`📊 Sent to Google Sheet: ${consultation.id}`);
    } else {
      console.error(`❌ Google Sheet error: ${res.status}`);
    }
  } catch (err) {
    console.error("❌ Google Sheet send failed:", err.message);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, procedure, city, preferred } = body;

    // Validation
    if (!name || !phone || !procedure || !city) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid 10-digit Indian phone number" },
        { status: 400 }
      );
    }

    // Build consultation record
    const consultation = {
      id: `SS-${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      procedure,
      city,
      preferred: preferred || "call",
      status: "new",
      createdAt: new Date().toISOString(),
    };

    // Save locally (backup)
    await ensureDataFile();
    const data = JSON.parse(await fs.readFile(DATA_FILE, "utf-8"));
    data.push(consultation);
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));

    // Send to Google Sheet + Email (non-blocking)
    sendToGoogleSheet(consultation);

    console.log(`✅ New consultation: ${consultation.id} — ${name} (${phone}) for ${procedure} in ${city}`);

    return NextResponse.json({
      success: true,
      message: "Consultation booked successfully!",
      consultationId: consultation.id,
    });
  } catch (error) {
    console.error("❌ Consultation API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureDataFile();
    const data = JSON.parse(await fs.readFile(DATA_FILE, "utf-8"));
    return NextResponse.json({ total: data.length, consultations: data });
  } catch {
    return NextResponse.json({ total: 0, consultations: [] });
  }
}
