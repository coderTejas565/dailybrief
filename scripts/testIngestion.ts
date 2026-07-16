import { ingestMessage } from "@/lib/modules/ingestion/ingest";

async function main() {
  await ingestMessage({
    from: "whatsapp:+918452950321",
    body: "Need to complete DailyBrief before Sunday.",
    profileName: "Tejas",
    waId: "918452950321",
    messageSid: crypto.randomUUID(),
  });

  console.log("Done");
}

main().catch(console.error);
