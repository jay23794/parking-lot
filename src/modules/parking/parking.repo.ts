import { TicketModel } from "./parking.model";
import { ITicketDetail } from "./parking.types";

export class ParkingReposiory {

    async findTicketById(id: string) {
        return TicketModel.findById(id)
    }

    async createTicket(ticket: ITicketDetail) {
        return TicketModel.create(ticket)
    }

    async updateTicket(ticketId: string, updates: Partial<ITicketDetail>) {
        return TicketModel.updateOne(
            { _id: ticketId },
            { $set: updates })
    }

    async checkoutTicket(ticketId: string, amount: Number) {
        return TicketModel.updateOne(
            { _id: ticketId },
            {
                $set: {
                    checkOut: new Date(),
                    isParked: false,
                    amount
                }
            })
    }
}