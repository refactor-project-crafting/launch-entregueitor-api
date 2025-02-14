import { Response } from "express";
import {
  AuthRequestWithChallenge,
  DeliveryControllerStructure,
} from "./types.js";
import DeliveryRepository from "../repository/types.js";
import {
  Delivery,
  DeliveryType,
  FullDelivery,
  TextDelivery,
} from "../types.js";
import { WithoutId } from "../../../types.js";

class DeliveryController implements DeliveryControllerStructure {
  constructor(private deliveryRepository: DeliveryRepository) {
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  async get(req: AuthRequestWithChallenge, res: Response): Promise<void> {
    const { challengeNumber } = req.params;

    const deliveries = await this.deliveryRepository.getByChallenge(
      Number(challengeNumber),
      req.user.id
    );

    res.status(200).json({ deliveries });
  }

  async post(
    req: AuthRequestWithChallenge<
      WithoutId<FullDelivery>,
      { type: DeliveryType; exerciseId: string }
    >,
    res: Response
  ): Promise<void> {
    const { challengeNumber } = req.params;
    const { type, exerciseId } = req.query;

    const deliveryData: WithoutId<FullDelivery> = {
      ...req.body,
      type: "text",
      challenge: Number(challengeNumber),
      exerciseId,
    };

    if (isTextDelivery(deliveryData, type)) {
      const newTextDelivery = await this.deliveryRepository.addTextDelivery(
        req.user.id,
        deliveryData
      );

      res.status(201).json({ newDelivery: newTextDelivery });
    }
  }
}

const isTextDelivery = (
  delivery: Partial<Delivery>,
  type: DeliveryType
): delivery is TextDelivery => {
  return type === "text";
};

export default DeliveryController;
