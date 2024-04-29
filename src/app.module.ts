import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserProgressModule } from './user-progress/user-progress.module';
import { WordsModule } from './words/words.module';
import { LevelsModule } from './levels/levels.module';
import { TopicsModule } from './topics/topics.module';
import HealthModule from './health/health.module';
import { PrismaService } from './prisma/prisma.service';
import { UserTopicsModule } from './user-topics/user-topics.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    HealthModule,
    AuthModule,
    UserModule,
    UserProgressModule,
    WordsModule,
    LevelsModule,
    TopicsModule,
    UserTopicsModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export default class AppModule {}
