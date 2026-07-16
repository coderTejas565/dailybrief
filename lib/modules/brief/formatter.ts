import type { messages } from "@/lib/db/schema";

type Message = typeof messages.$inferSelect;

export type BriefItem = {
  position: number;
  message: Message;
};

const CATEGORY_LABELS: Record<string, string> = {
  TASK: "🔥",
  REMINDER: "⏰",
  IDEA: "💡",
  NOTE: "📝",
};

export function buildBriefItems(items: Message[]): BriefItem[] {
  return items.map((message, index) => ({
    position: index + 1,
    message,
  }));
}

export function formatBrief(items: BriefItem[]): string {
  if (items.length === 0) {
    return "📋 DailyBrief\n\nNothing pending 🎉";
  }

  let result = "📋 DailyBrief\n";


  for (const item of items) {
    const icon =
      CATEGORY_LABELS[item.message.category] ?? "📌";


    result += `\n${item.position}. ${icon} ${item.message.rawText}`;


    if (item.message.extractedDate) {
      result += ` 📅 ${item.message.extractedDate.toDateString()}`;
    }


    result += "\n";
  }


  return result.trim();
}
