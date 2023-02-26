import { Injectable } from '@nestjs/common';
import { Token } from './interfaces/token.interface';
import { CreateTokenDto } from './dto/create-token-dto';

@Injectable()
export class AppService {
  private readonly tokens: Token[] = [];
  private id = 0;

  createToken(tokenData: CreateTokenDto) {
    this.tokens.push({ id: this.id++, ...tokenData });
  }

  async getAllTokens(): Promise<Token[]> {
    return this.tokens;
  }

  async getTokenById(inputId: number): Promise<Token> {
    return this.tokens.find((token) => token.id === Number(inputId));
  }
}
