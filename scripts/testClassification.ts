import { classifyMessage } from "@/lib/modules/classification/classify";

async function main() {
  const result = await classifyMessage(
    "Need to finish the backend before Friday."
  );

  console.log(result);
}

main().catch(console.error);