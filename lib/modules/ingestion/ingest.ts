import { classifyMessage } from "@/lib/modules/classification/classify";

import { sendWhatsApp } from "@/lib/modules/whatsapp/client";
import { buildConfirmationMessage } from "@/lib/modules/whatsapp/formatter";

import { findOrCreateUser } from "@/lib/repositories/users.repo";
import { createMessage } from "@/lib/repositories/messages.repo";

import type { WhatsAppIncomingMessage } from "@/lib/modules/whatsapp/types";

import { embedText } from "@/lib/modules/memory/embed";

export async function ingestMessage({ from, body }: WhatsAppIncomingMessage) {
  // 1. Find or create the user
  const user = await findOrCreateUser(from);

  // 2. Classify the message
  const classification = await classifyMessage(body);

  const memoryEmbedding = classification.remember ? await embedText(body) : undefined;

  // 3. Save it
  const message = await createMessage({
    userId: user.id,
    rawText: body,
    classification,
    embedding: memoryEmbedding,
  });

  // 4. Build confirmation reply
  const reply = buildConfirmationMessage({
    classification,
  });

  // 5. Send reply
  await sendWhatsApp(from, reply);

  return {
    user,
    message,
    classification,
  };
}
