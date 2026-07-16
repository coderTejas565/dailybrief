import { findOrCreateUser } from "@/lib/repositories/users.repo";
import { createMessage } from "@/lib/repositories/messages.repo";
import { classifyMessage } from "@/lib/modules/classification/classify";

async function main() {
  const user = await findOrCreateUser("whatsapp:+911234567890");

  const classification = await classifyMessage(
    "Need to finish backend before Friday."
  );

  const message = await createMessage({
    userId: user.id,
    rawText: "Need to finish backend before Friday.",
    classification,
  });

  console.log(message);
}

main().catch(console.error);