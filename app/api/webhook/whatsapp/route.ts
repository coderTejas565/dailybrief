import { NextResponse } from "next/server";

import { routeIncomingMessage } from "@/lib/modules/commands/router";
import { parseIncomingWhatsAppMessage } from "@/lib/modules/whatsapp/parser";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const message = parseIncomingWhatsAppMessage(formData);

    await routeIncomingMessage(message);

    return new NextResponse(
  `
  <Response></Response>
  `,
  {
    status: 200,
    headers:{
      "Content-Type":"text/xml",
    },
  }
);
  } catch (error) {
    console.error("Webhook Error:", error);

    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
