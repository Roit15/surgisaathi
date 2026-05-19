import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json");
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

async function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  try { await fs.access(dir); } catch { await fs.mkdir(dir, { recursive: true }); }
  try { await fs.access(DATA_FILE); } catch { await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2)); }
}

async function sendToGoogleSheet(contact) {
  if (!GOOGLE_SCRIPT_URL) {
    console.log("⚠️  GOOGLE_SCRIPT_URL not configured — skipping Google Sheet + email");
    return;
  }

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: contact.id,
        name: contact.name,
        phone: contact.phone,
        procedure: `Contact: ${contact.message.substring(0, 50)}`,
        city: "—",
        preferred: contact.email || "—",
        source: "contact-form",
      }),
    });

    if (res.ok) {
      console.log(`📊 Contact sent to Google Sheet: ${contact.id}`);
    }
  } catch (err) {
    console.error("❌ Google Sheet send failed:", err.message);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Name, phone, and message are required" },
        { status: 400 }
      );
    }

    // Build contact record
    const contact = {
      id: `CT-${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() || "",
      message: message.trim(),
      status: "unread",
      createdAt: new Date().toISOString(),
    };

    // Save locally (backup)
    await ensureDataFile();
    const data = JSON.parse(await fs.readFile(DATA_FILE, "utf-8"));
    data.push(contact);
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));

    // Send to Google Sheet + Email (non-blocking)
    sendToGoogleSheet(contact);

    console.log(`✅ New contact message: ${contact.id} — ${name} (${phone})`);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We'll respond within 4 hours.",
    });
  } catch (error) {
    console.error("❌ Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
