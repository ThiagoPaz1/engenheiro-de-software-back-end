import { Controller, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';

import { ImageDataService } from './imageData.service';
import { CreateImageDataDto } from './dto/create-imageData.dto';

@Controller('image')
export class ImageDataController {
  constructor(private readonly imageDataService: ImageDataService) {}

  @Post('save')
  async imageSave(@Body() req: CreateImageDataDto, @Res() res: Response) {
    const { image, compress } = req;
    const data = await this.imageDataService.createNewImageData({
      image,
      compress,
    });

    return res.json(data);
  }
}
