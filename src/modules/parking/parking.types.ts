import { Document } from "mongoose";

export enum VehicleType {
    Car = "CAR",
    Bike = "BIKE"
}
export interface ITicketDetail extends Document{
    id?: string
    checkIn: Date
    checkOut:Date
    floor: string
    spot: string
    vehicleNumber: string
    isParked: boolean
    amount:number
    vehicleType:VehicleType
}