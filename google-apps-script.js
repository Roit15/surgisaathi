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
 *    - YOUR_EMAIL: Where you want lead notifications
 *    - SHEET_NAME: Name of the sheet tab (default: "Sheet1")
 * 
 * 5. Click Deploy → New Deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy
 * 
 * 6. Copy the Web App URL and paste it in your .env.local file as:
 *    GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXXX/exec
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
};

// ── HANDLE POST REQUESTS ────────────────────────────────────
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
    
    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, message: "Sheet not found" })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Append row to sheet
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
    
    // Send email notification
    if (CONFIG.SEND_EMAIL && CONFIG.NOTIFICATION_EMAIL !== "YOUR_EMAIL@gmail.com") {
      sendLeadNotification(data, timestamp);
    }
    
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Lead saved" })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ── HANDLE GET REQUESTS (for testing) ───────────────────────
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ 
      status: "SURGISAATHI Lead Webhook is active ✅",
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// ── EMAIL NOTIFICATION ──────────────────────────────────────
function sendLeadNotification(data, timestamp) {
  const subject = `🔔 New SURGISAATHI Lead — ${data.name} (${data.procedure})`;
  
  const htmlBody = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 500px; margin: 0 auto;">
      <div style="background: #0D6B6E; padding: 20px; border-radius: 12px 12px 0 0;">
        <h2 style="color: white; margin: 0; font-size: 18px;">🏥 New Consultation Request</h2>
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
        
        <div style="margin-top: 20px; display: flex; gap: 8px;">
          <a href="tel:+91${data.phone}" style="display: inline-block; background: #0D6B6E; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 600;">📞 Call Now</a>
          <a href="https://wa.me/91${data.phone}" style="display: inline-block; background: #25D366; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 600;">💬 WhatsApp</a>
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

// ── TEST FUNCTION (run manually to verify) ──────────────────
function testWebhook() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        id: "SS-TEST-001",
        name: "Test Patient",
        phone: "9876543210",
        procedure: "Circumcision",
        city: "Mumbai",
        preferred: "call",
        source: "website-test"
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
