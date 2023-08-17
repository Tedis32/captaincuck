type Nft = {
  tokenId: number;
  imageUri: string;
};

type StakedNft = Nft & {
  reward: string;
};

type Stake = {
  collection: string;
  amount: number;
  tokenId: number;
  rarity: string;
  stakeTime: string;
};

export type { Nft, StakedNft, Stake };
