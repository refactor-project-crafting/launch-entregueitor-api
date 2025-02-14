import { deliveryTypes } from "../types.js";
import { date, integer, pgEnum, pgTable, varchar } from "drizzle-orm/pg-core";

export const deliveries = pgTable("deliveries", {
  id: varchar().primaryKey(),
  challenge: integer().notNull(),
  type: pgEnum("delivery_type", deliveryTypes)().notNull(),
  date: date().notNull(),
  studentId: varchar().notNull(),
  exerciseId: varchar().notNull(),
  text: varchar(),
  url: varchar(),
  filename: varchar(),
});
