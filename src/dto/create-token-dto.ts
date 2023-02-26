export class CreateTokenDto {
  name: string;
  symbol: string;
  supply: number;
  decimals: number;
  address: string | null;
  deployer: string | null;
}
