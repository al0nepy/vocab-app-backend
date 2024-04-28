import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { UserProgressService } from './user-progress.service';
import { UserProgressDTO } from './dto/user.progress.dto';

@Controller('user-progress')
export class UserProgressController {
  constructor(private userProgressService: UserProgressService) {}

  @Get('/')
  async getProgress(@Req() req: FastifyRequest) {
    return this.userProgressService.getProgress(req.user.id);
  }

  @Post('/')
  async create(@Body() userProgress: UserProgressDTO) {
    return this.userProgressService.create(userProgress);
  }

  @Put('/')
  async update(@Body() userProgress: UserProgressDTO) {
    return this.userProgressService.update(userProgress);
  }
}
