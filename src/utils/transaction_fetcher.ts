import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import fs from "fs";
import { getBlockNumber24HoursAgo } from "./getBlockByTime";
import globals from "../globals.js";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
await Moralis.start({ apiKey: globals.MORALIS_API_KEY });

// const jsonToCsv = (jsonArr, filename: string) => {
//   if (!Array.isArray(jsonArr) || jsonArr.length === 0) {
//     console.log("The data is not an array or is empty.");
//     return;
//   }

//   const replacer = (key, value) => (value === null ? "" : value);
//   const header = Object.keys(jsonArr[0]);
//   const csv = [
//     ...jsonArr.map((row) =>
//       header
//         .map((fieldName) => JSON.stringify(row[fieldName], replacer))
//         .join(",")
//     ),
//   ].join("\r\n");

//   if (fs.existsSync(filename)) {
//     fs.appendFileSync(filename, "\r\n" + csv);
//   } else {
//     fs.writeFileSync(filename, header.join(",") + "\r\n" + csv);
//   }
// };
let cursor = "";

const getAllNFTTrades = async (collection: string) => {
  let finalResponse = {};
  const chain = EvmChain.ETHEREUM;
  const marketplace = "opensea";
  const pageSize = 100;
  const fromBlock = await getBlockNumber24HoursAgo(1);
  let continueLooping = true;
  console.log(collection)
  if (fromBlock < 0) {
    console.error("Invalid block number: ", fromBlock);
    return;
  }
  while (continueLooping === true) {
    await sleep(260);
    const response = await Moralis.EvmApi.nft.getNFTTrades({
      address: collection,
      chain,
      marketplace,
      fromBlock: fromBlock,
      limit: pageSize,
      cursor: cursor,
    });
    console.log(response, "here");
    cursor = response.pagination.cursor
    if (response.result.length < pageSize) {
      continueLooping = false;
    }
    if (
      response &&
      response.result &&
      Array.isArray(response.result) &&
      response.result.length > 0
    ) {
      finalResponse = { ...response.result };
    } else {
      console.log(response, "Received empty or unexpected response.");
    }
  }
  return finalResponse;
};

export default getAllNFTTrades;
