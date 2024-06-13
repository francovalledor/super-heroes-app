import { Router } from "express";
import imagesController from "../controllers/imagesController";

const router = Router();

router.get("/:name", imagesController.getImage);
router.post("/:name", imagesController.uploadImage);

export default router;
