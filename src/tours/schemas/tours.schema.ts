// TODO: create schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TourDocument = Tour & Document;
@Schema()
export class Tour {
  @Prop({
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
    maxlength: [40, 'A tour name must have less or equal then 40 characters'],
    minlength: [10, 'A tour name must have more or equal then 10 characters'],
  })
  name: string;
  @Prop()
  slug: string;
  @Prop({ required: [true, 'A tour must have a duration'] })
  duration: number;
  @Prop({
    required: [true, 'A tour must have a group size'],
  })
  maxGroupSize: number;
  @Prop({
    required: [true, 'A tour must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty is either: easy, medium, difficult',
    },
  })
  difficult: string;
  @Prop({
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
  })
  ratingsAverage: number;
  @Prop({ default: 0 })
  ratingsQuantity: number;
  @Prop({
    required: [true, 'A tour must have a price'],
  })
  price: number;
  @Prop({
    validate: {
      validator: function (val) {
        // this only points to current doc on NEW document creation
        return val < this.price;
      },
      message: 'Discount price ({VALUE}) should be below regular price',
    },
  })
  priceDiscount: number;
  @Prop({
    trim: true,
    required: [true, 'A tour must have a description'],
  })
  summary: string;
  @Prop({
    trim: true,
  })
  description: string;
  @Prop({
    required: [true, 'A tour must have a cover image'],
  })
  imageCover: string;
  @Prop([String])
  images: string[];
  @Prop({
    default: Date.now(),
    select: false,
  })
  createdAt: Date;
  @Prop([Date])
  startDates: Date[];
  @Prop({
    select: false,
    default: false,
  })
  secretTour: boolean;
}

export const TourSchema = SchemaFactory.createForClass(Tour);
