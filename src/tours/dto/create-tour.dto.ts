import { ApiProperty } from '@nestjs/swagger';

export class CreateTourDto {
  @ApiProperty({
    description: 'the title of the tour',
    default: 'title tour',
  })
  name: string;
  @ApiProperty({
    description: 'duration of the tour',
    default: 10,
  })
  duration: number;
  @ApiProperty({
    description: 'max group size of the tour',
    default: 2,
  })
  maxGroupSize: number;
  @ApiProperty({
    description: 'set the difficult of the tour',
    default: 'easy',
  })
  difficult: string;
  @ApiProperty({
    description: 'set rating of average the tour',
    default: 3.4,
  })
  ratingsAverage: number;
  @ApiProperty({
    description: 'set the rating quality of the tour',
    default: 5,
  })
  ratingsQuantity: number;
  @ApiProperty({
    description: 'set the price of the tour',
    default: 0,
  })
  price: number;
  @ApiProperty({
    description: 'set the price of the price discount',
    default: 0,
  })
  priceDiscount: number;
  @ApiProperty({
    description: 'set the summary of the summary',
    default: 'summary',
  })
  summary: string;
  @ApiProperty({
    description: 'set the description in tour',
    default: 'description of the tour',
  })
  description: string;
  @ApiProperty({
    description: 'set image cover of the image tour',
    default: 'src.png',
  })
  imageCover: string;
  @ApiProperty({
    description: 'set images of the tour',
    default: ['src.png', 'src1.png'],
  })
  images: string[];
  @ApiProperty({
    description: 'set created at of the tour',
    default: Date.now(),
  })
  createdAt: Date;
  @ApiProperty({
    description: 'set start dates of the tour',
    default: [Date.now(), Date.now()],
  })
  startDates: Date[];
  @ApiProperty({
    description: 'set secret tour of the tour',
    default: false,
  })
  secretTour: boolean;
}
