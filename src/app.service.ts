import { Injectable } from '@nestjs/common';
import { Token } from './interfaces/token.interface';

@Injectable()
export class AppService {
  private readonly tokens: Token[] = [];
}
