import { Router } from "express";
import DeliveryController from "../controller/DeliveryController.js";

const deliveriesRouter = Router();

const deliveryController = new DeliveryController();

deliveriesRouter.get("/", deliveryController.get);

export default deliveriesRouter;
