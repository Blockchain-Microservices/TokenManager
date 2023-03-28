import { Injectable } from '@nestjs/common';
import { Token } from './entity/token.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}

  createToken(tokenData: Token) {
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

  async updateToken(id: string, tokenData: Token): Promise<UpdateResult> {
    return this.tokenRepository.update({ id }, tokenData);
  }
}
