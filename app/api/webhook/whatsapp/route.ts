import { NextResponse } from "next/server";

import { ingestMessage } from "@/lib/modules/ingestion/ingest";
import { parseIncomingWhatsAppMessage } from "@/lib/modules/whatsapp/parser";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const message = parseIncomingWhatsAppMessage(formData);

    await ingestMessage(message);

    return new NextResponse("OK", {
      status: 200,
    });
  } catch (error) {
    console.error("Webhook Error:", error);

    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}