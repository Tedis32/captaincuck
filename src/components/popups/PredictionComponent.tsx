import React, { useEffect, useState } from "react";
import getAllNFTTrades from "../../utils/transaction_fetcher";

type PredictionComponentProps = {
  contractAddress: string;
};

const PredictionComponent = ({ contractAddress }: PredictionComponentProps) => {
  const [predictionResult, setPredictionResult] = useState<string>();
  const [currentState, setCurrentState] = useState(0);
  const [results, setResults] = useState<any>();

  async function getPredictionResult() {
    // FETCH Prediction using contract address
    // Parse result and set the prediction Result to either Up or Down
    let lastTransactions = await getAllNFTTrades(contractAddress);
    setResults(lastTransactions);
    // setPredictionResult(contractAddress && "Up");
  }
  useEffect(() => {
    getPredictionResult();
  }, []);

  const getInitialState = () => (
    <div>
      <div className="flex justify-start flex-row gap-3 ">
        <p className="font-openSans text-[18px] text-center text-priceGreen">
          Results:
        </p>
      </div>

      {results && results.length > 0 && (
        <div>
          {results.length < 5 ? (
            <p className="font-openSans text-[15px]">
              Not enough trades at this time, to retrieve accurate metrics,{" "}
              <br />
              <br />
              In the mean time, here are some insights into the NFT collection over the
              last 24 hours:
            </p>
          ) : (
            <p className="font-openSans text-[15px]">
              AI is currently disabled for non-beta testers, check back later
              for an update!
              <br />
              <br />
              In the mean time, here are some insights into the NFT collection over the
              last 24 hours:
            </p>
          )}
          <div className="mb-6 border-bottom" />
          <p className="font-openSans text-[15px] text-priceGreen">
            Total transactions: {results.length}
          </p>
          <p className="font-openSans text-[15px] text-priceGreen">
            Total Amount Traded:{" "}
            {(
              results.reduce(
                (
                  total: bigint,
                  trade: {
                    price: { rawValue: string | number | bigint | boolean };
                  }
                ) => total + BigInt(trade.price.rawValue),
                BigInt(0)
              ) / BigInt(10 ** 18)
            ).toString()}{" "}
            ETH
          </p>
          {/* Highest and Lowest Price Traded */}
          <p className="font-openSans text-[15px] text-priceGreen">
            Highest Price Traded:{" "}
            {(
              Math.max(
                ...results.map((trade: { price: { rawValue: any } }) =>
                  Number(trade.price.rawValue)
                )
              ) /
              10 ** 18
            ).toFixed(4)}{" "}
            ETH
          </p>
          <p className="font-openSans text-[15px] text-priceRed">
            Lowest Price Traded:{" "}
            {(
              Math.min(
                ...results.map((trade: { price: { rawValue: any } }) =>
                  Number(trade.price.rawValue)
                )
              ) /
              10 ** 18
            ).toFixed(4)}{" "}
            ETH
          </p>

          {/* Token IDs */}
          <p className="font-openSans text-[15px] text-priceGreen">
            Token IDs:{" "}
            {results
              .map((trade: { tokenIds: any[] }) => trade.tokenIds.join(", "))
              .join(", ")}
          </p>

          {/* Latest Transaction Hash by blockNumber */}
          <a
            href={
              "https://etherscan.io/tx/" +
              results
                .reduce(
                  (
                    latestTrade: { blockNumber: number },
                    trade: { blockNumber: number }
                  ) =>
                    latestTrade.blockNumber > trade.blockNumber
                      ? latestTrade
                      : trade
                )
                .transactionHash
            }
            target="#"
          >
            <p className="font-openSans text-[15px] text-priceGreen">
              Latest Transaction Hash:{" "}
              {results
                .reduce(
                  (
                    latestTrade: { blockNumber: number },
                    trade: { blockNumber: number }
                  ) =>
                    latestTrade.blockNumber > trade.blockNumber
                      ? latestTrade
                      : trade
                )
                .transactionHash.substring(0, 7)}
            </p>
          </a>
        </div>
      )}
      <br />
      <br />
    </div>
  );
  const getAnalysingState = () => (
    <div>
      <p className="animate-pulse font-openSans text-[19px]">Analysing...</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
  const states = [getInitialState(), getAnalysingState()];

  return states[currentState];
};

export default PredictionComponent;
