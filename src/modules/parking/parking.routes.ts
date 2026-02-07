import {Router } from "express";
import { findTicketById } from "./parking.controller";

const router = Router()

router.get("/ticket/:ticketId", findTicketById)
export default router;