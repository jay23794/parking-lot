import {Router } from "express";
import { findTicketById } from "./parking.controller";

const router = Router()

router.get("/ticket/create", findTicketById)
export default router;