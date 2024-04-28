import { Module } from '@nestjs/common';
import { UserProgressService } from './user-progress.service';
import { UserProgressController } from './user-progress.controller';

@Module({
  providers: [UserProgressService],
  controllers: [UserProgressController],
})
export class UserProgressModule {}
