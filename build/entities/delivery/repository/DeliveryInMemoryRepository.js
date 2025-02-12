class DeliveryInMemoryRepository {
    deliveries = [
        {
            id: "a",
            challenge: 4,
            name: "switch",
            studentId: "a8f0cbef-a9d6-4d19-bd5e-cd82dd4557ba",
        },
        {
            id: "b",
            challenge: 4,
            name: "bucles",
            studentId: "a8f0cbef-a9d6-4d19-bd5e-cd82dd4557bb",
        },
    ];
    async getByChallenge(challengeNumber, userId) {
        const deliveries = this.deliveries.filter((delivery) => delivery.studentId === userId && delivery.challenge === challengeNumber);
        return Promise.resolve(deliveries);
    }
}
export default DeliveryInMemoryRepository;
//# sourceMappingURL=DeliveryInMemoryRepository.js.map