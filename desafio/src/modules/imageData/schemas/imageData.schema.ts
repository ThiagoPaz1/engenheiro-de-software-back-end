import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ImageDataDocument = HydratedDocument<ImageData>;

@Schema()
export class ImageData {
  @Prop()
  imageType: string;

  @Prop()
  width: number;

  @Prop()
  height: number;

  @Prop()
  deviceModel: string;

  @Prop()
  xResolution: number;

  @Prop()
  yResolution: number;
}

export const ImageDataSchema = SchemaFactory.createForClass(ImageData);
