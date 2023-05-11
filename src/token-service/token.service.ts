import { Injectable } from '@nestjs/common';
import { Token } from './entity/token.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}

  createToken(tokenData: CreateTokenDto): Promise<Token> {
    const token = this.tokenRepository.create(tokenData);
    return this.tokenRepository.save(token);
  }

  async getAllTokens(): Promise<Token[]> {
    return this.tokenRepository.find();
  }

  async getTokenById(id: string): Promise<Token> {
    return this.tokenRepository.findOneBy({ id });
  }

  async getTokenByAddress(address: string): Promise<Token> {
    return this.tokenRepository.findOneBy({ address });
  }

  async updateToken(
    id: string,
    tokenData: CreateTokenDto,
  ): Promise<UpdateResult> {
    return this.tokenRepository.update({ id }, tokenData);
  }

  async updateTokenByHash(
    hash: string,
    tokenData: UpdateTokenDto,
  ): Promise<UpdateResult> {
    return this.tokenRepository.update({ txHash: hash }, tokenData);
  }
}
