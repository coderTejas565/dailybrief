import { embedText } from "@/lib/modules/memory/embed";

async function main() {
  const embedding = await embedText("I want to learn Docker for deployment");

  console.log("Dimensions:", embedding.length);

  console.log("First 5 values:", embedding.slice(0, 5));
}

main();
