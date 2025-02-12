import { Response } from "express";
import { DeliveryControllerStructure } from "./types.js";
import DeliveryRepository from "../repository/types.js";
import { AuthRequest } from "../../../auth/middlewares/types.js";

class DeliveryController implements DeliveryControllerStructure {
  constructor(private deliveryRepository: DeliveryRepository) {
    this.get = this.get.bind(this);
  }

  async get(req: AuthRequest, res: Response): Promise<void> {
    const deliveries = await this.deliveryRepository.getByChallenge(
      req.user.maxChallenge,
      req.user.id
    );

    res.status(200).json({ deliveries });
  }
}

export default DeliveryController;
