import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";
import { eq, type InferSelectModel } from "drizzle-orm";

type User = InferSelectModel<typeof users>;

export async function findOrCreateUser(
  whatsappNumber: string
): Promise<User> {
  const existing = await db.query.users.findFirst({
    where: eq(users.phone, whatsappNumber),
  });

  if (existing) {
    return existing;
  }

  const [created] = await db
    .insert(users)
    .values({
      phone: whatsappNumber,
    })
    .returning();

  return created;
}