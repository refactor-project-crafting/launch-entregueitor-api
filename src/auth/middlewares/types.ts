import { User } from "@supabase/supabase-js";
import { Request } from "express";
import { ParamsDictionary, Query } from "express-serve-static-core";

export interface AuthRequest<
  ParamType = ParamsDictionary,
  BodyType = Record<string, unknown>,
  QueryType = Query
> extends Request<ParamType, Record<string, unknown>, BodyType, QueryType> {
  user: User & {
    maxChallenge: number;
  };
}
