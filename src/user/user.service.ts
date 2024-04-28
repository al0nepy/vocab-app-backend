import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async get(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async create(createUserDTO: UserDTO) {
    return this.prisma.user.create({
      data: createUserDTO,
    });
  }

  async update(userEmail: string, updateUserDTO: UserDTO) {
    return this.prisma.user.update({
      where: {
        email: userEmail,
      },
      data: updateUserDTO,
    });
  }
}
