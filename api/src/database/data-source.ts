import 'dotenv/config';
import { DataSource } from 'typeorm';
import { validateEnv } from '../config/env.js';
import { buildDataSourceOptions } from './typeorm-options.js';

export default new DataSource(buildDataSourceOptions(validateEnv(process.env)));
