import type { Command } from "./types";

export function detectCommand(text: string): Command {
  const body = text.trim().toLowerCase();

  if (body === "brief me") {
    return {
      type: "BRIEF",
    };
  }

  const doneMatch = body.match(/^(\d+)\s+done$/i);

  if (doneMatch) {
    return {
      type: "DONE",
      index: Number(doneMatch[1]),
    };
  }

  return {
    type: "NONE",
  };
}
