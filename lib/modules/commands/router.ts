import type { WhatsAppIncomingMessage } from "@/lib/modules/whatsapp/types";

import { ingestMessage } from "@/lib/modules/ingestion/ingest";
import { handleBriefCommand } from "@/lib/modules/brief/generate";

export async function routeIncomingMessage(message: WhatsAppIncomingMessage): Promise<unknown> {
  const body = message.body.trim();

  if (!body) {
    return;
  }

  const command = body.toLowerCase();

  switch (command) {
    case "brief me":
      return handleBriefCommand(message.from);

    default:
      return ingestMessage(message);
  }
}
