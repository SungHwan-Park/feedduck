import { CreateFeedDto, IFeed } from '@freshworks/shared';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  const feeds: IFeed[] = [];
  const fakeService = {
    find() {
      return Promise.resolve(feeds);
    },
    create(data: IFeed) {
      const feed = { ...data, id: feeds.length + 1 };
      feeds.push(feed);
      return Promise.resolve(feed);
    }
  }

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{
        provide: AppService,
        useValue: fakeService,
      }],
    }).compile();
  });

  describe('find feeds', () => {
    it('should return test data"', async () => {
      const appController = app.get<AppController>(AppController);
      const result = await appController.getFeeds();
      expect(result.length).toEqual(feeds.length);
    });
  });

  describe('create a feed', () => {
    const testFeed: CreateFeedDto = {
      name: "Leanne Graham",
      date: '2020-01-01',
      place: "722 S.W. 8th Street",
      count: 100,
      quantity: 1000,
      food: "Fruits",
    }

    it('should return test data"', async () => {
      const appController = app.get<AppController>(AppController);
      const result = await appController.createFeed(testFeed);
      expect(result.id).toEqual(feeds.length);
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
