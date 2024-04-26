import { Controller, Get } from '@nestjs/common';
import { HealthResponse } from './types/health';

@Controller('health')
export default class HealthController {
  @Get('/')
  async healthStatus(): Promise<HealthResponse> {
    return {
      status: 200,
      msg: 'Success!',
    };
  }
}
