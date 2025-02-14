import { Router } from "express";
import ExerciseDrizzleRepository from "../repository/ExerciseDrizzleRepository.js";
import ExerciseController from "../controller/ExerciseController.js";
import authMiddleware from "../../../auth/middlewares/authMiddleware.js";

const exercisesRouter = Router();

const exerciseRepository = new ExerciseDrizzleRepository();
const exerciseController = new ExerciseController(exerciseRepository);

exercisesRouter.get(
  "/:challengeNumber",
  authMiddleware,
  exerciseController.getByChallenge
);
exercisesRouter.get(
  "/one",
  authMiddleware,
  exerciseController.getOneByChallengeAndPosition
);

export default exercisesRouter;
