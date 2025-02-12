import { User } from "@supabase/supabase-js";
import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";

export interface AuthRequest<ParamType = ParamsDictionary>
  extends Request<ParamType> {
  user: User & {
    maxChallenge: number;
  };
}
