// import { embedText } from "@/lib/modules/memory/embed";
// import { getSimilarMessages } from "@/lib/repositories/messages.repo";

// async function main(){

//   const embedding = await embedText(
//     "Containers are confusing during deployment"
//   );

//   const results = await getSimilarMessages(
//     "d9b218b3-f264-4969-92b9-2db0fb3d7625",
//     embedding,
//     "00000000-0000-0000-0000-000000000000",
//     3
//   );

//   console.dir(results.rows,{
//     depth:null
//   });

// }

// main();

import { embedText } from "@/lib/modules/memory/embed";
import { getSimilarMessages } from "@/lib/repositories/messages.repo";

async function main() {
  const userId = "d9b218b3-f264-4969-92b9-2db0fb3d7625";

  const currentText = "I am struggling with deploying my backend application using containers";

  const embedding = await embedText(currentText);

  const results = await getSimilarMessages(userId, embedding, "some-current-message-id", 3);

  console.log(results);
}

main();
