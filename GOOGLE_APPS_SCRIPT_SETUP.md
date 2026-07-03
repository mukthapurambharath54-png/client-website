# Google Apps Script Setup — Zenex Registration Email

This script receives registration data from the website and emails it to **infozenex@gmail.com** using your own Gmail account (no API keys needed).

## Step 1 — Create the script
1. Open https://script.google.com
2. Click **New project**
3. Name it: `Zenex Registration Mailer`
4. Replace all default code with the script below:

```javascript
// ===== Zenex Registration Mailer =====
const RECIPIENT = "infozenex@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const subject = "New Registration — Zenex International (" + (data.organization || "Unknown") + ")";

    const rows = [
      ["Organization",   data.organization],
      ["Business Type",  data.businessType],
      ["Contact Person", data.contactPerson],
      ["Email",          data.email],
      ["Phone",          data.phone],
      ["Drug License",   data.drugLicense],
      ["GSTIN",          data.gstin],
      ["Address",        data.address],
      ["City",           data.city],
      ["State",          data.state],
      ["Pincode",        data.pincode],
      ["Submitted At",   new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })]
    ];

    let html = '<div style="font-family:Arial,sans-serif;max-width:600px">';
    html += '<h2 style="color:#0a2540;border-bottom:2px solid #10b981;padding-bottom:8px">New Registration Received</h2>';
    html += '<table style="width:100%;border-collapse:collapse;margin-top:12px">';
    rows.forEach(function(r) {
      html += '<tr>'
        + '<td style="padding:8px 12px;background:#f5f7fb;border:1px solid #e5e7eb;font-weight:600;width:40%">' + r[0] + '</td>'
        + '<td style="padding:8px 12px;border:1px solid #e5e7eb">' + (r[1] || "—") + '</td>'
        + '</tr>';
    });
    html += '</table>';
    html += '<p style="margin-top:16px;color:#64748b;font-size:12px">Sent automatically from zenexinternational.com</p>';
    html += '</div>';

    MailApp.sendEmail({
      to: RECIPIENT,
      subject: subject,
      htmlBody: html,
      replyTo: data.email || RECIPIENT
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("Zenex mailer is live.");
}
```

## Step 2 — Deploy as Web App
1. Click **Deploy → New deployment**
2. Click the **gear icon** next to "Select type" → choose **Web app**
3. Configure:
   - **Description:** `Zenex Registration v1`
   - **Execute as:** `Me (your-gmail@gmail.com)`
   - **Who has access:** `Anyone`
4. Click **Deploy**
5. Authorize the script (it will ask permission to send emails on your behalf — click **Allow**)
6. **Copy the Web app URL** — it looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## Step 3 — Share the URL with me
Paste the deployment URL and I'll wire it into the registration form. After that, every registration submitted from the website will instantly email **infozenex@gmail.com**.

---

### Optional: Test the script
After deploying, you can paste this in a terminal to test:
```
curl -L -X POST -H "Content-Type: application/json" \
  -d '{"organization":"Test Hospital","email":"test@x.com","phone":"+91 9999999999"}' \
  "YOUR_WEB_APP_URL"
```
You should receive a test email at infozenex@gmail.com within a minute.
