import { findOrCreateUser } from "@/lib/repositories/users.repo";

import { getOpenMessagesByUser, markMessageDone } from "@/lib/repositories/messages.repo";

type ResolveDoneResult = {
  success: boolean;
  reply: string;
};

export async function resolveDoneAction(from: string, index: number): Promise<ResolveDoneResult> {
  const user = await findOrCreateUser(from);

  const messages = await getOpenMessagesByUser(user.id);

  const message = messages[index - 1];

  if (index <= 0 || !message) {
    return {
      success: false,
      reply: "❌ Invalid task number",
    };
  }

  await markMessageDone(message.id);

  return {
    success: true,
    reply: `✅ Completed:\n${message.rawText}`,
  };
}
