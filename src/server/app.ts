import express from "express";
import morgan from "morgan";
import cors from "cors";
import deliveriesRouter from "../entities/delivery/router/deliveriesRouter.js";
import authMiddleware from "../auth/middlewares/authMiddleware.js";
import exercisesRouter from "../entities/exercise/router/exercisesRouter.js";
import isBackupNeeded from "../database/backup/middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(isBackupNeeded);

app.use(authMiddleware);
app.use("/deliveries", deliveriesRouter);
app.use("/exercises", exercisesRouter);

export default app;
