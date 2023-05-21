import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';

import { ImageData } from './schemas/imageData.schema';
import { CreateImageDataExifDto } from './dto/create-imageDataExif.dto';

@Injectable()
export class ImageDataService {
  constructor(
    @InjectModel(ImageData.name) private imageDataModel: Model<ImageData>,
    private readonly httpService: HttpService,
  ) {}

  async convertImageToBuffer(
    image: string,
  ): Promise<{ data: Buffer | string }> {
    try {
      const response = await this.httpService.axiosRef.get(image, {
        responseType: 'arraybuffer',
      });
      const data = await response.data;
      const buffer = Buffer.from(data);

      return { data: buffer };
    } catch (error) {
      const errorData = error as AxiosError;
      console.log('dd =>>', errorData.code);
      return { data: errorData.code };
    }
  }

  async create(
    createImageDataExifDto: CreateImageDataExifDto,
  ): Promise<ImageData> {
    const createdCat = new this.imageDataModel(createImageDataExifDto);
    return createdCat.save();
  }
}
