import { Schema, SchemaTypes } from 'mongoose';
import { Prop, Types } from '@nestjs/mongoose';

@Schema()
export class AbstractSchema {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;
}
