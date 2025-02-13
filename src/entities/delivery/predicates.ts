import { DeliveryType, deliveryTypes } from "./types.js";

export const isDeliveryType = (type: string): type is DeliveryType => {
  return deliveryTypes.includes(type as DeliveryType);
};
