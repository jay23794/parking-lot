import { Router } from "express";
import { create, findAll, findById, update } from "./building.controller";


const router = Router();

router.get("/floor", findAll);
router.get("/floor/:floorId", findById);
router.post("/floor/create", create);
router.patch("/floor/spot", update);
export default router;