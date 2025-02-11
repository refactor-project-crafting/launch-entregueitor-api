import { Request, Response } from "express";

export interface DeliveryControllerStructure {
  get(req: Request, res: Response): Promise<void>;
}
