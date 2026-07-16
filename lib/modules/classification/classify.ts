import { z } from "zod";

import { gemini } from "@/lib/modules/gemini/client";

import { buildClassificationPrompt } from "./prompts";

export const classificationSchema = z.object({
  title: z.string(),
  category: z.enum(["TASK", "REMINDER", "NOTE", "IDEA", "JUNK"]),
  priority: z.enum(["HIGH", "MEDIUM", "LOW"]),
  date: z.string().nullable(),
  remember: z.boolean(),
});

export type ClassificationResult = z.infer<typeof classificationSchema>;

export async function classifyMessage(message: string): Promise<ClassificationResult> {
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

  let parsed: unknown;

  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error("Gemini returned invalid JSON.");
  }

  return classificationSchema.parse(parsed);
}
