import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';

@Module({
  imports: [PrismaModule],
  providers: [WordsService],
  controllers: [WordsController],
  exports: [WordsService],
})
export class WordsModule {}
