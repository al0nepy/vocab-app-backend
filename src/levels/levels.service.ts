import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LevelsService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.level.findMany({
      select: {
        id: true,
        name: true,
        topics: true,
      },
    });
  }
}
