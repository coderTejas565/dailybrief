import { db } from "@/lib/db/client";
import { messages } from "@/lib/db/schema";

import type { ClassificationResult } from "@/lib/modules/classification/classify";

type CreateMessageInput = {
  userId: string;
  rawText: string;
  classification: ClassificationResult;
};

export async function createMessage({
  userId,
  rawText,
  classification,
}: CreateMessageInput) {
  const [message] = await db
    .insert(messages)
    .values({
      userId,
      rawText,

      category: classification.category,
      priority: classification.priority,

      extractedDate: classification.date
        ? new Date(classification.date)
        : null,

      remember: classification.remember,
    })
    .returning();

  return message;
}