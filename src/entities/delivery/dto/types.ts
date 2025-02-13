import { Delivery } from "../types.js";

export type DeliveryDto = Omit<Delivery, "date" | "type"> & {
  date: string;
  type: string;
};
