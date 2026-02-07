import { parkingService } from "../../infra/container"
import { Request, Response } from 'express';

export const findTicketById = async(req:Request,res:Response)=>{
    const {id} = req.params
    const ticket = parkingService.getTicketById(id as string)
     if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found' });
    }
     res.status(200).json(ticket);
} 