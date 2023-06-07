import { Controller, Get, Param, Post, Body, Put, Patch } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { TokenService } from './token.service';
import { UpdateResult } from 'typeorm';
import { Token } from './entity/token.entity';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';

@Controller('token')
export class TokenController {
  private breakStatus = false;
  constructor(private readonly tokenService: TokenService) {}

  @Post()
  async create(@Body() Token: CreateTokenDto): Promise<Token> {
    if (this.breakStatus) { sleep(10000); }
    return this.tokenService.createToken(Token);
  }
  @Get('/break')
  async break() {
    this.breakStatus = true;
  }
  @Get()
  async getAll(): Promise<Token[]> {
    return this.tokenService.getAllTokens();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Token> {
    const token = await this.tokenService.getTokenById(id);

    if (!token)
      throw new HttpException(
        `Token with id = ${id} not found`,
        HttpStatus.NOT_FOUND,
      );

    return token;
  }

  @Get('byAddress/:address')
  async getByAddress(@Param('address') address: string): Promise<Token> {
    const token = await this.tokenService.getTokenByAddress(address);

    if (!token)
      throw new HttpException(
        `Token with address = ${address} not found`,
        HttpStatus.NOT_FOUND,
      );

    return token;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() token: CreateTokenDto,
  ): Promise<UpdateResult> {
    return this.tokenService.updateToken(id, token);
  }

  @Patch(':txHash')
  async updateByHash(
    @Param('txHash') hash: string,
    @Body() token: UpdateTokenDto,
  ): Promise<UpdateResult> {
    return this.tokenService.updateTokenByHash(hash, token);
  }
}

function sleep(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}
