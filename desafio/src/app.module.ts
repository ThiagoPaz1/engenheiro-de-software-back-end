import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ImageDataModule } from './modules/imageData/imageData.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://127.0.0.1:27017/images`),
    ImageDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
