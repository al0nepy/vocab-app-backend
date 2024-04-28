import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserTopicDTO } from './dto/user.topic.dto';

@Injectable()
export class UserTopicsService {
  constructor(private prisma: PrismaService) {}

  async getAll(userId: number) {
    return this.prisma.userTopic.findMany({
      where: {
        userId,
      },
    });
  }

  async create(userTopic: UserTopicDTO) {
    return this.prisma.userTopic.create({
      data: userTopic,
    });
  }

  async update(userTopic: UserTopicDTO, id?: number | undefined) {
    return this.prisma.userTopic.update({
      where: {
        id,
        topicId: userTopic.topicId,
        userId: userTopic.userId,
      },
      data: userTopic,
    });
  }
}
