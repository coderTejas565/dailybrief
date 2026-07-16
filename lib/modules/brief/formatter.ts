import type { messages } from "@/lib/db/schema";


type Message = typeof messages.$inferSelect;


export function formatBrief(
  items: Message[]
) {

  if(items.length === 0){
    return `
📋 DailyBrief

Nothing pending 🎉
`;
  }


  let result = "📋 DailyBrief\n";


  const groups: Record<string, Message[]> = {};


  for(const item of items){

    if(item.category === "JUNK")
      continue;


    if(!groups[item.category]){
      groups[item.category] = [];
    }


    groups[item.category].push(item);
  }



  for(const [category,list] of Object.entries(groups)){

    if(category==="TASK"){
      result += "\n🔥 Tasks\n";
    }

    if(category==="REMINDER"){
      result += "\n⏰ Reminders\n";
    }

    if(category==="IDEA"){
      result += "\n💡 Ideas\n";
    }

    if(category==="NOTE"){
      result += "\n📝 Notes\n";
    }


    list.forEach((item,index)=>{

      result += `${index+1}. ${item.rawText}\n`;

    });

  }


  return result;
}