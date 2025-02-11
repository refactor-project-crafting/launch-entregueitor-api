import { Id } from "../../types.js";

export interface Delivery {
  id: Id;
  challenge: number;
  name: string;
  studentId: Id;
}
