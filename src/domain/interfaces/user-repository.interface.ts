import { CreateUserDto } from '@/presentation/dtos/create-user.dto';
import { User } from '../entities/user';

export const I_USER_REPOSITORY = 'I_USER_REPOSITORY';
export interface IUserRepository {
  createUser(createUserDto: CreateUserDto): Promise<User>;
  findAllUser(): Promise<User[]>;
}
