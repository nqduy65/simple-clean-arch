import { User } from '@/domain/entities/user';
import { IUserRepository } from '@/domain/interfaces/user-repository.interface';
import { CreateUserDto } from '@/presentation/dtos/create-user.dto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(createUserDto);
  }
  async findAllUser(): Promise<User[]> {
    return this.userRepository.findAllUser();
  }
}
