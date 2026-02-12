import { VehicleType } from "../parking/parking.types";
import { ParkingConfigRepo } from "./building.repo";
import { IParkingConfig } from "./building.type";

export class ParkingConfigService {
    constructor(private repo: ParkingConfigRepo) { }

    async getAllFloor() {
        return await this.repo.findAll()
    }

    async getFloor(floorId: string) {
        return await this.repo.findById(floorId)
    }
    async create(config: IParkingConfig) {
        return await this.repo.create(config)
    }
    async updateFloor(floorId: string, floorConfig: Partial<IParkingConfig>) {
        return await this.repo.updateFloorCapasity(floorId, floorConfig)
    }

    async updateSpot(floorId: string, vehicleType: VehicleType, isParked: boolean) {
         const mapVehicle: Record<VehicleType, string> = {
            [VehicleType.Car]: "totalCarParked",
            [VehicleType.Bike]: "totalBikesParked"
        }
        const vType = mapVehicle[vehicleType]
        const delta =  isParked ? 1 : -1
        console.log( isParked ? 1 : -1);
        
        return await this.repo.updateSpotForFloor(floorId, vType, delta)
    }
}