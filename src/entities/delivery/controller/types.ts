import { Response } from "express";
import { AuthRequest } from "../../../auth/middlewares/types.js";
import { Query } from "express-serve-static-core";
import { DeliveryType } from "../types.js";

export type AuthRequestWithChallenge<
  BodyType = Record<string, unknown>,
  Params = Query
> = AuthRequest<
  {
    challengeNumber: string;
  },
  BodyType,
  Params
>;

export interface DeliveryControllerStructure {
  get(
    req: AuthRequestWithChallenge<unknown, { exerciseId: string }>,
    res: Response
  ): Promise<void>;
  post(
    req: AuthRequestWithChallenge<{ type: DeliveryType }>,
    res: Response
  ): Promise<void>;
  postFile(
    req: AuthRequestWithChallenge<{ type: DeliveryType }>,
    res: Response
  ): Promise<void>;
}
