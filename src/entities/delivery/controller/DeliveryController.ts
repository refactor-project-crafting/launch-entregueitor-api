import { Request, Response } from "express";
import { DeliveryControllerStructure } from "./types.js";
import { Delivery } from "../types.js";

class DeliveryController implements DeliveryControllerStructure {
  constructor() {
    this.get = this.get.bind(this);
  }

  async get(_req: Request, res: Response): Promise<void> {
    const deliveries: Delivery[] = [
      {
        id: 1,
        challenge: 2,
        name: "switch",
        studentId: 1,
      },
      {
        id: 2,
        challenge: 2,
        name: "bucles",
        studentId: 1,
      },
    ];

    res.status(200).json({ deliveries });
  }
}

export default DeliveryController;
