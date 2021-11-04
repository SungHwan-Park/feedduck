import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feed } from './feed.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Feed],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Feed])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
