import { Injectable } from '@nestjs/common';
import { TourDTO } from './dto/tour.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tour, TourDocument } from './schemas/tours.schema';
import { Model } from 'mongoose';

@Injectable()
export class ToursService {
  constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {}

  async findAll(): Promise<TourDTO[]> {
    //TODO :
    // we need to getting data into mongodb using moongose
    return this.tourModel.find();
  }
}
