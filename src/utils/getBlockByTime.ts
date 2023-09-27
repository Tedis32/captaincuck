import Web3 from "web3";
import globals from "../globals";

const web3 = new Web3(
  new Web3.providers.HttpProvider(globals.INFURA_API_KEY, { timeout: 10000 })
);

export const getBlockNumber24HoursAgo = async (days: number) => {
  try {
    const latestBlockNumber = await web3.eth.getBlockNumber();
    const latestBlock = await web3.eth.getBlock(latestBlockNumber);
    const latestBlockTime = BigInt(latestBlock.timestamp); // Convert to BigInt
    const twentyFourHoursAgo = latestBlockTime - BigInt(days * 24 * 60 * 60); // Convert to BigInt

    let low = BigInt(0); // Convert to BigInt
    let high = BigInt(latestBlockNumber); // Convert to BigInt

    while (low <= high) {
      const mid = low + (high - low) / BigInt(2); // Convert to BigInt
      const block = await web3.eth.getBlock(Number(mid)); // Convert back to Number for API call
      const blockTime = BigInt(block.timestamp); // Convert to BigInt

      if (blockTime > twentyFourHoursAgo) {
        high = mid - BigInt(1); // Convert to BigInt
      } else if (blockTime < twentyFourHoursAgo) {
        low = mid + BigInt(1); // Convert to BigInt
      } else {
        console.log(`Block number roughly 24 hours ago: ${mid}`);
        return mid;
      }
    }

    // If the loop ends, 'high' should point to the block that is closest to, but older than, 24 hours ago.
    console.log(`Block number roughly 24 hours ago: ${high}`);
    return high;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
