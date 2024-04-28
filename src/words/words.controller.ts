import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
  constructor(private wordsService: WordsService) {}

  @Get('/')
  async getAll(@Param('topicId', ParseIntPipe) topicId: number) {
    return this.wordsService.getAll(topicId);
  }
}
