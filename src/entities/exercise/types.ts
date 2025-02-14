import { Id } from "../../types.js";
import { DeliveryType } from "../delivery/types.js";

export interface ExerciseStructure {
  id: Id;
  name: string;
  challenge: number;
  position: number;
  comments: string;
  type: DeliveryType;
}
