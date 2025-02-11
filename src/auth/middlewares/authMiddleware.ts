import chalk from "chalk";
import { NextFunction, Response } from "express";
import supabaseClient from "../../supabase/supabase.js";
import { AuthRequest } from "./types.js";

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

  const { data, error } = await supabaseClient.auth.getUser(token);

  if (error || !data.user) {
    res.status(401).json({ error: "Invalid token" });
    return;
  }

  req.user = data.user;

  next();
};

export default authMiddleware;
