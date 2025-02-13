import { Response } from "express";
import { AuthRequest } from "../../../auth/middlewares/types.js";

export type RequestWithChallengeAndPosition = AuthRequest<
  Record<string, unknown>,
  Record<string, unknown>,
  { challenge: string; position: string }
>;

export interface ExerciseControllerStructure {
  getOneByChallengeAndPosition(
    req: RequestWithChallengeAndPosition,
    res: Response
  ): Promise<void>;
}
