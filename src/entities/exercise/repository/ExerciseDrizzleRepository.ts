import { and, asc, eq } from "drizzle-orm";
import { db } from "../../../database/index.js";
import { exercises as exercisesTable } from "../schema/exercises.js";
import { ExerciseStructure } from "../types.js";
import { ExerciseRepository } from "./types.js";
import { Id } from "../../../types.js";

class ExerciseDrizzleRepository implements ExerciseRepository {
  public async getById(exerciseId: Id): Promise<ExerciseStructure> {
    const exercises = await db
      .select()
      .from(exercisesTable)
      .where(eq(exercisesTable.id, exerciseId));

    return exercises[0];
  }

  public async getByChallenge(challenge: number): Promise<ExerciseStructure[]> {
    const exercises: ExerciseStructure[] = await db
      .select()
      .from(exercisesTable)
      .where(eq(exercisesTable.challenge, challenge))
      .orderBy(asc(exercisesTable.position));

    return exercises;
  }

  public async getExerciseByChallengeAndPosition(
    challenge: number,
    position: number
  ): Promise<ExerciseStructure> {
    const exercises: ExerciseStructure[] = await db
      .select()
      .from(exercisesTable)
      .where(
        and(
          eq(exercisesTable.challenge, challenge),
          eq(exercisesTable.position, position)
        )
      );

    const exercise = exercises[0];

    if (!exercise) {
      throw new Error("Exercise not found");
    }

    return exercise;
  }
}

export default ExerciseDrizzleRepository;
