import { useEffect, useState } from "react";
import RecentNftCard from "../components/prediction/RecentNftCard";
import Collapsible from "react-collapsible";
import {
  faCheckCircle,
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NFTDataPredictionModal from "../components/popups/NFTDataPredictionModal";
import { getByRanking } from "../utils/nftScan";
import { UnifiedCollection } from "./types";

const PredictionPage = () => {
  const [trendingNfts, setTrendingNfts] = useState<Array<UnifiedCollection>>(
    []
  );

  const [selectedData, setSelectedData] = useState<UnifiedCollection>();
  const [hotNFTs, setHotNfts] = useState<Array<UnifiedCollection>>([]);
  const [expandHottestSection, setExpandHottestSection] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const fetchTrending = async () => {
    let NFTs: UnifiedCollection[] = await getByRanking();
    console.log("NFTs", NFTs);
    // Sort the NFTs by floor_price in descending order
    let sortedNFTs = [...NFTs].sort(
      (a, b) => (b.floor_price as number) - (a.floor_price as number)
    );
    // Select the top 10 NFTs
    let hotNFTs = sortedNFTs.slice(0, 10);
    setTrendingNfts(NFTs);
    setHotNfts(hotNFTs);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  function handleSelectedData(data: UnifiedCollection) {
    setSelectedData(data);
    setShowModal(data !== null || data !== undefined);
  }

  return (
    <div className="flex flex-col right-0 left-0 bg-[url('/src/assets/images/opaque_water.png')] bg-black">
      <div className="flex flex-col w-[98%] lg:w-[80%] xl:w-[w-60%] p-4 self-center">
        {/* TOP SECTION */}
        {showModal && selectedData && (
          <NFTDataPredictionModal
            data={selectedData}
            onClose={() => setShowModal(false)}
          />
        )}

        <div className="font-openSans flex flex-col">
          <span className="flex flex-col gap-1">
            <h1 className="font-jumper ">SeaFarer NFT Explorer</h1>
            <span className="flex flex-col lg:flex-row gap-2">
              <p className="font-openSans text-[16px] text-offWhite">
                Credits Remaining:
              </p>
              {walletConnected ? (
                <p className="text-[16px] text-seaBlue font-semibold">
                  '400,000'
                </p>
              ) : (
                <button
                  type="button"
                  className="font-openSans mb-3 rounded border-1 border-neutral-50 px-3 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  onClick={() =>
                    alert(
                      "Currently no credits are required for NFT insights! Limited time only :)"
                    )
                  }
                >
                  FREE
                </button>
              )}
            </span>
            <Collapsible
              trigger={
                <div className="flex flex-row justify-between p-1">
                  <p className="font-jumper text-[14px] lg:text-[19px]">
                    Hot NFTs🔥
                  </p>
                  <FontAwesomeIcon
                    icon={
                      expandHottestSection
                        ? faChevronCircleUp
                        : faChevronCircleDown
                    }
                    onClick={() =>
                      setExpandHottestSection(!expandHottestSection)
                    }
                    className={`${!expandHottestSection && "animate-bounce"}`}
                  />
                </div>
              }
              open={true}
            >
              <div className="flex overflow-x-auto gap-4">
                {hotNFTs.map((data: UnifiedCollection, index) => {
                  return (
                    <div onClick={() => handleSelectedData(data)}>
                      <RecentNftCard nftData={data} key={index} />
                    </div>
                  );
                })}
              </div>
            </Collapsible>
          </span>
        </div>
        <div className="pt-4">
          <div className="flex flex-col">
            <div className="overflow-x-auto mx-1 sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <h3 className="font-openSans">Top NFTs by volume</h3>
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
                            {data.floor_price}
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
      </div>
    </div>
  );
};

export default PredictionPage;
