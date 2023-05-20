import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ImageDataDocument = HydratedDocument<ImageData>;

@Schema()
export class ImageData {
  @Prop()
  imageType: string;

  @Prop()
  width: string;

  @Prop()
  height: string;
}

export const ImageDataSchema = SchemaFactory.createForClass(ImageData);
