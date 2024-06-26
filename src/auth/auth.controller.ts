import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-up')
  async signUp(@Body() userDTO: UserDTO) {
    return this.authService.signUp(userDTO);
  }

  @Post('/sign-in')
  async signIn(
    @Body() { email, password }: { email: string; password: string },
  ) {
    return this.authService.signIn(email, password);
  }
}
