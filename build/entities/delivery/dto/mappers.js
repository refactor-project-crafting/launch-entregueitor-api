import { isDeliveryType } from "../predicates.js";
export const convertDeliveryDtoToDelivery = (deliveryDto) => {
    const { date, type, ...deliveryDtoData } = deliveryDto;
    if (!isDeliveryType(type)) {
        throw new Error("Wrong delivery type");
    }
    const delivery = {
        ...deliveryDtoData,
        date: new Date(date),
        type: type,
    };
    return delivery;
};
export const convertDeliveryToDeliveryDto = (delivery) => {
    const { date, ...deliveryData } = delivery;
    const deliveryDto = {
        ...deliveryData,
        date: date.toISOString(),
    };
    return deliveryDto;
};
//# sourceMappingURL=mappers.js.map