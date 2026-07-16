export function parseDoneCommand(text: string) {
  const match = text.trim().match(/^(\d+)\s+done$/i);

  if (!match) {
    return null;
  }

  return {
    index: Number(match[1]),
  };
}
