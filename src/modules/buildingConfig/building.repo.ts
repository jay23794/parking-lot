import { handleMongooseError } from "../../config/mongo.error";
import { ParkingConfigModel } from "./building.model";
import { IParkingConfig } from "./building.type";

export class ParkingConfigRepo {
    async create(config: IParkingConfig) {
        try {
            await ParkingConfigModel.create(config)
        } catch (error) {
            console.log("---");

            throw handleMongooseError(error)
        }
    }
    async findById(id: string): Promise<IParkingConfig> {
        try {
            return await ParkingConfigModel.findById(id) as IParkingConfig
        } catch (error) {
            throw handleMongooseError(error)
        }
    }

    async findAll(): Promise<IParkingConfig[]> {
        try {
            return await ParkingConfigModel.find({})
        } catch (error) {
            throw handleMongooseError(error)
        }
    }

    /*
     * We use MongoDB’s aggregation pipeline update with $cond to perform conditional atomic updates. 
     * This ensures correctness under high concurrency and prevents counters from going 
     * below zero without needing transactions or locks.
     */
   async updateSpotForFloor(id: string, vehicle: string, spot: number,) {
        try {

            await ParkingConfigModel.updateOne(
                { _id: id },
                [{
                    $set: {
                        [vehicle]: {
                            $cond: [
                                {
                                    $and: [
                                        { $lt: [spot, 0] },
                                        { $lte: [`$${vehicle}`, 0] }
                                    ]
                                },
                                 0,
                                { $add: [`$${vehicle}`, spot] } 
                            ],

                        }
                    }
                }],
                { updatePipeline: true }
            )
           
        } catch (error) {
            throw handleMongooseError(error)
        }
    }

    // Admin only
    async updateFloorCapasity(floorId: string, parkingConfig: Partial<IParkingConfig>) {
        try {
            await ParkingConfigModel.updateOne(
                { _id: floorId },
                { $set: parkingConfig })
        } catch (error) {
            throw handleMongooseError(error)
        }
    }

}