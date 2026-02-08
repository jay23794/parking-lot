import { handleMongooseError } from "../../config/mongo.error";
import { ParkingConfigModel } from "./building.model";
import { IParkingConfig } from "./building.type";

export class ParkingConfigRepo {
    async create(config: IParkingConfig) {
        try {
            await ParkingConfigModel.create(config)
        } catch (error) {
            throw handleMongooseError(error)
        }
    }
    async findById(id: string) {
        try {
            await ParkingConfigModel.findById(id)
        } catch (error) {
            throw handleMongooseError(error)
        }
    }

    async findAll() {
        try {
            await ParkingConfigModel.find({})
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