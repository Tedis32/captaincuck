import { ErcType, EvmChain, NftscanEvm } from "nftscan-api";
import globals from "../globals";
import { UnifiedCollection } from "../pages/types";
import { Collection } from "nftscan-api/dist/src/types/evm";

const config = {
  apiKey: globals.NFTSCAN_API_KEY, // Replace with your NFTScan API key.
  chain: EvmChain.ETH, // Replace with your chain.
};

const evm = new NftscanEvm(config);
// sort_field?: 'volume_total' | 'sales_total' | 'average_price' | 'floor_price' | 'volume_1d' | 'volume_7d' | 'volume_change_1d' | 'volume_change_7d' | 'average_price_change_1d' | 'average_price_change_7d';
//     /**
//      * Can be asc or desc. desc for default
//      */
//     sort_direction?: SortDirection;
//     /**
//      * Result size. Defaults to 100, capped at 1000
//      */
//     limit?: number;
export async function getByRanking() {
  let val: UnifiedCollection[] | Collection[] = await evm.collection.getCollectionsByRanking({
    sort_field: "sales_total",
    limit: 50,
  });
  console.log(val);
  return val as UnifiedCollection[];
}
