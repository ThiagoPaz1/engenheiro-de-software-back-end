import { ImageData } from '../schemas/imageData.schema';

export interface ImageDataResponse extends ImageData {
  id: string;
}
