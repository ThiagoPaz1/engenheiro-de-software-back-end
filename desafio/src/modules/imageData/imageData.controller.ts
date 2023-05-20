import { Controller, Post } from '@nestjs/common';

import { ImageDataService } from './imageData.service';

@Controller('resizeImage')
export class ImageDataController {
  constructor(private readonly imageDataService: ImageDataService) {}

  @Post()
  resizeImage() {
    return 'Testando!';
  }
}
