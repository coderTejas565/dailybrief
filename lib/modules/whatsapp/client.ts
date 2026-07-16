import twilio from "twilio";

import { env } from "@/lib/config/env";

const client = twilio(
  env.TWILIO_ACCOUNT_SID,
  env.TWILIO_AUTH_TOKEN
);

export async function sendWhatsApp(
  to: string,
  body: string
) {
  return client.messages.create({
    from: env.TWILIO_WHATSAPP_NUMBER,
    to,
    body,
  });
}