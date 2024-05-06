import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { IRequest } from 'fastify';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserProgressService } from './user-progress.service';
import { UserProgressDTO } from './dto/user.progress.dto';

@UseGuards(AuthGuard)
@Controller('user-progress')
export class UserProgressController {
  constructor(private userProgressService: UserProgressService) {}

  @Get('/')
  async getProgress(@Req() req: IRequest) {
    return this.userProgressService.getProgress(req.user?.id);
  }

  @Post('/')
  async create(@Req() req: IRequest, @Body() userProgress: UserProgressDTO) {
    const dataToStore = userProgress;
    dataToStore.userId = req.user.id;
    return this.userProgressService.create(dataToStore);
  }
}
