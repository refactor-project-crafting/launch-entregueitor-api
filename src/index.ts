import "dotenv/config";
import startServer from "./server/startServer.js";
import "./database/index.js";

const port = process.env.PORT || 4000;

startServer(Number(port));
