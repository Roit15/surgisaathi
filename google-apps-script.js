/**
 * ============================================================
 * SURGISAATHI — Google Apps Script for Lead Management
 * ============================================================
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Go to https://sheets.google.com and create a new Google Sheet
 *    - Name it: "SURGISAATHI Leads"
 *    - In Row 1, add these headers:
 *      A1: Timestamp | B1: Booking ID | C1: Name | D1: Phone
 *      E1: Procedure | F1: City | G1: Contact Via | H1: Source | I1: Status
 *
 * 2. Click Extensions → Apps Script
 *
 * 3. Delete any existing code and paste THIS ENTIRE FILE
 *
 * 4. Update the CONFIG below with:
 *    - NOTIFICATION_EMAIL: where you want lead notifications
 *    - SHEET_NAME: the sheet tab name (default: "Sheet1")
 *    - SHARED_SECRET: a long random string. The SAME value must be set as
 *      GOOGLE_SCRIPT_SECRET in your Next.js .env.local. Without this, anyone
 *      who learns your webhook URL can write to the sheet and trigger emails.
 *
 * 5. Click Deploy → New Deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone   (auth is enforced by the HMAC below)
 *    - Click Deploy
 *
 * 6. Copy the Web App URL and paste it in your .env.local file as:
 *    GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXXX/exec
 *    GOOGLE_SCRIPT_SECRET=<same value as SHARED_SECRET below>
 *
 * 7. Authorize the script when prompted (it needs permission to
 *    write to sheets and send emails)
 *
 * ============================================================
 */

// ── CONFIG ──────────────────────────────────────────────────
const CONFIG = {
  NOTIFICATION_EMAIL: "YOUR_EMAIL@gmail.com",    // ← Change this!
  SHEET_NAME: "Sheet1",                           // ← Your sheet tab name
  SEND_EMAIL: true,                               // Set false to disable emails
  SHARED_SECRET: "CHANGE_ME_TO_A_LONG_RANDOM_STRING", // ← MUST match GOOGLE_SCRIPT_SECRET
};

// ── HANDLE POST REQUESTS ────────────────────────────────────
function doPost(e) {
  try {
    const rawBody = e.postData && e.postData.contents;
    if (!rawBody) {
      return jsonResponse({ success: false, message: "Missing body" });
    }

    // HMAC verification — without a valid signature we refuse the write so the
    // public deployment URL is not a public write API.
    const provided = (e.parameter && e.parameter.signature) ||
      (e.headers && (e.headers["X-Signature"] || e.headers["x-signature"])) ||
      "";
    if (CONFIG.SHARED_SECRET && CONFIG.SHARED_SECRET !== "CHANGE_ME_TO_A_LONG_RANDOM_STRING") {
      const expected = computeHmac(rawBody, CONFIG.SHARED_SECRET);
      if (!safeEquals(provided, expected)) {
        return jsonResponse({ success: false, message: "Invalid signature" });
      }
    }

    const data = JSON.parse(rawBody);

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
    if (!sheet) {
      return jsonResponse({ success: false, message: "Sheet not found" });
    }

    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    sheet.appendRow([
      timestamp,
      data.id || "",
      data.name || "",
      data.phone || "",
      data.procedure || "",
      data.city || "",
      data.preferred || "",
      data.source || "website",
      "New"
    ]);

    if (
      CONFIG.SEND_EMAIL &&
      CONFIG.NOTIFICATION_EMAIL &&
      CONFIG.NOTIFICATION_EMAIL !== "YOUR_EMAIL@gmail.com"
    ) {
      sendLeadNotification(data, timestamp);
    } else if (CONFIG.SEND_EMAIL) {
      Logger.log("SEND_EMAIL is true but NOTIFICATION_EMAIL is unset — no email sent for " + (data.id || ""));
    }

    return jsonResponse({ success: true, message: "Lead saved" });
  } catch (error) {
    Logger.log(error);
    return jsonResponse({ success: false, message: "Server error" });
  }
}

// ── HANDLE GET REQUESTS (for testing) ───────────────────────
function doGet() {
  return jsonResponse({
    status: "SURGISAATHI Lead Webhook is active",
    timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
  });
}

// ── EMAIL NOTIFICATION ──────────────────────────────────────
function sendLeadNotification(data, timestamp) {
  // The Next.js relay already HTML-escapes every user-controlled field, so
  // interpolating directly here is safe. Phone is always a 10-digit number
  // after server-side regex validation, so the tel:/wa.me links are clean.
  const subject = `New SURGISAATHI Lead — ${data.name} (${data.procedure})`;

  const htmlBody = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 500px; margin: 0 auto;">
      <div style="background: #0D6B6E; padding: 20px; border-radius: 12px 12px 0 0;">
        <h2 style="color: white; margin: 0; font-size: 18px;">New Consultation Request</h2>
        <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 13px;">${timestamp}</p>
      </div>

      <div style="background: #fff; padding: 24px; border: 1px solid #E8E5E0; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; width: 120px;">Booking ID</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; font-size: 13px; color: #0D6B6E;">${data.id || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; font-size: 14px;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px;">
              <a href="tel:+91${data.phone}" style="color: #0D6B6E; text-decoration: none; font-weight: 600;">+91 ${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Procedure</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px;">
              <span style="background: #E8805A; color: white; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">${data.procedure}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">City</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px;">${data.city}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 13px;">Contact Via</td>
            <td style="padding: 10px 0; font-size: 14px; text-transform: capitalize;">${data.preferred || 'Call'}</td>
          </tr>
        </table>

        <div style="margin-top: 20px;">
          <a href="tel:+91${data.phone}" style="display: inline-block; background: #0D6B6E; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 600; margin-right: 8px;">Call Now</a>
          <a href="https://wa.me/91${data.phone}" style="display: inline-block; background: #25D366; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 600;">WhatsApp</a>
        </div>
      </div>

      <div style="background: #f8f8f6; padding: 16px; border-radius: 0 0 12px 12px; border: 1px solid #E8E5E0; border-top: none;">
        <p style="margin: 0; font-size: 11px; color: #999;">
          SURGISAATHI — Trusted Care for Sensitive Surgeries<br/>
          This is an automated notification. Respond to the patient within 30 minutes.
        </p>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: CONFIG.NOTIFICATION_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    name: "SURGISAATHI Leads"
  });
}

// ── HELPERS ─────────────────────────────────────────────────
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function computeHmac(message, secret) {
  const bytes = Utilities.computeHmacSha256Signature(message, secret);
  return bytes
    .map(function (b) {
      const v = (b < 0 ? b + 256 : b).toString(16);
      return v.length === 1 ? "0" + v : v;
    })
    .join("");
}

function safeEquals(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

// ── TEST FUNCTION (run manually to verify) ──────────────────
function testWebhook() {
  const body = JSON.stringify({
    id: "SS-TEST-001",
    name: "Test Patient",
    phone: "9876543210",
    procedure: "Circumcision",
    city: "Mumbai",
    preferred: "call",
    source: "website-test"
  });
  const sig = CONFIG.SHARED_SECRET ? computeHmac(body, CONFIG.SHARED_SECRET) : "";
  const result = doPost({
    postData: { contents: body },
    headers: { "X-Signature": sig },
    parameter: {}
  });
  Logger.log(result.getContent());
}
