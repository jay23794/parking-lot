import { parkingService } from "../../infra/container"
import {  Request, Response } from 'express';

export const findTicketById = async (req: Request, res: Response) => {
    const { id } = req.params
    const ticket = await parkingService.getTicketById(id as string)
    res.status(201).json(ticket);
}


