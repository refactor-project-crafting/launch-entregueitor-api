import { Response } from "express";
import {
  AuthRequestWithChallenge,
  DeliveryControllerStructure,
} from "./types.js";
import DeliveryRepository from "../repository/types.js";

class DeliveryController implements DeliveryControllerStructure {
  constructor(private deliveryRepository: DeliveryRepository) {
    this.get = this.get.bind(this);
  }

  async get(req: AuthRequestWithChallenge, res: Response): Promise<void> {
    const { challengeNumber } = req.params;

    const deliveries = await this.deliveryRepository.getByChallenge(
      Number(challengeNumber),
      req.user.id
    );

    res.status(200).json({ deliveries });
  }
}

export default DeliveryController;
