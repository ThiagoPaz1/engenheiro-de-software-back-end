import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { ImageDataService } from './imageData.service';

@Controller('image')
export class ImageDataController {
  constructor(private readonly imageDataService: ImageDataService) {}

  @Post('save')
  async imageSave(@Req() req: Request, @Res() res: Response) {
    const { image } = req.body;
    this.imageDataService.convertImageToBuffer(image);
    return res.json({
      message: 'checkImage',
    });
  }
}
