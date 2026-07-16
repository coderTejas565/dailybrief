import { findOrCreateUser } from "@/lib/repositories/users.repo";
import { getOpenMessagesByUser } from "@/lib/repositories/messages.repo";

import { sendWhatsApp } from "@/lib/modules/whatsapp/client";

import { formatBrief } from "./formatter";

export async function handleBriefCommand(from: string) {
  const user = await findOrCreateUser(from);

  const messages = await getOpenMessagesByUser(user.id);

  const brief = formatBrief(messages);

  await sendWhatsApp(from, brief);

  return {
    count: messages.length,
  };
}
