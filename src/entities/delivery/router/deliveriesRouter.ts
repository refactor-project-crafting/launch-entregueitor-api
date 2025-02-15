import { Router } from "express";
import DeliveryController from "../controller/DeliveryController.js";
import DeliveryDrizzleRepository from "../repository/DeliveryDrizzleRepository.js";
import checkChallenge from "../middleware/checkChallenge.js";
import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({ storage });

const deliveriesRouter = Router();

const deliveryRepository = new DeliveryDrizzleRepository();
const deliveryController = new DeliveryController(deliveryRepository);

deliveriesRouter.get(
  "/:challengeNumber",
  checkChallenge,
  deliveryController.get
);
deliveriesRouter.post(
  "/file/:challengeNumber",
  checkChallenge,
  upload.single("file"),
  deliveryController.postFile
);
deliveriesRouter.post(
  "/:challengeNumber",
  checkChallenge,
  deliveryController.post
);

export default deliveriesRouter;
