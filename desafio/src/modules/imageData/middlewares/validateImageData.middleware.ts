import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateImageData implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const { image, compress } = req.body;

    if (!image) {
      return res.status(400).json({
        errors: [
          {
            code: '400',
            message: 'Image Url is required',
          },
        ],
      });
    }

    if (!compress || compress < 0.1 || compress > 1) {
      return res.status(400).json({
        errors: [
          {
            code: '400',
            message:
              'Compression field is required, enter a number from 0.1 to 1',
          },
        ],
      });
    }

    next();
  }
}
