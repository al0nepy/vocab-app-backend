import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(userDTO: UserDTO) {
    const user = userDTO;
    user.password = await argon2.hash(userDTO.password);
    const storedUser = await this.userService.create(user);
    const token = this.jwtService.signAsync({
      id: storedUser.id,
      email: storedUser.email,
      password: storedUser.password,
    });

    return {
      access_token: token,
    };
  }

  async signIn(email: string, password: string) {
    const user = await this.userService.get(email);
    const passVerify = await argon2.verify(user.password, password);

    if (!passVerify) {
      throw new UnauthorizedException();
    }

    const token = await this.jwtService.signAsync({
      id: user.id,
      email: user.email,
      password: user.password,
    });

    return {
      access_token: token,
    };
  }

  async validateUser(payload: { id: number; email: string }): Promise<any> {
    const user = await this.userService.get(payload.email);

    if (user) {
      return user;
    }

    return null;
  }
}
