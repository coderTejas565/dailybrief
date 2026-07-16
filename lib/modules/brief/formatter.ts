import type { messages } from "@/lib/db/schema";

type Message = typeof messages.$inferSelect;

const CATEGORY_LABELS: Record<string, string> = {
  TASK: "🔥 Tasks",
  REMINDER: "⏰ Reminders",
  IDEA: "💡 Ideas",
  NOTE: "📝 Notes",
};

export function formatBrief(items: Message[]) {
  if (items.length === 0) {
    return "📋 DailyBrief\n\nNothing pending 🎉";
  }

  const groups: Record<string, Message[]> = {};

  for (const item of items) {
    if (item.category === "JUNK") {
      continue;
    }

    if (!groups[item.category]) {
      groups[item.category] = [];
    }

    groups[item.category].push(item);
  }

  let result = "📋 DailyBrief\n";

  for (const [category, list] of Object.entries(groups)) {
    result += `\n${CATEGORY_LABELS[category] ?? category}\n`;

    list.forEach((item, index) => {
      result += `${index + 1}. ${item.rawText}`;

      if (item.extractedDate) {
        result += ` 📅 ${item.extractedDate.toDateString()}`;
      }

      result += "\n";
    });
  }

  return result.trim();
}
