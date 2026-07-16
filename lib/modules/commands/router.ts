import type { WhatsAppIncomingMessage } from "@/lib/modules/whatsapp/types";

import { ingestMessage } from "@/lib/modules/ingestion/ingest";
import { handleBriefCommand } from "@/lib/modules/brief/generate";
import { resolveDoneAction } from "@/lib/modules/actions/resolve";

import { sendWhatsApp } from "@/lib/modules/whatsapp/client";

import { detectCommand } from "./detect";

export async function routeIncomingMessage(message: WhatsAppIncomingMessage): Promise<unknown> {
  const command = detectCommand(message.body);

  switch (command.type) {
    case "BRIEF":
      return handleBriefCommand(message.from);

    case "DONE": {
      const result = await resolveDoneAction(message.from, command.index);

      await sendWhatsApp(message.from, result.reply);

      return result;
    }

    case "NONE":
      return ingestMessage(message);

    default:
      return null;
  }
}
