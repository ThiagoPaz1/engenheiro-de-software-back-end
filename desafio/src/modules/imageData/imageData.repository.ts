import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ImageData } from './schemas/imageData.schema';
import { CreateImageDataExifDto } from './dto/create-imageDataExif.dto';

@Injectable()
export class ImageDataRepository {
  constructor(
    @InjectModel(ImageData.name) private imageDataModel: Model<ImageData>,
  ) {}

  async create(
    createImageDataExifDto: CreateImageDataExifDto,
  ): Promise<ImageData> {
    const createdCat = new this.imageDataModel(createImageDataExifDto);
    return createdCat.save();
  }
}
