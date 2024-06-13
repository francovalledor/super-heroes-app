import { Router } from "express";
import imagesController from "../controllers/imagesController";

const router = Router();

router.get("/images/:name", imagesController.getImage);
router.post("/images/:name", imagesController.uploadImage);

export default router;
