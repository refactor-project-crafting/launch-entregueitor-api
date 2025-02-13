import crypto from "node:crypto";
import { convertDeliveryDtoToDelivery, convertDeliveryToDeliveryDto, } from "../dto/mappers.js";
class DeliveryInMemoryRepository {
    deliveries = [
        {
            id: "a",
            challenge: 1,
            name: "switch",
            type: "text",
            date: "2025-02-13T09:17:24.384Z",
            studentId: "a8f0cbef-a9d6-4d19-bd5e-cd82dd4557ba",
        },
        {
            id: "b",
            challenge: 1,
            name: "bucles",
            type: "text",
            date: "2025-02-11T09:17:24.384Z",
            studentId: "a8f0cbef-a9d6-4d19-bd5e-cd82dd4557bb",
        },
    ];
    async getByChallenge(challengeNumber, userId) {
        const deliveriesDto = this.deliveries.filter((delivery) => delivery.studentId === userId && delivery.challenge === challengeNumber);
        return Promise.resolve(deliveriesDto.map(convertDeliveryDtoToDelivery));
    }
    async addTextDelivery(deliveryData) {
        const newDelivery = {
            id: crypto.randomUUID(),
            ...deliveryData,
        };
        this.deliveries.push(convertDeliveryToDeliveryDto(newDelivery));
        return Promise.resolve(newDelivery);
    }
}
export default DeliveryInMemoryRepository;
//# sourceMappingURL=DeliveryInMemoryRepository.js.map