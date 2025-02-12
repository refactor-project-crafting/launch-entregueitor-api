import { Id } from "../../../types.js";
import { Delivery } from "../types.js";

export interface DeliveryRepository {
  getByChallenge(challengeNumber: number, userId: Id): Promise<Delivery[]>;
}

export default DeliveryRepository;
