import { findOrCreateUser } from "@/lib/repositories/users.repo";

import { getLatestBriefForUser, getBriefItemByPosition } from "@/lib/repositories/briefs.repo";

import { getMessageById, markMessageDone } from "@/lib/repositories/messages.repo";

type ResolveDoneResult = {
  success: boolean;
  reply: string;
};

export async function resolveDoneAction(
  from: string,
  position: number,
): Promise<ResolveDoneResult> {
  if (position <= 0) {
    return {
      success: false,
      reply: "❌ Invalid task number",
    };
  }

  const user = await findOrCreateUser(from);

  const latestBrief = await getLatestBriefForUser(user.id);

  if (!latestBrief) {
    return {
      success: false,
      reply: '❌ Send "brief me" first',
    };
  }

  const briefItem = await getBriefItemByPosition(latestBrief.id, position);

  if (!briefItem) {
    return {
      success: false,
      reply: "❌ Invalid task number",
    };
  }

  const message = await getMessageById(briefItem.messageId);

  if (!message) {
    return {
      success: false,
      reply: "❌ Message no longer exists",
    };
  }

  if (message.status !== "open") {
    return {
      success: false,
      reply: `ℹ️ Already ${message.status}:\n${message.rawText}`,
    };
  }

  await markMessageDone(message.id);

  return {
    success: true,
    reply: `✅ Completed:\n${message.rawText}`,
  };
}
