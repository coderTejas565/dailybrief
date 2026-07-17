export const RELEVANCE_PROMPT = (current: string, past: string) => `
You are checking whether a past memory is useful context.

Current message:
"${current}"

Past memory:
"${past}"

Return ONLY valid JSON.

{
  "relevant": boolean,
  "reason": string
}

Rules:
- Only return true if this memory helps answer or understand the current message.
- Shared keywords alone are not enough.
`;
