import { useEffect, useState } from "react";
import RecentNftCard from "../components/prediction/RecentNftCard";
import Collapsible from "react-collapsible";
import { NFTScanNFTData, TrendingNFTData } from "./types";
import {
  getHottestNFTsByVolume,
  getNFTScan24HourByVolumeNFTs,
} from "../utils/nftUtils";
import { faCheckCircle, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NFTDataPredictionModal from "../components/popups/NFTDataPredictionModal";

const PredictionPage = () => {
  const [trendingNfts, setTrendingNfts] = useState<Array<NFTScanNFTData>>([]);
  const [selectedData, setSelectedData] = useState<NFTScanNFTData>();

  const [showModal, setShowModal] = useState(false);

  const fetchTrending = async () => {
    let NFTs = getNFTScan24HourByVolumeNFTs();
    setTrendingNfts(NFTs);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  function handleSelectedData(data: NFTScanNFTData) {
    setSelectedData(data);
    setShowModal(data !== null || data !== undefined);
  }

  return (
    <div className="flex flex-col w-[98%] lg:w-[80%] xl:w-[w-60%] p-4 self-center">
      {/* TOP SECTION */}
      {showModal && selectedData && (
        <NFTDataPredictionModal
          data={selectedData}
          onClose={() => setShowModal(false)}
        />
      )}

      <div className="border-bottom font-robotoLight flex flex-col">
        <span className="">
          <h1>SeaFarer NFT</h1>
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

      <h2 className="font-openSans">Top NFTs by 24 hour volume</h2>
      <p className="font-openSans">Click to make a prediction</p>
      <div className="flex flex-col">
        <div className="overflow-x-auto mx-1 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-7 py-4"></th>
                    <th scope="col" className="px-3 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Sales
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Floor Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Average Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Contract
                    </th>
                    <th scope="col" className="px-6 py-4">
                      OpenSea Verified
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trendingNfts.map((data, index) => (
                    <tr
                      onClick={() => handleSelectedData(data)}
                      key={index}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    >
                      <td className="whitespace-nowrap font-medium">
                        <img
                          src={data.logo_url as string}
                          className="rounded-full w-10 h-10 p-1"
                        />
                      </td>
                      <td className="whitespace-nowrap font-medium p-3 font-openSans">
                        {index + 1}
                      </td>

                      <td className="whitespace-nowrap font-medium pl-5 font-openSans">
                        {data.name}
                      </td>
                      <td className="whitespace-nowrap font-medium pl-5 font-openSans">
                        {data.sales_total}
                      </td>
                      <td className="whitespace-nowrap font-medium pl-5 font-openSans">
                        {data.average_price}
                      </td>
                      <td className="whitespace-nowrap font-medium pl-5 font-openSans">
                        {data.average_price}
                      </td>
                      <td className="whitespace-nowrap font-medium pl-5 flex flex-row gap-3 py-3 font-openSans">
                        {data.contract_address?.substring(0, 4)}...
                        {data.contract_address?.substring(
                          data.contract_address.length - 4,
                          data.contract_address.length
                        )}
                      </td>
                      <td className="whitespace-nowrap font-medium pl-10 lg:pl-20 xl:pl-10 2xl:pl-20">
                        {data.opensea_verified ? (
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            color="#0D68A8"
                          />
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
