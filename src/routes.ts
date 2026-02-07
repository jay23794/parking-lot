import { Router } from "express";
import ticketRoute from "../src/modules/parking/parking.routes"

const router = Router();

router.use("/parking", ticketRoute);


export default router;