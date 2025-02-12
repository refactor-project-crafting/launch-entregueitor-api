import { Router } from "express";
import DeliveryController from "../controller/DeliveryController.js";
import DeliveryInMemoryRepository from "../repository/DeliveryInMemoryRepository.js";
import checkChallenge from "../middleware/checkChallenge.js";

const deliveriesRouter = Router();

const deliveryRepository = new DeliveryInMemoryRepository();
const deliveryController = new DeliveryController(deliveryRepository);

deliveriesRouter.get(
  "/:challengeNumber",
  checkChallenge,
  deliveryController.get
);

export default deliveriesRouter;
