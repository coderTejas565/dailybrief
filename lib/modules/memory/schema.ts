import { z } from "zod";

export const relevanceSchema = z.object({
  relevant: z.boolean(),
  reason: z.string(),
});

export type RelevanceResult = z.infer<typeof relevanceSchema>;
