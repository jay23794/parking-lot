import { handleMongooseError } from "../../config/mongo.error";
import { TicketModel } from "./parking.model";
import { ITicketDetail } from "./parking.types";


//Repository should only handle database errors, not business logic.
export class ParkingReposiory {

    async findTicketById(id: string) {
        try {
            return await TicketModel.findById(id);
        } catch (error) {
            throw handleMongooseError(error);
        }
    }

    async createTicket(ticket: ITicketDetail) {
        try {
            return TicketModel.create(ticket)
        } catch (error) {
            throw handleMongooseError(error);
        }

    }

    async updateTicket(ticketId: string, updates: Partial<ITicketDetail>) {
        try {
            return TicketModel.updateOne(
                { _id: ticketId },
                { $set: updates })
        } catch (error) {
            throw handleMongooseError(error);
        }

    }

    async checkoutTicket(ticketId: string, amount: Number) {
        try {
            return TicketModel.updateOne(
            { _id: ticketId },
            {
                $set: {
                    checkOut: new Date(),
                    isParked: false,
                    amount
                }
            })
        } catch (error) {
            throw handleMongooseError(error);
        }
       
    }
}