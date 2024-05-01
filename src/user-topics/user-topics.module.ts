import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserTopicsService } from './user-topics.service';
import { UserTopicsController } from './user-topics.controller';

@Module({
  imports: [PrismaModule],
  providers: [UserTopicsService],
  controllers: [UserTopicsController],
  exports: [UserTopicsService],
})
export class UserTopicsModule {}
