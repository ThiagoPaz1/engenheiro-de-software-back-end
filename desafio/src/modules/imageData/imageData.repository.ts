import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ImageData } from './schemas/imageData.schema';
import { CreateImageDataExifDto } from './dto/create-imageDataExif.dto';
import { ImageDataResponse } from './types';

@Injectable()
export class ImageDataRepository {
  constructor(
    @InjectModel(ImageData.name) private imageDataModel: Model<ImageData>,
  ) {}

  async create(
    createImageDataExifDto: CreateImageDataExifDto,
  ): Promise<ImageDataResponse> {
    const createdImageData = new this.imageDataModel(createImageDataExifDto);
    const data = await createdImageData.save();

    return {
      id: String(data._id),
      imageType: data.imageType,
      width: data.width,
      height: data.height,
      deviceModel: data.deviceModel,
      xResolution: data.xResolution,
      yResolution: data.yResolution,
    };
  }
}
