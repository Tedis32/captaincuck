import { Collection } from "nftscan-api/dist/src/types/evm";

export type TrendingNFTData = {
  rank: number;
  collection_title: string;
  collection_image: string;
  volume_usd: number | string;
  volume_24hr_perecent_change: string; // might be string though: same for the next few
  floor_price_usd: number | string;
  floor_price_24hr_percent_change: number | string;
  average_price_usd: number | string;
};

export type NFTScanNFTData = {
  contract_address: string;
  name?: string;
  symbol?: string;
  description?: string;
  website?: string;
  email?: null | string;
  twitter?: string;
  discord?: string;
  telegram?: string;
  github?: string;
  instagram?: string;
  medium?: string;
  logo_url?: string;
  banner_url?: string;
  featured_url?: string;
  large_image_url?: string;
  attributes?: string;
  erc_type?: string;
  deploy_block_number?: number | string;
  owner?: number | string;
  verified?: boolean;
  opensea_verified?: boolean;
  is_spam?: boolean;
  royalty?: number | string;
  items_total?: number | string;
  amounts_total?: number | string;
  owners_total?: number | string;
  opensea_floor_price?: number | string;
  floor_price?: number | string;
  collections_with_same_name?: Array<string>;
  price_symbol?: string;
  volume_total?: number | string;
  sales_total?: number | string;
  average_price?: number | string;
};

export interface UnifiedCollection extends Collection {
  sales_total: string | number;
  average_price: string | number;
}
