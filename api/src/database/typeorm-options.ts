import type { DataSourceOptions } from 'typeorm';
import type { Env } from '../config/env.js';
import { entities } from './entities/index.js';

export function buildDataSourceOptions(env: Env): DataSourceOptions {
  return {
    type: 'postgres',
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    entities,
    migrations: [new URL('./migrations/*.js', import.meta.url).pathname],
    synchronize: false,
  };
}
