import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';

import { ImageData } from './schemas/imageData.schema';
import { CreateImageDataDto } from './dto/create-imageData.dto';

@Injectable()
export class ImageDataService {
  constructor(
    @InjectModel(ImageData.name) private imageDataModel: Model<ImageData>,
    private readonly httpService: HttpService,
  ) {}

  async convertImageToBuffer(image: string): Promise<Buffer> {
    const response = await this.httpService.axiosRef.get(image, {
      responseType: 'arraybuffer',
    });
    const data = await response.data;
    const buffer = Buffer.from(data);

    return buffer;
  }

  async create(createImageDataDto: CreateImageDataDto): Promise<ImageData> {
    const createdCat = new this.imageDataModel(createImageDataDto);
    return createdCat.save();
  }
}
