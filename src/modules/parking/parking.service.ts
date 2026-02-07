import { NotFoundError, ValidationError } from "../../errors";

import { ParkingReposiory } from "./parking.repo";
import { ITicketDetail } from "./parking.types";

export class ParkingService {
    constructor(private repo: ParkingReposiory) { }

    async create(ticket: ITicketDetail) {
        await this.repo.createTicket(ticket)
    }

    async getTicketById(id: string) {
        if (!id) throw new ValidationError('ID required');

        const ticket = await this.repo.findTicketById(id)
        if (!ticket) {
            throw new NotFoundError();
        }
    }

    async checkout(id: string) {
        // calculate amount
        await this.repo.checkoutTicket(id, 50)
    }


} 