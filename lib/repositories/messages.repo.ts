import { db } from "@/lib/db/client";
import { messages } from "@/lib/db/schema";

import type { ClassificationResult } from "@/lib/modules/classification/classify";

import { and, eq, desc, ne, sql } from "drizzle-orm";

type CreateMessageInput = {
  userId: string;
  rawText: string;
  classification: ClassificationResult;
  embedding?: number[];
};

export async function createMessage({
  userId,
  rawText,
  classification,
  embedding,
}: CreateMessageInput) {
  const [message] = await db
    .insert(messages)
    .values({
      userId,
      rawText,

      category: classification.category,
      priority: classification.priority,

      extractedDate: classification.date ? new Date(classification.date) : null,

      remember: classification.remember,

      embedding: embedding ?? null,
    })
    .returning();

  return message;
}

export async function markMessageDone(messageId: string) {
  const [updated] = await db
    .update(messages)
    .set({
      status: "done",
    })
    .where(and(eq(messages.id, messageId), eq(messages.status, "open")))
    .returning();

  return updated;
}

export async function getOpenMessagesByUser(userId: string, limit?: number) {
  return db.query.messages.findMany({
    where: and(
      eq(messages.userId, userId),
      eq(messages.status, "open"),
      ne(messages.category, "JUNK"),
    ),

    orderBy: [desc(messages.createdAt)],

    ...(limit ? { limit } : {}),
  });
}

export async function getMessageById(id: string) {
  return db.query.messages.findFirst({
    where: eq(messages.id, id),
  });
}

export async function getSimilarMessages(
  userId: string,
  embedding: number[],
  excludeId: string,
  limit = 3
) {
  const vectorLiteral = `[${embedding.join(",")}]`;


  return db.execute(sql`
    SELECT
      id,
      raw_text,
      category,
      created_at,
      embedding <=> ${vectorLiteral}::vector AS distance

    FROM messages

    WHERE user_id = ${userId}
      AND id != ${excludeId}
      AND remember = true
      AND embedding IS NOT NULL

    ORDER BY embedding <=> ${vectorLiteral}::vector

    LIMIT ${limit}
  `);
}