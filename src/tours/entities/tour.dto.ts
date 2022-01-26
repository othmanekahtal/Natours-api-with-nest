import { ApiProperty } from '@nestjs/swagger';

export class TourDTO {
  @ApiProperty()
  _id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  duration: number;
  @ApiProperty()
  maxGroupSize: number;
  @ApiProperty({ enum: ['easy', 'medium', 'hard'] })
  difficult: string;
  @ApiProperty()
  ratingsAverage: number;
  @ApiProperty()
  ratingsQuantity: number;
  @ApiProperty()
  price: number;
  @ApiProperty()
  priceDiscount: number;
  @ApiProperty()
  summary: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  imageCover: string;
  @ApiProperty()
  images: string[];
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  startDates: Date[];
  @ApiProperty()
  secretTour: boolean;
}
