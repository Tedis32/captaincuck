import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import globals from "../globals.js";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  await Moralis.start({ apiKey: globals.MORALIS_API_KEY });
})();

let cursor: string = "";

const getAllNFTTrades = async (collection: string) => {
  let finalResponse: any[] = [];
  const chain = EvmChain.ETHEREUM;
  const marketplace = "opensea";
  const pageSize = 100;
  const currentDate = new Date();
  const date24HoursAgo = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

  const fromBlock = await Moralis.EvmApi.block.getDateToBlock({
    date: date24HoursAgo,
    chain,
  });
  console.log(fromBlock);

  let continueLooping = true;
  if (fromBlock.result.block < 0) {
    console.error("Invalid block number: ", fromBlock);
    return;
  }
  while (continueLooping === true) {
    await sleep(260);
    const response = await Moralis.EvmApi.nft.getNFTTrades({
      address: collection,
      chain,
      marketplace,
      fromBlock: Number(fromBlock.result.block),
      limit: pageSize,
      cursor: cursor,
    });
    console.log(response, "here");
    cursor = response.pagination.cursor as string;
    if (response.result.length < pageSize) {
      continueLooping = false;
    }
    if (
      response &&
      response.result &&
      Array.isArray(response.result) &&
      response.result.length > 0
    ) {
      if (response && Array.isArray(response.result)) {
        finalResponse = [...finalResponse, ...response.result];
      }
    } else {
      console.log(response, "Received empty or unexpected response.");
    }
  }
  console.log(finalResponse, "is the response from moralis");
  finalResponse.forEach((trade, index) => {
    console.log(`Trade ${index + 1}:`, trade);
    // Accessing individual properties of each trade
    console.log("Transaction Hash:", trade.transactionHash);
    // ... access other properties similarly
  });
  return finalResponse;
};

export default getAllNFTTrades;
