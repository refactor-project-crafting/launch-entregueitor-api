import { NextFunction, Response } from "express";
import { AuthRequestWithChallenge } from "../controller/types.js";

const checkChallenge = (
  req: AuthRequestWithChallenge,
  res: Response,
  next: NextFunction
): void => {
  const { challengeNumber } = req.params;

  if (
    req.user.role === "student" &&
    req.user.maxChallenge < Number(challengeNumber)
  ) {
    res.status(403).json({ error: "Forbidden challenge" });
    return;
  }

  next();
};

export default checkChallenge;
