import "dotenv/config";
import { Flagsmith } from "flagsmith-nodejs";

const flagsmith = new Flagsmith({
  environmentKey: process.env.FLAGSMITH_ENVIRONMENT,
});

export default flagsmith;
