import { model, Schema } from "mongoose";
import { IParkingConfig } from "./building.type";

const ParkingConfigSchema = new Schema<IParkingConfig>({
    maxCarCapasity: { type: Number, required: true,min:0 },
    maxBikeCapasity: { type: Number, required: true,min:0 },
    totalBikesParked: { type: Number, required: true,default:0,min:0 },
    totalCarParked: { type: Number, required: true,default:0,min:0 },    
})

export const ParkingConfigModel =  model("parkingConfig",ParkingConfigSchema)