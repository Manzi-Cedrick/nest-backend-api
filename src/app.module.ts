/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/keys';
import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';
import { ItemsService } from './items/items.service';

@Module({
  imports: [ItemsModule,MongooseModule.forRoot(config.mongoURL)],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
