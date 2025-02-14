import { Response } from "express";
import { ExerciseRepository } from "../repository/types.js";
import {
  ExerciseControllerStructure,
  RequestWithChallengeAndPosition,
} from "./types.js";

class ExerciseController implements ExerciseControllerStructure {
  constructor(private exerciseRepository: ExerciseRepository) {
    this.getOneByChallengeAndPosition =
      this.getOneByChallengeAndPosition.bind(this);
  }

  public async getOneByChallengeAndPosition(
    req: RequestWithChallengeAndPosition,
    res: Response
  ): Promise<void> {
    const { challenge, position } = req.query;

    try {
      const exercise =
        await this.exerciseRepository.getExerciseByChallengeAndPosition(
          Number(challenge),
          Number(position)
        );

      res.status(200).json({ exercise });
    } catch (error: unknown) {
      console.log((error as Error).message);
      res.status(404).json({ error: "Exercise not found" });
    }
  }
}

export default ExerciseController;
