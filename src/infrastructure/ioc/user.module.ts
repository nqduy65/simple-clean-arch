import { Module } from '@nestjs/common';
import { UserController } from '../../presentation/user/user.controller';
import { UserService } from '../../application/services/user/user.service';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../database/repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../database/entities/user.entity';
import { IUserRepository } from '../../domain/interfaces/user-repository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
    {
      provide: UserService,
      useFactory: (userRepository: IUserRepository) =>
        new UserService(userRepository),
      inject: [USER_REPOSITORY],
    },
  ],
  exports: [UserService],
})
export class UserModule {}
