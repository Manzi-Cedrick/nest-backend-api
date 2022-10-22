/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ItemsInterface } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items:ItemsInterface[]=[
        {
            id : "sdjsfa2234",
            name : "item1",
            quantity:23402,
            description:"Item One"
        },
        {
            id : "asdf23901ksadf",
            name : "item2",
            quantity:23402,
            description:"Item Two"
        },
        {
            id : "asd023-ldsaf;lkasdf",
            name : "item3",
            quantity:23402,
            description:"Item Three"
        },
    ];
    findAll():ItemsInterface[]{
        return this.items;
    }
    findOne(id:string):ItemsInterface{
        return this.items.find((item:any) => item.id === id)
    }

}
