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
    async findById(id: string):Promise<IParkingConfig> {
        try {
          return await ParkingConfigModel.findById(id) as IParkingConfig
        } catch (error) {
            throw handleMongooseError(error)
        }
    }

    async findAll():Promise<IParkingConfig[]> {
        try {
           return await ParkingConfigModel.find({})
        } catch (error) {
            throw handleMongooseError(error)
        }
    }

    async updateSpotForFloor(floorId: string, spot: number, vehicle: string) {
        try {
            await ParkingConfigModel.updateOne({
                _id: floorId
            }, {
                $inc: { [vehicle]: spot }

            })
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