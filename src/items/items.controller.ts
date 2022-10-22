/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsInterface } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService:ItemsService){};
    @Get()
    async findAll(): Promise<ItemsInterface[]>{
        return this.itemsService.findAll();
    }
    @Get(':id')
    async findOne(@Param() param:any): Promise<ItemsInterface>{
        return this.itemsService.findOne(param.id);
    }
    @Post('/create')
    async createItem (@Body () createitemdto:CreateItemDto):Promise<ItemsInterface>{
        return this.itemsService.createOne(createitemdto);
    }
    @Delete('/delete/:id')
    async deleteItem (@Param('id') id:string):Promise<void>{
        return this.itemsService.deleteOne(id);
    }
    @Put('/update/:id')
    async updateItem (@Body () updateitemdto:CreateItemDto,@Param('id') id:string):Promise<ItemsInterface>{
        return this.itemsService.updateOne(id,updateitemdto);
    }
}
