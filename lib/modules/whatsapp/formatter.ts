import type { ClassificationResult } from "@/lib/modules/classification/classify";
import type { ResurfacedMemory } from "@/lib/modules/memory/resurface";

type BuildConfirmationMessageInput = {
  classification: ClassificationResult;
  resurfacedMemory?: ResurfacedMemory | null;
};

export function buildConfirmationMessage({
  classification,
  resurfacedMemory,
}: BuildConfirmationMessageInput): string {
  let message = `✅ Saved as ${classification.category.toLowerCase()}.\n\n`;

  message += `📝 ${classification.title}`;

  if (classification.date) {
    message += `\n📅 ${classification.date}`;
  }

  if (resurfacedMemory) {
    const daysAgo = Math.round(
      (Date.now() - resurfacedMemory.createdAt.getTime()) / (1000 * 60 * 60 * 24),
    );

    message += `\n\n💡 Memory connection`;

    message += `\n${daysAgo} day${daysAgo === 1 ? "" : "s"} ago you mentioned:`;

    message += `\n"${resurfacedMemory.rawText}"`;

    message += `\n\n${resurfacedMemory.reason}`;
  }

  return message;
}
