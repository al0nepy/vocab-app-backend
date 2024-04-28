import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TopicsService } from './topics.service';

@Controller('topics')
export class TopicsController {
  constructor(private topicService: TopicsService) {}

  @Get('/')
  async getAll(@Param('levelId', ParseIntPipe) levelId: number) {
    return this.topicService.getAllBy(levelId);
  }
}
