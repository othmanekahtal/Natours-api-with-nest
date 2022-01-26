import { Injectable } from '@nestjs/common';
import { TourDTO } from './entities/tour.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tour, TourDocument } from './schemas/tours.schema';
import { Model } from 'mongoose';
import { CreateTourDto } from './dto/create-tour.dto';

@Injectable()
export class ToursService {
  constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {}

  async findAll(): Promise<TourDTO[]> {
    return this.tourModel.find();
  }
  async create(tour: CreateTourDto): Promise<TourDTO> {
    return this.tourModel.create(tour);
  }
}
