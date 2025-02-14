import { deliveryTypes } from "../../delivery/types.js";
import { integer, pgEnum, pgTable, varchar } from "drizzle-orm/pg-core";

export const exercises = pgTable("exercises", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  challenge: integer().notNull(),
  position: integer().notNull(),
  type: pgEnum("delivery_type", deliveryTypes)().notNull(),
});
