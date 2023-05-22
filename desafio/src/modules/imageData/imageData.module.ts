import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';

import { ImageDataController } from './imageData.controller';
import { ImageDataService } from './imageData.service';
import { ImageDataRepository } from './imageData.repository';
import { ImageDataSchema, ImageData } from './schemas/imageData.schema';
import { ValidateImageData } from './middlewares/validateImageData.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ImageData.name, schema: ImageDataSchema },
    ]),
    HttpModule,
  ],
  controllers: [ImageDataController],
  providers: [ImageDataService, ImageDataRepository],
})
export class ImageDataModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateImageData).forRoutes('image');
  }
}
