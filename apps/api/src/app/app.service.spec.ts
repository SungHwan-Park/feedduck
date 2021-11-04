import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

// nothing to test yet
describe.skip('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return test data"', () => {
      expect(service.find()).toBeDefined();
    });
  });
});
