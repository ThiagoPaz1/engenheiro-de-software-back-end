import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { ImageDataService } from '../imageData.service';

@Injectable()
export class ValidateImageData implements NestMiddleware {
  constructor(private readonly imageDataService: ImageDataService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { image, compress } = req.body;
    const checkImage = await this.imageDataService.convertImageToBuffer(image);

    if (!image) {
      return res.status(400).json({
        errors: [
          {
            code: '400',
            message: 'Enter a valid image url',
          },
        ],
      });
    }

    if (checkImage.buffer === 'ERR_BAD_REQUEST') {
      return res.status(400).json({
        errors: [
          {
            code: '400',
            message: 'Enter a valid image url',
          },
        ],
      });
    }

    if (!compress || compress < 0.01 || compress > 1) {
      return res.status(400).json({
        errors: [
          {
            code: '400',
            message:
              'Compression field is required, enter a number from 0.01 to 1',
          },
        ],
      });
    }

    next();
  }
}
