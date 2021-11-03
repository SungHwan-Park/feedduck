import { Injectable } from '@nestjs/common';
import { IFeed } from '@freshworks/shared';

@Injectable()
export class AppService {
  private feeds: IFeed[] = [];

  find(): IFeed[] {
    return this.feeds;
  }

  create(data: IFeed): IFeed {
    const feed = { id: this.feeds.length + 1, ...data };
    this.feeds.push(feed);
    return feed;
  }
}
