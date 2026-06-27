import { NextResponse } from "next/server";
import { z } from "zod";
import { deliverFormSubmission } from "@/lib/formDelivery";

export const runtime = "nodejs";

const estimateSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  address: z.string().min(5),
  situation: z.string().min(1),
  service: z.string().min(1),
  urgency: z.string().min(1),
  description: z.string().min(10),
  affectedArea: z.string().optional(),
  roomsAffected: z.string().optional(),
});

export async function POST(request: Request) {
  const parsed = estimateSchema.safeParse(await request.json());

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, code: "INVALID_ESTIMATE_REQUEST", error: "Invalid estimate request" },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const result = await deliverFormSubmission({
    type: "Estimate Request",
    subject: `New Estimate Request: ${data.name}`,
    fields: {
      Name: data.name,
      Phone: data.phone,
      Email: data.email,
      "Property Address": data.address,
      Situation: data.situation,
      Service: data.service,
      Urgency: data.urgency,
      "Affected Area": data.affectedArea,
      "Rooms Affected": data.roomsAffected,
      Description: data.description,
    },
  });

  const ok = result.emailSent && result.sheetsLogged;

  return NextResponse.json(
    { ok, code: ok ? "ESTIMATE_DELIVERED" : "ESTIMATE_DELIVERY_FAILED", ...result },
    { status: ok ? 200 : 502 },
  );
}
