import { Router } from "express";
import DeliveryController from "../controller/DeliveryController.js";
import DeliveryInMemoryRepository from "../repository/DeliveryInMemoryRepository.js";
const deliveriesRouter = Router();
const deliveryRepository = new DeliveryInMemoryRepository();
const deliveryController = new DeliveryController(deliveryRepository);
deliveriesRouter.get("/", deliveryController.get);
export default deliveriesRouter;
//# sourceMappingURL=deliveriesRouter.js.map