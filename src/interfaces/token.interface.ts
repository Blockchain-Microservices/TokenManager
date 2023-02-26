export interface Token {
  id: number;
  name: string;
  symbol: string;
  supply: number;
  decimals: number;
  address: string | null;
  deployer: string | null;
}
