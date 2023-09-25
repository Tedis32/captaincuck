import { useEffect, useState } from "react";
import RecentNftCard from "../components/prediction/RecentNftCard";
import Collapsible from "react-collapsible";
import { TrendingNFTData } from "./types";
import { getHottestNFTsByVolume } from "../utils/moralisUtils";

const PredictionPage = () => {
  const [trendingNfts, setTrendingNfts] = useState<Array<TrendingNFTData>>([]);

  function handleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    console.log(formData);
    console.log(form.method);

    var object: any = {};
    formData.forEach((value, key: string) => (object[key] = value));
    var json = JSON.stringify(object);

    fetch("http://localhost:8080/prediction", {
      method: form.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        console.log("Response:", await response.text());
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const fetchTrending = async () => {
    let NFTs = await getHottestNFTsByVolume();
    setTrendingNfts(NFTs && NFTs);
  };

  const [trendingOpenByDefault, setTrendingOpenByDefault] = useState(true);

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className="flex flex-col w-[98%] p-4">
      {/* TOP SECTION */}
      <div className="border-bottom font-robotoLight flex flex-col">
        <span className="">
          <h1>Welcome to SeaFarer</h1>
          <span className="flex flex-col lg:flex-row justify-between">
            <p className="font-robotoLight text-[14px] lg:text-[19px]">
              Click on any of the below NFT collections to make a prediction
            </p>
            <span className="flex-row flex gap-1">
              <p className="font-robotoLight text-[16px] text-offWhite">
                Credits Remaining:
              </p>
              <p className="text-[16px] text-seaBlue font-semibold">400,000</p>
            </span>
          </span>
        </span>
      </div>
      <Collapsible trigger="Trending NFTs" open={trendingOpenByDefault}>
        <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid gap-3 border-bottom">
          {trendingNfts.map((data) => (
            <RecentNftCard nftData={data} />
          ))}
        </div>
      </Collapsible>
      <div>
        <h1>Predict</h1>
        <form method="post" onSubmit={handleSubmit}>
          <label>
            Collection: <input name="collection" />
          </label>
          <label>
            TokenID: <input name="tokenId" />
          </label>
          <button type="submit">Submit form</button>
        </form>
      </div>
    </div>
  );
};

export default PredictionPage;
