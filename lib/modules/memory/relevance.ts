import { gemini } from "@/lib/modules/gemini/client";

import { relevanceSchema, type RelevanceResult } from "./schema";

import { RELEVANCE_PROMPT } from "./prompt";

export async function checkMemoryRelevance(
  currentMessage: string,
  pastMemory: string,
): Promise<RelevanceResult> {
  const response = await gemini.models.generateContent({
    model: "gemini-2.5-flash",

    contents: RELEVANCE_PROMPT(currentMessage, pastMemory),

    config: {
      responseMimeType: "application/json",
    },
  });

  const text = response.text;

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  let parsed: unknown;

  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error("Gemini returned invalid JSON.");
  }

  return relevanceSchema.parse(parsed);
}
