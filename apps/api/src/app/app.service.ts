import { Injectable } from '@nestjs/common';
import { IFeed } from '@freshworks/shared';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feed } from './feed.entity';

@Injectable()
export class AppService {
  
  constructor(@InjectRepository(Feed) private readonly repo: Repository<Feed>) {}

  find(): Promise<Feed[]> {
    return this.repo.find()
  }

  create(data: IFeed): Promise<Feed> {
    const feed = this.repo.create(data);
    return this.repo.save(feed);
  }
}
