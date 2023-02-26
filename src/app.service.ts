import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { Token } from './interfaces/token.interface';
import { CreateTokenDto } from './dto/create-token-dto';

@Injectable()
export class AppService {
  private readonly tokens: Token[] = [];

  createToken(tokenData: CreateTokenDto) {
    const uuid = randomUUID();
    this.tokens.push({ id: uuid, ...tokenData });
  }

  async getAllTokens(): Promise<Token[]> {
    return this.tokens;
  }

  async getTokenById(inputId: string): Promise<Token> {
    return this.tokens.find((token) => token.id === inputId);
  }

  async updateToken(
    inputId: string,
    tokenData: CreateTokenDto,
  ): Promise<Token> {
    let token = this.tokens.find((token) => token.id === inputId);

    if (!token) return null;

    token = Object.assign(token, tokenData);
    return token;
  }
}
