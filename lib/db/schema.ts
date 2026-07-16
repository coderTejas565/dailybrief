import {
  pgTable,
  uuid,
  text,
  timestamp,
  vector,
  boolean,
  real,
  integer,
  unique,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  phone: text("phone").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),

  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),

  rawText: text("raw_text").notNull(),

  category: text("category").notNull(), // TASK | REMINDER | NOTE | IDEA | JUNK
  priority: text("priority"), // HIGH | MEDIUM | LOW
  extractedDate: timestamp("extracted_date"),

  remember: boolean("remember").default(false), // gates embedding generation
  importanceScore: real("importance_score"), // reserved for resurfacing rank — populate in Day 3 or drop

  status: text("status").default("open"), // open | done | snoozed | discarded

  embedding: vector("embedding", { dimensions: 768 }), // Gemini text-embedding-004

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export const briefs = pgTable("briefs", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  content: text("content").notNull(),
  sentAt: timestamp("sent_at").defaultNow().notNull(),
});

export const briefItems = pgTable(
  "brief_items",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    briefId: uuid("brief_id")
      .references(() => briefs.id, {
        onDelete: "cascade",
      })
      .notNull(),

    messageId: uuid("message_id")
      .references(() => messages.id, {
        onDelete: "cascade",
      })
      .notNull(),

    position: integer("position").notNull(),

    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    uniquePosition: unique().on(table.briefId, table.position),
  }),
);
