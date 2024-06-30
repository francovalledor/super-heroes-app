import { Router } from "express";
import superHerosController from "../controllers/superHerosController";

const router = Router();
router.get("/", superHerosController.getAll);
router.post("/", superHerosController.addSuperHero);

export default router;
