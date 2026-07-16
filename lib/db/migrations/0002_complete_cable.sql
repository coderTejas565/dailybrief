ALTER TABLE "brief_items" DROP CONSTRAINT "brief_items_brief_id_briefs_id_fk";
--> statement-breakpoint
ALTER TABLE "brief_items" DROP CONSTRAINT "brief_items_message_id_messages_id_fk";
--> statement-breakpoint
ALTER TABLE "brief_items" ADD CONSTRAINT "brief_items_brief_id_briefs_id_fk" FOREIGN KEY ("brief_id") REFERENCES "public"."briefs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brief_items" ADD CONSTRAINT "brief_items_message_id_messages_id_fk" FOREIGN KEY ("message_id") REFERENCES "public"."messages"("id") ON DELETE cascade ON UPDATE no action;