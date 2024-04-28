import { Controller, Get } from '@nestjs/common';
import { LevelsService } from './levels.service';

@Controller('levels')
export class LevelsController {
  constructor(private levelsService: LevelsService) {}

  @Get('/')
  async getAll() {
    return this.levelsService.getAll();
  }
}
