import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserProgressModule } from './user-progress/user-progress.module';
import { WordsModule } from './words/words.module';
import { LevelsModule } from './levels/levels.module';
import { TopicsModule } from './topics/topics.module';
import configuration from './config/configuration';
import HealthModule from './health/health.module';
import { PrismaService } from './prisma/prisma.service';
import { UserTopicsModule } from './user-topics/user-topics.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
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
