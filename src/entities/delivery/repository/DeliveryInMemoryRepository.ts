import { Id } from "../../../types.js";
import { Delivery } from "../types.js";
import DeliveryRepository from "./types.js";

class DeliveryInMemoryRepository implements DeliveryRepository {
  private readonly deliveries: Delivery[] = [
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

  public async getByChallenge(
    challengeNumber: number,
    userId: Id
  ): Promise<Delivery[]> {
    const deliveries = this.deliveries.filter(
      (delivery) =>
        delivery.studentId === userId && delivery.challenge === challengeNumber
    );

    return Promise.resolve(deliveries);
  }
}

export default DeliveryInMemoryRepository;
