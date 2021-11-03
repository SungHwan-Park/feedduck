import { CreateFeedDto } from '@freshworks/shared';
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
    const testFeed: CreateFeedDto = {
      farmer: "Leanne Graham",
      date: '2020-01-01',
      place: "722 S.W. 8th Street",
      count: 100,
      quantity: 1000,
      food: "Fruits",
    }

    it('should return test data"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.createFeed(testFeed)).toBeDefined();
    });

    it('should fail with invalid data"', done => {
      const appController = app.get<AppController>(AppController);
      const feed: any = { count: '100', ...testFeed };
      try {
        appController.createFeed(feed);
        done.fail('should have failed');
      } catch {
        done();
      }
    });
  });
});
