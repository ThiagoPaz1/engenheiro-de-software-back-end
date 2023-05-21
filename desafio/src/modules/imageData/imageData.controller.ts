import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import * as fs from 'fs/promises';

import { ImageDataService } from './imageData.service';

@Controller('image')
export class ImageDataController {
  constructor(private readonly imageDataService: ImageDataService) {}

  @Post('save')
  async imageSave(@Req() req: Request, @Res() res: Response) {
    return res.json({
      message: 'checkImage',
    });
  }
}
