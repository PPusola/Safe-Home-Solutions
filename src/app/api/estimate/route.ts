import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, email, address, service, urgency, description, affectedArea, roomsAffected } = body;

  // Send email
  try {
    await transporter.sendMail({
      from: `"Safehome Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Estimate Request: ${name}`,
      html: `
        <h2>New Estimate Request</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Property Address</strong></td><td>${address}</td></tr>
          <tr><td><strong>Service</strong></td><td>${service}</td></tr>
          <tr><td><strong>Urgency</strong></td><td>${urgency}</td></tr>
          <tr><td><strong>Affected Area</strong></td><td>${affectedArea || "—"}</td></tr>
          <tr><td><strong>Rooms Affected</strong></td><td>${roomsAffected || "—"}</td></tr>
          <tr><td><strong>Description</strong></td><td>${description}</td></tr>
        </table>
      `,
    });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json({ ok: false, error: "Email failed" }, { status: 500 });
  }

  // Log to Google Sheets via Apps Script
  if (process.env.GOOGLE_SCRIPT_URL) {
    try {
      const res = await fetch(process.env.GOOGLE_SCRIPT_URL, {
        method: "POST",
        redirect: "follow",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name, phone, email, address, service, urgency,
          affectedArea: affectedArea || "",
          roomsAffected: roomsAffected || "",
          description,
        }),
      });
      console.log("Sheets response:", res.status, await res.text());
    } catch (err) {
      console.error("Sheets log failed:", err);
    }
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
