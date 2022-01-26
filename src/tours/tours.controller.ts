import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTourDto } from './dto/create-tour.dto';
import { TourDTO } from './entities/tour.dto';
import { ToursResponse } from './entities/tours.response.dto';
import { ToursService } from './tours.service';

@Controller('tours')
export class ToursController {
  constructor(private readonly toursService: ToursService) {}
  @ApiTags('Get all tours:')
  @ApiOkResponse({ type: ToursResponse })
  @Get()
  async getAllTours(): Promise<ToursResponse> {
    return {
      data: await this.toursService.findAll(),
      result: (await this.toursService.findAll()).length,
    };
  }
  @ApiTags('Create new tour:')
  @ApiCreatedResponse({ type: TourDTO })
  @ApiInternalServerErrorResponse({
    type: InternalServerErrorException,
  })
  @ApiBearerAuth()
  @Post()
  async createTours(@Body() body: CreateTourDto): Promise<TourDTO> {
    return this.toursService.create(body);
  }
}
