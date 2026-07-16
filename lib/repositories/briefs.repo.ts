import { db } from "@/lib/db/client";

import { briefs, briefItems } from "@/lib/db/schema";

import { eq, desc, and } from "drizzle-orm";

type CreateBriefInput = {
  userId: string;
  content: string;

  briefItems: {
    position: number;
    messageId: string;
  }[];
};

export async function createBriefWithItems({
  userId,
  content,
  briefItems: items,
}: CreateBriefInput) {
  const [brief] = await db
    .insert(briefs)
    .values({
      userId,
      content,
    })
    .returning();

  if (!brief) {
    throw new Error("Failed to create brief");
  }

  if (items.length > 0) {
    await db.insert(briefItems).values(
      items.map((item) => ({
        briefId: brief.id,
        messageId: item.messageId,
        position: item.position,
      })),
    );
  }
  return brief;
}

export async function getLatestBriefForUser(userId: string) {
  return db.query.briefs.findFirst({
    where: eq(briefs.userId, userId),

    orderBy: [desc(briefs.sentAt)],
  });
}

export async function getBriefItemByPosition(briefId: string, position: number) {
  return db.query.briefItems.findFirst({
    where: and(
      eq(briefItems.briefId, briefId),

      eq(briefItems.position, position),
    ),
  });
}
