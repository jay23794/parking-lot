export interface IParkingConfig extends Document{
    id?: string
    floorNumber:number
    maxCarCapasity:number
    maxBikeCapasity:number
    totalBikesParked:number
    totalCarParked:number    
}