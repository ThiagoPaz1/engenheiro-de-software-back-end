import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ImageDataModule } from './modules/imageData/imageData.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost/images`),
    ImageDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
