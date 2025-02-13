import { Id } from "../../types.js";
import { DeliveryType } from "../delivery/types.js";

export interface Exercise {
  id: Id;
  name: string;
  challenge: number;
  position: number;
  type: DeliveryType;
}
