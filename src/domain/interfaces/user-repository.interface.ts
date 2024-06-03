import { CreateUserDto } from '../../presentation/dtos/create-user.dto';
import { User } from '../entities/user';

export interface IUserRepository {
  createUser(createUserDto: CreateUserDto): Promise<User>;
  findAllUser(): Promise<User[]>;
}
