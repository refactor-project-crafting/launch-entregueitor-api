import { Router } from "express";
import ExerciseInMemoryRepository from "../repository/ExerciseInMemoryRepository.js";
import ExerciseController from "../controller/ExerciseController.js";

const exercisesRouter = Router();

const exerciseRepository = new ExerciseInMemoryRepository();
const exerciseController = new ExerciseController(exerciseRepository);

exercisesRouter.get("/one", exerciseController.getOneByChallengeAndPosition);

export default exercisesRouter;
