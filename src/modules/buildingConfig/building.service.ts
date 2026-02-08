import { ParkingConfigRepo } from "./building.repo";
import { IParkingConfig } from "./building.type";

export class ParkingConfigService{
    constructor(private repo:ParkingConfigRepo){}

    async getAllFloor(){
       return await this.repo.findAll()
    }

    async getFloor(floorId:string){
        return  await this.repo.findById(floorId)
    }
    async create(config:IParkingConfig){
        return await this.repo.create(config)
    }
    async updateFloor(floorId:string,floorConfig:Partial<IParkingConfig>){
        return await this.repo.updateFloorCapasity(floorId,floorConfig)
    }

    async updateSpot(floorId:string){
        return await this.repo.updateSpotForFloor(floorId,0,"")
    }
}