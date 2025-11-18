import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Student {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  age: number;
  @Prop()
  email?: string;
}

export type StudentDocument = Student & Document;
export const StudentScheme = SchemaFactory.createForClass(Student);
