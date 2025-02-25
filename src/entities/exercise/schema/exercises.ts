import { deliveryTypes } from "../../delivery/types.js";
import { integer, pgEnum, pgTable, text, varchar } from "drizzle-orm/pg-core";

const tableName = process.env.PROMO! + "_launch_exercises";

export const exercises = pgTable(tableName, {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  challenge: integer().notNull(),
  position: integer().notNull(),
  comments: text().notNull(),
  type: pgEnum("delivery_type", deliveryTypes)().notNull(),
});
