import type { messages } from "@/lib/db/schema";

type Message = typeof messages.$inferSelect;


export type BriefItem = {
  position: number;
  message: Message;
};


const CATEGORY_LABELS: Record<string, string> = {
  TASK: "🔥 Tasks",
  REMINDER: "⏰ Reminders",
  IDEA: "💡 Ideas",
  NOTE: "📝 Notes",
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


  const groups: Record<string, BriefItem[]> = {};


  for (const item of items) {
    const category = item.message.category;

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(item);
  }


  let result = "📋 DailyBrief\n";


  for (const [category, groupItems] of Object.entries(groups)) {

    result += `\n${CATEGORY_LABELS[category] ?? category}\n`;


    for (const item of groupItems) {

      // IMPORTANT: keep original global position
      result += `${item.position}. ${item.message.rawText}`;


      if (item.message.extractedDate) {
        result += ` 📅 ${item.message.extractedDate.toDateString()}`;
      }


      result += "\n";
    }
  }


  return result.trim();
}