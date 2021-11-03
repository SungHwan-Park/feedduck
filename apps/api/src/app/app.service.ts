import { Injectable } from '@nestjs/common';
import { IFeed } from '@freshworks/shared';

@Injectable()
export class AppService {
  getData(): IFeed {
    const data: IFeed = {
      id: 1,
      farmer: 'John',
      date: '2020-01-01',
      place: 'Kathmandu',
      count: 10,
      quantity: 100,
      food: 'Rice',
    }
    return data;
  }
}
