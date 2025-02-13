import { Id } from "../../types.js";

export const deliveryTypes = ["text", "url", "file"] as const;
export type DeliveryType = (typeof deliveryTypes)[number];

export interface Delivery {
  id: Id;
  challenge: number;
  name: string;
  date: Date;
  type: DeliveryType;
  studentId: Id;
}

export interface TextDelivery extends Delivery {
  type: Extract<DeliveryType, "text">;
  text: string;
}

export interface UrlDelivery extends Delivery {
  type: "url";
  url: string;
}

export interface FileDelivery extends Delivery {
  type: "file";
  filename: string;
}

export type FullDelivery = TextDelivery | UrlDelivery | FileDelivery;
