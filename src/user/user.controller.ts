import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async getUser(@Req() req: FastifyRequest) {
    return this.userService.get(req.user.email);
  }

  @Post('/')
  async create(@Body() user: UserDTO) {
    return this.userService.create(user);
  }

  @Put('/')
  async update(@Req() req, @Body() user: UserDTO) {
    const { email } = req.user.email;
    return this.userService.update(email, user);
  }
}
