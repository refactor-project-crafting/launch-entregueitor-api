class ExerciseController {
    exerciseRepository;
    constructor(exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
        this.getOneByChallengeAndPosition =
            this.getOneByChallengeAndPosition.bind(this);
    }
    async getOneByChallengeAndPosition(req, res) {
        const { challenge, position } = req.query;
        try {
            const exercise = await this.exerciseRepository.getExerciseByChallengeAndPosition(Number(challenge), Number(position));
            res.status(200).json({ exercise });
        }
        catch {
            res.status(404).json({ error: "Exercise not found" });
        }
    }
}
export default ExerciseController;
//# sourceMappingURL=ExerciseController.js.map