import { NextFunction, Response } from "express";
import { AuthRequest } from "./types.js";

const adminMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.user.role !== "admin") {
    res.status(403).json({ error: "Not allowed" });
    return;
  }

  next();
};

export default adminMiddleware;
