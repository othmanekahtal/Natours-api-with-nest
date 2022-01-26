import { Controller, Get } from '@nestjs/common';
import { TourDTO } from './dto/tour.dto';
import { ToursService } from './tours.service';

@Controller('tours')
export class ToursController {
  constructor(private readonly toursService: ToursService) {}
  @Get()
  async getAllTours(): Promise<TourDTO[]> {
    return this.toursService.findAll();
  }
}
