import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { exercises } from "../entities/exercise/schema/exercises.js";

const client = postgres(process.env.SUPABASE_POSTGRES_STRING!, {
  ssl: "require",
});

export const db = drizzle(client, { schema: { ...exercises } });

console.log("Connection has been established successfully.");
