import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { exercises } from "../entities/exercise/schema/exercises.js";
const client = postgres(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DBNAME}`);
export const db = drizzle(client, { schema: { ...exercises } });
console.log("Connection has been established successfully.");
//# sourceMappingURL=index.js.map