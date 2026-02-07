import { parkingService } from "../../infra/container"
import { Request, Response } from 'express';
import { ITicketDetail } from "./parking.types";

export const findTicketById = async (req: Request, res: Response) => {
    const { id } = req.params
    const ticket = await parkingService.getTicketById(id as string)
    res.status(200).json(ticket);
}

export const createTicket = async (req: Request, res: Response) => {
    const ticket = req.body as ITicketDetail
    const create = await parkingService.create(ticket)
    res.status(201).json(create);
}

