import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SportActivityDocument = HydratedDocument<SportActivity>;

@Schema()
export class SportActivity {
  @Prop()
  name: string;

  @Prop()
  ageGroup: string;

  @Prop()
  description: string;
}

export const SportActivitySchema = SchemaFactory.createForClass(SportActivity);
