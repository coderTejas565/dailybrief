import twilio from "twilio";
import "dotenv/config";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function main() {
  const message = await client.messages.create({
    from: process.env.TWILIO_WHATSAPP_NUMBER,
    to: "whatsapp:+918452950321",
    body: "Hello from DailyBrief 🚀",
  });

  console.log(message.sid);
}

main();