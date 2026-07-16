import type { ClassificationResult } from "@/lib/modules/classification/classify";

type BuildConfirmationMessageInput = {
  classification: ClassificationResult;
};

export function buildConfirmationMessage({
  classification,
}: BuildConfirmationMessageInput): string {
  let message = `✅ Saved as ${classification.category.toLowerCase()}.\n\n`;

  message += `📝 ${classification.title}`;

  if (classification.date) {
    message += `\n📅 ${classification.date}`;
  }

  return message;
}
