import { Injectable } from '@nestjs/common';
import { Token } from './interfaces/token.interface';

@Injectable()
export class AppService {
  private readonly tokens: Token[] = [];

  async getAllTokens(): Promise<Token[]> {
    return this.tokens;
  }

  async getTokenById(inputId: number): Promise<Token> {
    return this.tokens.find((token) => token.id === Number(inputId));
  }
}
