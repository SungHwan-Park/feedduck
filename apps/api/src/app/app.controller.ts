import { Controller, Get, Body, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('/feeds')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getFeeds() {
    return this.appService.find();
  }

  @Post()
  createFeed(@Body() body: any) {
    return this.appService.create(body);
  }
}
