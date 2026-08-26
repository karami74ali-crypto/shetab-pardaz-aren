// netlify/functions/notify-form.js
//
// Receives Netlify's "New form submission" outgoing webhook and emails the
// content via Resend (https://resend.com) instead of Netlify's own Forms
// email notification, which now requires a paid plan.
//
// Required environment variable (set in Netlify: Project configuration ->
// Environment variables):
//   RESEND_API_KEY     - your Resend API key
//
// Optional environment variables:
//   NOTIFY_TO_EMAIL     - where to send the notification
//   NOTIFY_FROM_EMAIL   - the "from" address
//                         (default: onboarding@resend.dev)

const DEFAULT_TO = "karami74ali@gmail.com";
const DEFAULT_FROM = "onboarding@resend.dev";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY environment variable is not set");
    return { statusCode: 500, body: "Server not configured" };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch (err) {
    return { statusCode: 400, body: "Invalid JSON" };
  }

  const submission = body.payload || body;
  const human = submission.human_fields || submission.data || {};

  function pick(...keys) {
    const foundKey = Object.keys(human).find((k) =>
      keys.includes(k.toLowerCase())
    );
    return foundKey ? human[foundKey] : null;
  }

  const name = pick("name", "نام") || "-";
  const email = pick("email", "ایمیل") || submission.email || "-";
  const message = pick("message", "پیام") || "-";
  const formName = submission.form_name || body.form_name || "contact";

  const toEmail = process.env.NOTIFY_TO_EMAIL || DEFAULT_TO;
  const fromEmail = process.env.NOTIFY_FROM_EMAIL || DEFAULT_FROM;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const html = `
    <div dir="rtl" style="font-family: Tahoma, sans-serif; line-height: 1.8;">
      <h2>پیام جدید از فرم تماس سایت شتاب‌پرداز آرن</h2>
      <p><strong>نام:</strong> ${escapeHtml(name)}</p>
      <p><strong>ایمیل:</strong> ${escapeHtml(email)}</p>
      <p><strong>پیام:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `شتاب‌پرداز آرن <${fromEmail}>`,
        to: [toEmail],
        reply_to:
          typeof email === "string" && email.includes("@") ? email : undefined,
        subject: `پیام جدید از فرم تماس سایت (${formName})`,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API error:", res.status, errText);
      return { statusCode: 502, body: "Failed to send email" };
    }

    return { statusCode: 200, body: "OK" };
  } catch (err) {
    console.error("Error sending email:", err);
    return { statusCode: 500, body: "Internal error" };
  }
};
