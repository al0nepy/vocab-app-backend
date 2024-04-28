import { Module } from '@nestjs/common';
import { UserTopicsService } from './user-topics.service';
import { UserTopicsController } from './user-topics.controller';

@Module({
  providers: [UserTopicsService],
  controllers: [UserTopicsController]
})
export class UserTopicsModule {}
