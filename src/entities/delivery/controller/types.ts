import { Response } from "express";
import { AuthRequest } from "../../../auth/middlewares/types.js";

export type AuthRequestWithChallenge = AuthRequest<{
  challengeNumber: string;
}>;

export interface DeliveryControllerStructure {
  get(req: AuthRequestWithChallenge, res: Response): Promise<void>;
}
