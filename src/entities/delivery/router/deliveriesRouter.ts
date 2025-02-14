import { Router } from "express";
import DeliveryController from "../controller/DeliveryController.js";
import DeliveryDrizzleRepository from "../repository/DeliveryDrizzleRepository.js";
import checkChallenge from "../middleware/checkChallenge.js";

const deliveriesRouter = Router();

const deliveryRepository = new DeliveryDrizzleRepository();
const deliveryController = new DeliveryController(deliveryRepository);

deliveriesRouter.get(
  "/:challengeNumber",
  checkChallenge,
  deliveryController.get
);
deliveriesRouter.post(
  "/:challengeNumber",
  checkChallenge,
  deliveryController.post
);

export default deliveriesRouter;
