import { ParkingReposiory } from "../modules/parking/parking.repo";
import { ParkingService } from "../modules/parking/parking.service";

const _parkingReposiory = new ParkingReposiory();
export const parkingService = new ParkingService(_parkingReposiory);