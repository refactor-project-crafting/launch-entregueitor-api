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
        const exercise = this.exercises.find((exercise) => exercise.challenge === challenge && exercise.position === position);
        if (!exercise) {
            throw new Error("Exercise not found");
        }
        return Promise.resolve(exercise);
    }
}
export default ExerciseInMemoryRepository;
//# sourceMappingURL=ExerciseInMemoryRepository.js.map