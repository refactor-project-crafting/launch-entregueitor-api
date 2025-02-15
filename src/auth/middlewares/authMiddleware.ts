import chalk from "chalk";
import { NextFunction, Response } from "express";
import supabaseAuthClient from "../supabase/supabaseAuth.js";
import { AuthRequest } from "./types.js";
import flagsmith from "./flagsmith.js";

const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    console.log(chalk.red("Missing token"));

    res.status(401).json({ error: "Missing token" });
    return;
  }

  const token = authHeader.replace("Bearer ", "");

  const { data, error } = await supabaseAuthClient.auth.getUser(token);

  if (error || !data.user) {
    res.status(401).json({ error: "Invalid token" });
    return;
  }

  const username = data.user.user_metadata.user_name;

  const flags = await flagsmith.getIdentityFlags(username);
  const maxChallengeNumber = flags.getFeatureValue("challenge-number");

  req.user = { ...data.user, maxChallenge: maxChallengeNumber };

  next();
};

export default authMiddleware;
