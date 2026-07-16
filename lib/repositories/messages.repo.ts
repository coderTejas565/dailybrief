import { db } from "@/lib/db/client";
import { messages } from "@/lib/db/schema";

import type { ClassificationResult } from "@/lib/modules/classification/classify";

import { and, eq, desc, ne } from "drizzle-orm";

type CreateMessageInput = {
  userId: string;
  rawText: string;
  classification: ClassificationResult;
};

export async function createMessage({ userId, rawText, classification }: CreateMessageInput) {
  const [message] = await db
    .insert(messages)
    .values({
      userId,
      rawText,

      category: classification.category,
      priority: classification.priority,

      extractedDate: classification.date ? new Date(classification.date) : null,

      remember: classification.remember,
    })
    .returning();

  return message;
}

export async function getOpenMessagesByUser(userId: string) {
  return db.query.messages.findMany({
    where: and(
      eq(messages.userId, userId),
      eq(messages.status, "open"),
      ne(messages.category, "JUNK"),
    ),

    orderBy: [desc(messages.createdAt)],
  });
}

export async function markMessageDone(messageId: string) {
  const [updated] = await db
    .update(messages)
    .set({
      status: "done",
    })
    .where(eq(messages.id, messageId))
    .returning();

  return updated;
}

export async function getRecentOpenMessages(userId: string) {
  return db.query.messages.findMany({
    where: and(
      eq(messages.userId, userId),
      eq(messages.status, "open"),
      ne(messages.category, "JUNK"),
    ),

    orderBy: [desc(messages.createdAt)],

    limit: 10,
  });
}
