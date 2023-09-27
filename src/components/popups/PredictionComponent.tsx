import React, { useEffect, useState } from "react";
import getAllNFTTrades from "../../utils/transaction_fetcher";

type PredictionComponentProps = {
  contractAddress: string;
};

const PredictionComponent = ({ contractAddress }: PredictionComponentProps) => {
  const [predictionResult, setPredictionResult] = useState<string>();
  const [results, setResults] = useState<any>();

  async function getPredictionResult() {
    // FETCH Prediction using contract address
    // Parse result and set the prediction Result to either Up or Down
    let lastTransactions = await getAllNFTTrades(contractAddress);
    setResults(lastTransactions);
    setPredictionResult(contractAddress && "Up");
  }
  useEffect(() => {
    getPredictionResult();
  }, []);

  return !predictionResult ? (
    <div>
      <div className="flex justify-start flex-row gap-3 justify-center">
        <p className="font-jumper">Results:</p>
        <p
          className={`font-jumper ${
            predictionResult === "Down" ? "text-priceRed" : "text-priceGreen"
          }`}
        >
          {predictionResult}
        </p>
      </div>
      <p className="font-openSans text-[18px] text-center">
        Based on the latest price trends for this token, our AI model is
        suggesting that this token will go down in price over the next 24 hours.
      </p>
      <p>{results}</p>
      <br />
      <br />
    </div>
  ) : (
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
};

export default PredictionComponent;
