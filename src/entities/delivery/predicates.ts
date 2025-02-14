import {
  Delivery,
  DeliveryType,
  deliveryTypes,
  TextDelivery,
  UrlDelivery,
} from "./types.js";

export const isDeliveryType = (type: string): type is DeliveryType => {
  return deliveryTypes.includes(type as DeliveryType);
};

export const isTextDelivery = (
  delivery: Partial<Delivery>
): delivery is TextDelivery => {
  return delivery.type === "text";
};

export const isUrlDelivery = (
  delivery: Partial<Delivery>
): delivery is UrlDelivery => {
  return delivery.type === "url";
};
