import { ExerciseStructure } from "../types.js";

export interface ExerciseRepository {
  getByChallenge(challenge: number): Promise<ExerciseStructure[]>;
  getExerciseByChallengeAndPosition(
    challenge: number,
    position: number
  ): Promise<ExerciseStructure>;
}
