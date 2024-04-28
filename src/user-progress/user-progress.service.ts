import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserProgressDTO } from './dto/user.progress.dto';

@Injectable()
export class UserProgressService {
  constructor(private prisma: PrismaService) {}

  async getProgress(userId: number) {
    return this.prisma.userProgress.findMany({
      where: {
        userId,
      },
    });
  }

  async create(userProgress: UserProgressDTO) {
    return this.prisma.userProgress.create({
      data: userProgress,
    });
  }

  async update(userProgress: UserProgressDTO) {
    return this.prisma.userProgress.update({
      where: {
        id: userProgress.id,
        levelId: userProgress.levelId,
      },
      data: userProgress,
    });
  }
}
