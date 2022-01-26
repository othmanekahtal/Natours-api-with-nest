export class TourDTO {
  _id: string;
  name: string;
  slug: string;
  duration: number;
  maxGroupSize: number;
  difficult: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  priceDiscount: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  createdAt: Date;
  startDates: Date[];
  secretTour: boolean;
}
