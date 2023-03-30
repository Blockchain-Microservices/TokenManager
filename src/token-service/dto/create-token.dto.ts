import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTokenDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  symbol: string;

  @IsNumber()
  @IsNotEmpty()
  supply: number;

  @IsNumber()
  @IsNotEmpty()
  decimals: number;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  deployer?: string;
}
