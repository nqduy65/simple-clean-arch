import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from '@/infrastructure/config/typeorm/typeorm.module';

@Module({
  imports: [TypeOrmConfigModule],
})
export class RepositoryModule {}
