import { Inject } from '@nestjs/common';
import { User } from '../../../domain/entities/user';
import { IUserRepository } from '../../../domain/interfaces/user-repository.interface';
import { USER_REPOSITORY } from '../../../infrastructure/database/repositories/user.repository';
import { CreateUserDto } from '../../../presentation/dtos/create-user.dto';

export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
  ) {}
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(createUserDto);
  }
  async findAllUser(): Promise<User[]> {
    return this.userRepository.findAllUser();
  }
}
