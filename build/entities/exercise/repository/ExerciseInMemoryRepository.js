import { and, eq } from "drizzle-orm";
import { db } from "../../../database/index.js";
import { exercises as exercisesTable } from "../schema/exercises.js";
class ExerciseInMemoryRepository {
    exercises = [
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
    async getExerciseByChallengeAndPosition(challenge, position) {
        const exercises = await db
            .select()
            .from(exercisesTable)
            .where(and(eq(exercisesTable.challenge, challenge), eq(exercisesTable.position, position)));
        if (!exercises[0]) {
            throw new Error("Exercise not found");
        }
        return Promise.resolve(exercises[0]);
    }
}
export default ExerciseInMemoryRepository;
//# sourceMappingURL=ExerciseInMemoryRepository.js.map