import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../infrastructure/database/repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../infrastructure/database/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
  exports: [UserService],
})
export class ServiceModule {}
