import nodemailer from "nodemailer";
import { SITE } from "@/lib/site";

type FieldValue = string | number | undefined | null;

interface DeliveryOptions {
  type: "Estimate Request" | "Contact Message";
  subject: string;
  fields: Record<string, FieldValue>;
}

interface DeliveryResult {
  emailSent: boolean;
  sheetsLogged: boolean;
  errors: string[];
}

function getErrorCode(err: unknown) {
  if (err && typeof err === "object") {
    const error = err as { code?: string; responseCode?: number; command?: string };
    return [error.code, error.responseCode, error.command].filter(Boolean).join("/");
  }

  return "";
}

function escapeHtml(value: FieldValue) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatValue(value: FieldValue) {
  const text = String(value ?? "").trim();
  return text || "-";
}

function buildEmailHtml(type: string, fields: Record<string, FieldValue>) {
  const rows = Object.entries(fields)
    .map(([label, value]) => {
      return `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(formatValue(value))}</td></tr>`;
    })
    .join("");

  return `
    <h2>${escapeHtml(type)}</h2>
    <table cellpadding="8" style="border-collapse:collapse;width:100%">
      ${rows}
    </table>
  `;
}

export async function deliverFormSubmission({ type, subject, fields }: DeliveryOptions): Promise<DeliveryResult> {
  const errors: string[] = [];
  let emailSent = false;
  let sheetsLogged = false;
  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (!gmailUser || !gmailAppPassword) {
    errors.push("Gmail is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.");
  } else {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      await transporter.sendMail({
        from: `"Safe Home Website" <${gmailUser}>`,
        to: SITE.estimateEmail,
        replyTo: fields.Email ? String(fields.Email) : undefined,
        subject,
        html: buildEmailHtml(type, fields),
      });

      emailSent = true;
    } catch (err) {
      console.error("Email send failed:", err);
      const code = getErrorCode(err);
      errors.push(`Email delivery failed${code ? ` (${code})` : ""}.`);
    }
  }

  if (!process.env.GOOGLE_SCRIPT_URL) {
    errors.push("Google Sheets is not configured. Set GOOGLE_SCRIPT_URL.");
  } else {
    try {
      const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
        method: "POST",
        redirect: "follow",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          type,
          timestamp: new Date().toISOString(),
          ...fields,
        }),
      });

      const text = await response.text();
      console.log("Sheets response:", response.status, text);

      const scriptFailed = /<title>Error<\/title>|TypeError:|ReferenceError:|Exception:/i.test(text);

      if (!response.ok || scriptFailed) {
        throw new Error(`Google Sheets returned ${response.status}: ${text}`);
      }

      sheetsLogged = true;
    } catch (err) {
      console.error("Sheets log failed:", err);
      const code = getErrorCode(err);
      errors.push(`Google Sheets logging failed${code ? ` (${code})` : ""}.`);
    }
  }

  return { emailSent, sheetsLogged, errors };
}
