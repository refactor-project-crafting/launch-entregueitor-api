import { Id, WithoutId } from "../../../types.js";
import { Delivery, FileDelivery, TextDelivery, UrlDelivery } from "../types.js";

export interface DeliveryRepository {
  getByChallenge(
    challengeNumber: number,
    exerciseId: Id,
    userId: Id
  ): Promise<Delivery[]>;
  addTextDelivery(
    userId: Id,
    deliveryData: WithoutId<TextDelivery>
  ): Promise<TextDelivery>;
  addUrlDelivery(
    userId: Id,
    deliveryData: WithoutId<UrlDelivery>
  ): Promise<UrlDelivery>;
  addFileDelivery(
    userId: Id,
    deliveryData: WithoutId<FileDelivery>
  ): Promise<FileDelivery>;
}

export default DeliveryRepository;
