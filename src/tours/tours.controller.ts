import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';
import { TourDTO } from './entities/tour.dto';
import { ToursResponse } from './entities/tours.response.dto';
import { ToursService } from './tours.service';

@Controller('tours')
export class ToursController {
  constructor(private readonly toursService: ToursService) {}
  @Get()
  async getAllTours(): Promise<ToursResponse> {
    return {
      data: await this.toursService.findAll(),
      result: (await this.toursService.findAll()).length,
    };
  }
  @Post()
  async createTours(@Body() body: CreateTourDto): Promise<TourDTO> {
    return this.toursService.create(body);
  }
}
