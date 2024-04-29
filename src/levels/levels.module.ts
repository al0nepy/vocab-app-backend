import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';

@Module({
  imports: [PrismaModule],
  providers: [LevelsService],
  controllers: [LevelsController],
})
export class LevelsModule {}
