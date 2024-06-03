import { Module } from '@nestjs/common';

import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { ControllersModule } from './presentation/controllers.module';

@Module({
  imports: [TypeOrmConfigModule, ControllersModule],
})
export class AppModule {}
