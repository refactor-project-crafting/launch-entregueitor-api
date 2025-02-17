import { Request, Response } from "express";

export interface StudentControllerStructure {
  get(req: Request, res: Response): Promise<void>;
}
