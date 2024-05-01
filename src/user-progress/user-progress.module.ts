import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserProgressService } from './user-progress.service';
import { UserProgressController } from './user-progress.controller';

@Module({
  imports: [PrismaModule],
  providers: [UserProgressService],
  controllers: [UserProgressController],
  exports: [UserProgressService],
})
export class UserProgressModule {}
