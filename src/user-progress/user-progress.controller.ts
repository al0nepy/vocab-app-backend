import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { IRequest } from 'fastify';
import { UserProgressService } from './user-progress.service';
import { UserProgressDTO } from './dto/user.progress.dto';

@Controller('user-progress')
export class UserProgressController {
  constructor(private userProgressService: UserProgressService) {}

  @Get('/')
  async getProgress(@Req() req: IRequest) {
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
