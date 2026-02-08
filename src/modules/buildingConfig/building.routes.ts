import { Router } from "express";
import { create, findAll, findById } from "./building.controller";


const router = Router();

router.get("/floor", findAll);
router.get("/floor/:floorId", findById);
router.post("/floor/create", create);

export default router;