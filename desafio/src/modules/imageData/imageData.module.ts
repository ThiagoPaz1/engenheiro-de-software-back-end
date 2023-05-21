import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';

import { ImageDataController } from './imageData.controller';
import { ImageDataService } from './imageData.service';
import { ImageDataSchema, ImageData } from './schemas/imageData.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ImageData.name, schema: ImageDataSchema },
    ]),
    HttpModule,
  ],
  controllers: [ImageDataController],
  providers: [ImageDataService],
})
export class ImageDataModule {}
