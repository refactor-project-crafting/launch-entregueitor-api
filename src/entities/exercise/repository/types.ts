import { Id } from "../../../types.js";
import { ExerciseStructure } from "../types.js";

export interface ExerciseRepository {
  getById(exerciseId: Id): Promise<ExerciseStructure>;
  getByChallenge(challenge: number): Promise<ExerciseStructure[]>;
  getExerciseByChallengeAndPosition(
    challenge: number,
    position: number
  ): Promise<ExerciseStructure>;
}
