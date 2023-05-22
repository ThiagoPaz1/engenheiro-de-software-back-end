import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { ImageDataModule } from './modules/imageData/imageData.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://${process.env.HOST}/${process.env.DB_NAME}`,
    ),
    ImageDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
