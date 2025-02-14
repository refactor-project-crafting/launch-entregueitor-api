import { Response } from "express";
import {
  AuthRequestWithChallenge,
  DeliveryControllerStructure,
} from "./types.js";
import DeliveryRepository from "../repository/types.js";
import { DeliveryType, FullDelivery } from "../types.js";
import { WithoutId } from "../../../types.js";
import { isTextDelivery, isUrlDelivery } from "../predicates.js";

class DeliveryController implements DeliveryControllerStructure {
  constructor(private deliveryRepository: DeliveryRepository) {
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  async get(
    req: AuthRequestWithChallenge<unknown, { exerciseId: string }>,
    res: Response
  ): Promise<void> {
    const { challengeNumber } = req.params;
    const { exerciseId } = req.query;

    const deliveries = await this.deliveryRepository.getByChallenge(
      Number(challengeNumber),
      exerciseId,
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
      type,
      challenge: Number(challengeNumber),
      exerciseId,
    };

    if (isTextDelivery(deliveryData)) {
      const newTextDelivery = await this.deliveryRepository.addTextDelivery(
        req.user.id,
        deliveryData
      );

      res.status(201).json({ newDelivery: newTextDelivery });
      return;
    }

    if (isUrlDelivery(deliveryData)) {
      const newUrlDelivery = await this.deliveryRepository.addUrlDelivery(
        req.user.id,
        deliveryData
      );

      res.status(201).json({ newDelivery: newUrlDelivery });
      return;
    }
  }
}

export default DeliveryController;
