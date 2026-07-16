import { findOrCreateUser } from "@/lib/repositories/users.repo";

import { getOpenMessagesByUser } from "@/lib/repositories/messages.repo";

import { createBriefWithItems } from "@/lib/repositories/briefs.repo";

import { buildBriefItems, formatBrief } from "./formatter";

import { sendWhatsApp } from "@/lib/modules/whatsapp/client";

export async function handleBriefCommand(from: string) {
  const user = await findOrCreateUser(from);

  const openMessages = await getOpenMessagesByUser(user.id);

  const briefItems = buildBriefItems(openMessages);

  const content = formatBrief(briefItems);

  await createBriefWithItems({
    userId: user.id,
    content,
    briefItems: briefItems.map(({ position, message }) => ({
      position,
      messageId: message.id,
    })),
  });

  await sendWhatsApp(from, content);

  return {
    count: briefItems.length,
  };
}
