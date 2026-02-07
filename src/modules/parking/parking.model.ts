import { model, Schema } from "mongoose";
import { ITicketDetail, VehicleType } from "./parking.types";

const TicketShchema = new Schema<ITicketDetail>({
    checkIn: { type: Date, required: true,default: new Date() },
    checkOut: { type: Date, required: false },
    floor: { type: String, required: true },
    spot: { type: String, required: true },
    vehicleNumber: { type: String, required: true },
    isParked: { type: Boolean, default: true },
    amount: { type: Number, required: true },
    vehicleType: { type: String, enum: Object.values(VehicleType) }
})

export const TicketModel = model("Ticket",TicketShchema)