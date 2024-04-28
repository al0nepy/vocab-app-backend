import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) {}

  async getAllBy(levelId: number) {
    return this.prisma.topic.findMany({
      where: {
        levelId,
      },
      select: {
        id: true,
        name: true,
        words: false,
      },
    });
  }
}
