import { Id, WithoutId } from "../../../types.js";
import { Delivery, TextDelivery } from "../types.js";

export interface DeliveryRepository {
  getByChallenge(challengeNumber: number, userId: Id): Promise<Delivery[]>;
  addTextDelivery(
    userId: Id,
    deliveryData: WithoutId<TextDelivery>
  ): Promise<TextDelivery>;
}

export default DeliveryRepository;
