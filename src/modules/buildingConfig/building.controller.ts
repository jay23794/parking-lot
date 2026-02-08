import { Request, Response } from 'express';
import { parkingConfigService } from '../../infra/container';
import { IParkingConfig } from './building.type';

export const findAll = async(req:Request,res:Response)=>{
    const config = await parkingConfigService.getAllFloor()
    return res.status(200).json(config);
}

export const findById = async(req:Request,res:Response)=>{
    const {floorId}=req.params
    const config = await parkingConfigService.getFloor(floorId as string)
    return res.status(200).json(config);
}

export const create = async(req:Request,res:Response)=>{
    const floorConfig=req.body as IParkingConfig
    const config = await parkingConfigService.create(floorConfig)
     res.status(201).json({
        success:true,
        data:config
    });
}