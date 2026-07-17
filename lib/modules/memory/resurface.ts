import { getSimilarMessages } from "@/lib/repositories/messages.repo";

import { checkMemoryRelevance } from "./relevance";

export type ResurfacedMemory = {
  rawText: string;
  createdAt: Date;
  reason: string;
};

const MEMORY_DISTANCE_THRESHOLD = 0.45;

export async function findResurfacedMemory(
  userId: string,
  currentMessage: string,
  embedding: number[],
  currentMessageId: string,
): Promise<ResurfacedMemory | null> {
  const candidates = await getSimilarMessages(userId, embedding, currentMessageId, 3);

  for (const candidate of candidates) {
    if (candidate.distance == null || candidate.distance > MEMORY_DISTANCE_THRESHOLD) {
      continue;
    }

    try {
      const relevance = await checkMemoryRelevance(currentMessage, candidate.rawText);

      if (!relevance.relevant) {
        continue;
      }

      return {
        rawText: candidate.rawText,
        createdAt: new Date(candidate.createdAt),
        reason: relevance.reason,
      };
    } catch (error) {
      console.error("Memory relevance check failed:", error);

      continue;
    }
  }

  return null;
}
