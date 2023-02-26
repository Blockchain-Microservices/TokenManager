import { Controller, Get, Param } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { AppService } from './app.service';
import { Token } from './interfaces/token.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll(): Promise<Token[]> {
    return this.appService.getAllTokens();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Token> {
    const idNum = Number(id);

    if (!idNum) return;

    const token = await this.appService.getTokenById(idNum);

    if (!token)
      throw new HttpException(
        `Token with id = ${id} not found`,
        HttpStatus.NOT_FOUND,
      );

    return token;
  }
}
