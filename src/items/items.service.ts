/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ItemsInterface } from './interfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
 
@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModelData:Model<ItemsInterface>){}
    
    async findAll(): Promise<ItemsInterface[]>{
        return await this.itemModelData.find();
    }
    async findOne(id:string):Promise<ItemsInterface>{
        return await this.itemModelData.findById({_id:id});
    }

}
