import { and, eq } from "drizzle-orm";
import { db } from "../../../database/index.js";
import { exercises as exercisesTable } from "../schema/exercises.js";
import { ExerciseStructure } from "../types.js";
import { ExerciseRepository } from "./types.js";

class ExerciseDrizzleRepository implements ExerciseRepository {
  public async getExerciseByChallengeAndPosition(
    challenge: number,
    position: number
  ): Promise<ExerciseStructure> {
    const exercises = await db
      .select()
      .from(exercisesTable)
      .where(
        and(
          eq(exercisesTable.challenge, challenge),
          eq(exercisesTable.position, position)
        )
      );

    if (!exercises[0]) {
      throw new Error("Exercise not found");
    }

    return Promise.resolve(exercises[0]);
  }
}

export default ExerciseDrizzleRepository;
