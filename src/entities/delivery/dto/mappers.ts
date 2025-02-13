import { isDeliveryType } from "../predicates.js";
import { Delivery } from "../types.js";
import { DeliveryDto } from "./types.js";

export const convertDeliveryDtoToDelivery = (
  deliveryDto: DeliveryDto
): Delivery => {
  const { date, type, ...deliveryDtoData } = deliveryDto;

  if (!isDeliveryType(type)) {
    throw new Error("Wrong delivery type");
  }

  const delivery: Delivery = {
    ...deliveryDtoData,
    date: new Date(date),
    type: type,
  };

  return delivery;
};

export const convertDeliveryToDeliveryDto = (
  delivery: Delivery
): DeliveryDto => {
  const { date, ...deliveryData } = delivery;

  const deliveryDto: DeliveryDto = {
    ...deliveryData,
    date: date.toISOString(),
  };

  return deliveryDto;
};
