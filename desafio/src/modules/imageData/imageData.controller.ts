import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

import { ImageDataService } from './imageData.service';

@Controller('image')
export class ImageDataController {
  constructor(private readonly imageDataService: ImageDataService) {}

  @Post('save')
  imageSave(@Req() req: Request) {
    return 'Testando!!';
  }
}
