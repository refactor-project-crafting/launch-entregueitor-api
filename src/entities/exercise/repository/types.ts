import { ExerciseStructure } from "../types.js";

export interface ExerciseRepository {
  getExerciseByChallengeAndPosition(
    challenge: number,
    position: number
  ): Promise<ExerciseStructure>;
}
