import { IFeed } from '@freshworks/shared';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('find feeds', () => {
    it('should return test data"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getFeeds()).toBeDefined()
    });
  });

  describe('create a feed', () => {
    it('should return test data"', () => {
      const appController = app.get<AppController>(AppController);
      const feed: Partial<IFeed> = {
        farmer: '',
        date: '',
        place: '',
        count: 0,
        quantity: 0,
        food: ''
      }
      expect(appController.createFeed(feed)).toBeDefined();
    });
  });
});
