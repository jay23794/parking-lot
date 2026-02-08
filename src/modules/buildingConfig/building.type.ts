export interface IParkingConfig extends Document{
    id?: string
    maxCarCapasity:number
    maxBikeCapasity:number
    totalBikesParked:number
    totalCarParked:number    
}