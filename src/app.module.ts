import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import 'dotenv/config';
import { TokenModule } from './token-service/token.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
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
    }),
    TokenModule
  ]
})
export class AppModule {}
