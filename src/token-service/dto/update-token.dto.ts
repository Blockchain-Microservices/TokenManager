import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTokenDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  symbol?: string;

  @IsNumber()
  @IsOptional()
  supply?: number;

  @IsNumber()
  @IsOptional()
  decimals?: number;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  deployer?: string;

  @IsString()
  @IsOptional()
  txHash?: string;
}
