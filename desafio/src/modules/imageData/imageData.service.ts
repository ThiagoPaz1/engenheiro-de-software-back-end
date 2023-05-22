import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { ExifParserFactory } from 'ts-exif-parser';
import * as fs from 'fs/promises';
import * as sharp from 'sharp';

import { ImageDataRepository } from './imageData.repository';
import { CreateImageDataDto } from './dto/create-imageData.dto';

@Injectable()
export class ImageDataService {
  constructor(
    private readonly ImageDataRepository: ImageDataRepository,
    private readonly httpService: HttpService,
  ) {}

  async convertImageToBuffer(
    image: string,
  ): Promise<{ buffer: Buffer | string; imageType?: string }> {
    try {
      const response = await this.httpService.axiosRef.get(image, {
        responseType: 'arraybuffer',
      });
      const imageType = await response.headers['content-type'];
      const data = await response.data;
      const buffer = Buffer.from(data);

      return { buffer, imageType };
    } catch (error) {
      const errorData = error as AxiosError;

      return { buffer: errorData.code };
    }
  }

  async createNewImageData(
    createImageDataDto: CreateImageDataDto,
  ): Promise<any> {
    const { image, compress } = createImageDataDto;
    const data = await this.convertImageToBuffer(image);
    const buffer = data.buffer as Buffer;
    const exifData = ExifParserFactory.create(buffer).parse();
    const create = await this.ImageDataRepository.create({
      width: exifData.imageSize.width,
      height: exifData.imageSize.height,
      imageType: data.imageType,
      deviceModel: exifData.tags.Model,
      xResolution: exifData.tags.XResolution,
      yResolution: exifData.tags.YResolution,
    });
    console.log('Aqui =>>>', create)
    const path = './images/originalImage_and_newVersionImage';

    await fs.writeFile(path + '/originalImg.jpg', buffer);
    await sharp(path + '/originalImg.jpg')
      .resize(400)
      .jpeg({ quality: 50 })
      .toFile(path + '/originalImg_thumb.jpg');

    return {
      ImageDataExif: create,
    };
  }
}
