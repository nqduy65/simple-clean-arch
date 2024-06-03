import { Module } from '@nestjs/common';

import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { ControllersModule } from './presentation/controllers.module';
// import { ServiceModule } from './application/services/service.module';

@Module({
  imports: [
    TypeOrmConfigModule,
    ControllersModule,
    // ServiceModule
  ],
})
export class AppModule {}
