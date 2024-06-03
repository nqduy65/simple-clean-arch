import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 2345,
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'clv@123',
  database: process.env.DATABASE_NAME || 'simple_clean_arch',
  entities: [join(process.cwd(), 'dist/**/*.entity.js')],
  synchronize: true,
};
