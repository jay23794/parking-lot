import {Router } from "express";
import { createTicket, findTicketById } from "./parking.controller";

const router = Router()

router.get("/ticket/:ticketId", findTicketById)
router.post("/ticket/create", createTicket)
export default router;