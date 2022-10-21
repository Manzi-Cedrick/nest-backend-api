/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsInterface } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService:ItemsService){};
    @Get()
    findAll(): ItemsInterface[]{
        return this.itemsService.findAll();
    }
    @Get(':id')
    findOne(@Param() param:any): ItemsInterface{
        return this.itemsService.findOne(param.id);
    }
    @Post('/create')
    createItem (@Body () createitemdto:CreateItemDto):string{
        return `Name:${createitemdto.name} , The Description:${createitemdto.description}`
    }
    @Delete(':id')
    deleteItem (@Param('id') id):string{
        return `Delete the ${id} item`;
    }
    @Put(':id')
    updateItem (@Body () updateitemdto:CreateItemDto,@Param('id') id):string{
        return `Update- ${id} Name:${updateitemdto.name} , The Description:${updateitemdto.description}`
    }
}
