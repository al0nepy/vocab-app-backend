import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WordsService {
  constructor(private prisma: PrismaService) {}

  async getAll(topicId: number) {
    return this.prisma.words.findMany({
      where: {
        topicId,
      },
    });
  }
}
