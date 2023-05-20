import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ImageData } from './schemas/imageData.schema';
import { CreateImageDataDto } from './dto/create-imageData.dto';

@Injectable()
export class ImageDataRepository {
  constructor(
    @InjectModel(ImageData.name) private imageDataModel: Model<ImageData>,
  ) {}

  async create(createImageDataDto: CreateImageDataDto): Promise<ImageData> {
    const createdCat = new this.imageDataModel(createImageDataDto);
    return createdCat.save();
  }
}
