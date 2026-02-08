import { Router } from "express";
import ticketRoute from "../src/modules/parking/parking.routes"
import buildingRoute from "../src/modules/buildingConfig/building.routes"

const router = Router();

router.use("/parking", ticketRoute);
router.use("/building",buildingRoute );

export default router;