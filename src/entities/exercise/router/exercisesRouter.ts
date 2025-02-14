import { Router } from "express";
import ExerciseDrizzleRepository from "../repository/ExerciseDrizzleRepository.js";
import ExerciseController from "../controller/ExerciseController.js";

const exercisesRouter = Router();

const exerciseRepository = new ExerciseDrizzleRepository();
const exerciseController = new ExerciseController(exerciseRepository);

exercisesRouter.get("/one", exerciseController.getOneByChallengeAndPosition);

export default exercisesRouter;
