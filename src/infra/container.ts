import { ParkingConfigRepo } from "../modules/buildingConfig/building.repo";
import { ParkingConfigService } from "../modules/buildingConfig/building.service";
import { ParkingReposiory } from "../modules/parking/parking.repo";
import { ParkingService } from "../modules/parking/parking.service";

const _parkingReposiory = new ParkingReposiory();
const _parkingConfig = new ParkingConfigRepo()

export const parkingService = new ParkingService(_parkingReposiory);
export const parkingConfigService = new ParkingConfigService(_parkingConfig);