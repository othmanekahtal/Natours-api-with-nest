import { ApiProperty } from '@nestjs/swagger';
import { TourDTO } from './tour.dto';

export class ToursResponse {
  @ApiProperty()
  result: number;
  @ApiProperty({ isArray: true })
  data: TourDTO[];
}
