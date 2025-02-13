import crypto from "node:crypto";
import { Id, WithoutId } from "../../../types.js";
import { Delivery, TextDelivery } from "../types.js";
import DeliveryRepository from "./types.js";
import { DeliveryDto } from "../dto/types.js";
import {
  convertDeliveryDtoToDelivery,
  convertDeliveryToDeliveryDto,
} from "../dto/mappers.js";

class DeliveryInMemoryRepository implements DeliveryRepository {
  private readonly deliveries: DeliveryDto[] = [
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

  public async getByChallenge(
    challengeNumber: number,
    userId: Id
  ): Promise<Delivery[]> {
    const deliveriesDto = this.deliveries.filter(
      (delivery) =>
        delivery.studentId === userId && delivery.challenge === challengeNumber
    );

    return Promise.resolve(deliveriesDto.map(convertDeliveryDtoToDelivery));
  }

  public async addTextDelivery(
    deliveryData: WithoutId<TextDelivery>
  ): Promise<TextDelivery> {
    const newDelivery: TextDelivery = {
      id: crypto.randomUUID(),
      ...deliveryData,
    };

    this.deliveries.push(convertDeliveryToDeliveryDto(newDelivery));

    return Promise.resolve(newDelivery);
  }
}

export default DeliveryInMemoryRepository;
