import { NextResponse } from "next/server";
import { z } from "zod";
import { deliverFormSubmission } from "@/lib/formDelivery";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  request: z.string().min(10),
});

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json());

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, code: "INVALID_CONTACT_REQUEST", error: "Invalid contact request" },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const result = await deliverFormSubmission({
    type: "Contact Message",
    subject: `New Contact Message: ${data.name}`,
    fields: {
      Name: data.name,
      Email: data.email,
      Request: data.request,
    },
  });

  const ok = result.emailSent && result.sheetsLogged;

  return NextResponse.json(
    { ok, code: ok ? "CONTACT_DELIVERED" : "CONTACT_DELIVERY_FAILED", ...result },
    { status: ok ? 200 : 502 },
  );
}
