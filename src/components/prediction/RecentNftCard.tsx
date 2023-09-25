import BAYCImage from "../../assets/images/BORED-APE.jpg";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TrendingNFTData } from "../../pages/types";

type RecentNftCardProps = {
  nftData: TrendingNFTData;
};

const RecentNftCard = ({ nftData }: RecentNftCardProps) => {
  return (
    <div className="relative mt-2 w-64">
      <span className="absolute top-0 left-0 font-bold font-baloo text-[40px] text-gray ml-2">
        {nftData.rank}
      </span>
      <div className="bg-gray p-2 rounded-md h-full flex flex-col items-center">
        <h1 className="text-seaBlue text-[22px] font-coolvetica mb-2">
          BoredApeYachtClub
        </h1>
        <div className="flex flex-col items-center mb-2">
          <img
            src={nftData.collection_image}
            className="rounded-full w-32 h-32"
          />
          <div className="flex flex-col items-center mt-2">
            <span className="flex items-center gap-2 text-[18px] font-openSans ">
              <p>Floor {nftData.floor_price_usd} USD</p>
              <FontAwesomeIcon size="sm" icon={faChevronUp} color="#68A80D" />
            </span>
            <span className="text-[11px] font-robotoLight mt-1">1 min ago</span>
          </div>
        </div>
        <div className="text-[12px] font-openSans flex items-center gap-2 mb-2">
          <p>24 hour change</p>
          <p className="text-priceGreen text-md">+1.3%</p>
        </div>
        <button className="self-stretch">Predict</button>
      </div>
    </div>
  );
};

export default RecentNftCard;
