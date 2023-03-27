import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';

export default new DataSource(
    <DataSourceOptions>{
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize: false,
        entities: ["dist/**/*.entity.js"],
        subscribers: [path.resolve(__dirname, '../**/*.subscriber{.ts,.js}')],
        migrations: [path.resolve(__dirname, '../db/migrations/**/*{.ts,.js}')],
      }
);
