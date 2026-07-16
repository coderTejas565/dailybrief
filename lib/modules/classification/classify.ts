import { gemini } from "@/lib/modules/gemini/client";

import { buildClassificationPrompt } from "./prompts";

export type MessageCategory =
  | "TASK"
  | "REMINDER"
  | "NOTE"
  | "IDEA"
  | "JUNK";

export type MessagePriority =
  | "HIGH"
  | "MEDIUM"
  | "LOW";

export interface ClassificationResult {
  title: string;
  category: MessageCategory;
  priority: MessagePriority;
  date: string | null;
  remember: boolean;
}

export async function classifyMessage(
  message: string
): Promise<ClassificationResult> {
  const response = await gemini.models.generateContent({
    model: "gemini-2.5-flash",
    contents: buildClassificationPrompt(message),
    config: {
      responseMimeType: "application/json",
    },
  });

  const text = response.text;

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return JSON.parse(text) as ClassificationResult;
}