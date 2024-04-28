import { Controller, Get, Req, Body, Post, Put } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { UserTopicsService } from './user-topics.service';
import { UserTopicDTO } from './dto/user.topic.dto';

@Controller('user-topics')
export class UserTopicsController {
  constructor(private userTopicService: UserTopicsService) {}

  @Get('/')
  async getAll(@Req() req: FastifyRequest) {
    const userId = req.user.id;
    return this.userTopicService.getAll(userId);
  }

  @Post('/')
  async create(@Body() userTopic: UserTopicDTO) {
    return this.userTopicService.create(userTopic);
  }

  @Put('/')
  async update(@Body() userTopic: UserTopicDTO) {
    return this.userTopicService.update(userTopic);
  }
}
