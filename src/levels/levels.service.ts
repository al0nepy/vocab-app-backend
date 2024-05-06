import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LevelsService {
  constructor(private prisma: PrismaService) {}

  async getAll(userId: number) {
    const levels = await this.prisma.level.findMany({
      select: {
        id: true,
        name: true,
        topics: {
          select: {
            id: true,
            name: true,
            words: true,
            levelId: true,
          },
        },
      },
    });
    const userProgressTopicsQuery = Prisma.raw(`
    WITH CompletedTopics AS (
      SELECT
        "UserProgress"."levelId",
        COUNT(DISTINCT "UserProgress"."topicId") AS "completedTopics"
      FROM
        "UserProgress"
        INNER JOIN "Topic" ON "UserProgress"."levelId" = "Topic"."levelId"
      WHERE
        "UserProgress"."userId" = '${userId}'
      GROUP BY
        "UserProgress"."levelId"
    ),
    TotalTopics AS (
      SELECT
       "Topic"."levelId",
        CAST(COUNT(DISTINCT "Topic"."id") AS INTEGER) AS "totalTopics"
      FROM
        "Topic"
      GROUP BY
        "levelId"
    )
    SELECT
      CAST(CT. "levelId" AS INTEGER),
      CAST(CT. "completedTopics" AS INTEGER),
      CAST(TT. "totalTopics" AS INTEGER),
      CAST(ROUND((CT. "completedTopics" * 100.0) / NULLIF(TT. "totalTopics", 0), 2) AS INTEGER) AS "completionPercentage"
    FROM
      CompletedTopics CT
      INNER JOIN TotalTopics TT ON CT. "levelId" = TT. "levelId";
    `);
    const userProgressTopics: Array<any> = await this.prisma.$queryRaw(
      userProgressTopicsQuery,
    );
    const result = levels.map((item) => {
      return {
        ...item,
        topics: item.topics.map((itemTopic) => ({
          ...itemTopic,
          completionData: userProgressTopics.find(
            (itemProgress) => itemProgress.levelId === item.id,
          ),
        })),
      };
    });

    return {
      levels: result,
    };
  }
}
