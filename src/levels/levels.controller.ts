import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { IRequest } from 'fastify';
import { AuthGuard } from 'src/auth/auth.guard';
import { LevelsService } from './levels.service';

@UseGuards(AuthGuard)
@Controller('levels')
export class LevelsController {
  constructor(private levelsService: LevelsService) {}

  @Get('/')
  async getAll(@Req() req: IRequest) {
    return this.levelsService.getAll(req.user.id);
  }
}
