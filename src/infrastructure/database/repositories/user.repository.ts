import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from '@/domain/interfaces/user-repository.interface';
import { User } from '@/domain/entities/user';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from '@/presentation/dtos/create-user.dto';

export const USER_REPOSITORY = 'USER_REPOSITORY';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }
  async findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }
}
