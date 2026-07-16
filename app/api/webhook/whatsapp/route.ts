import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload = Object.fromEntries(formData.entries());

  console.log("📩 Incoming WhatsApp Payload");
  console.dir(payload, { depth: null });

  return new NextResponse("OK", { status: 200 });
}
