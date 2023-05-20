import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ImageDataModule } from './modules/imageData/imageData.module';
import { ValidateImageData } from './modules/imageData/middlewares/validateImageData.middleware';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost/images`),
    ImageDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateImageData).forRoutes('image');
  }
}
