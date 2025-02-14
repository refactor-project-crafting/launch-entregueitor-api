import { Response } from "express";
import { AuthRequest } from "../../../auth/middlewares/types.js";
import { AuthRequestWithChallenge } from "../../delivery/controller/types.js";

export type RequestWithChallengeAndPosition = AuthRequest<
  Record<string, unknown>,
  Record<string, unknown>,
  { challenge: string; position: string }
>;

export interface ExerciseControllerStructure {
  getByChallenge(req: AuthRequestWithChallenge, res: Response): Promise<void>;
  getOneByChallengeAndPosition(
    req: RequestWithChallengeAndPosition,
    res: Response
  ): Promise<void>;
}
