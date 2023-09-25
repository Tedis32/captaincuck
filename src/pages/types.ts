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
