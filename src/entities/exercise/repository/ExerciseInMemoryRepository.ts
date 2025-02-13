import { Exercise } from "../types.js";
import { ExerciseRepository } from "./types.js";

class ExerciseInMemoryRepository implements ExerciseRepository {
  private readonly exercises: Exercise[] = [
    {
      id: "asdf",
      challenge: 2,
      position: 3,
      name: "r2-recorrer-arrays",
      type: "text",
    },
    {
      id: "adeewf",
      challenge: 2,
      position: 1,
      name: "r2-yoquese",
      type: "text",
    },
  ];

  public async getExerciseByChallengeAndPosition(
    challenge: number,
    position: number
  ): Promise<Exercise> {
    const exercise = this.exercises.find(
      (exercise) =>
        exercise.challenge === challenge && exercise.position === position
    );

    if (!exercise) {
      throw new Error("Exercise not found");
    }

    return Promise.resolve(exercise);
  }
}

export default ExerciseInMemoryRepository;
