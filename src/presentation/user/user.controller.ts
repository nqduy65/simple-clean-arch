import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../../application/services/user/user.service';
import { User } from '../../domain/entities/user';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/v1')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  @Get('/v1')
  async findAllUser(): Promise<User[]> {
    return await this.userService.findAllUser();
  }
}
