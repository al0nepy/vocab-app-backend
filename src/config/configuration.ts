import dotenv from 'dotenv';

import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

const config = {
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.PORT),
  db: process.env.DB_NAME,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASS,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('database', () => config);

export const connectionSource = new DataSource(config as DataSourceOptions);
