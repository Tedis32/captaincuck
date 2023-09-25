import BAYCImage from "../../assets/images/BORED-APE.jpg";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TrendingNFTData } from "../../pages/types";

type NFTListItemProps = {
  nftData: TrendingNFTData;
};

const NFTListItem = ({ nftData }: NFTListItemProps) => {
    return (
      <div className="bg-gray rounded-sm flex flex-col flex-row items-start md:items-center w-full mb-2 p-2 md:space-x-4 space-y-2 md:space-y-0">
        <div className="flex items-center space-x-2 flex-grow">
          <img
            src={nftData.collection_image}
            className="rounded-full w-12 h-12"
          />
          <p className="text-seaBlue text-[10px] md:text-[12px] lg:text-[16px] font-coolvetica">
            {nftData.collection_title}
          </p>
        </div>
  
        <div className="flex items-center space-x-1 flex-grow">
            {/* You can add content here */}
        </div>
  
        <div className="text-[10px] md:text-[12px] lg:text-[16px] font-openSans flex items-center space-x-1 lg:space-x-5 flex-grow">
          <p>24 hour vol</p>
          <p
            className={`text-${
              parseFloat(nftData.volume_24hr_perecent_change) > 0
                ? "priceGreen"
                : "priceRed"
            } text-md`}
          >
            {nftData.volume_24hr_perecent_change}%
          </p>
          <FontAwesomeIcon
            size="sm"
            icon={
              parseFloat(nftData.volume_24hr_perecent_change) < 0
                ? faChevronDown
                : faChevronUp
            }
            color={
              parseFloat(nftData.volume_24hr_perecent_change) < 0
                ? "#ed123e"
                : "#68A80D"
            }
            className="pb-3"
          />
        </div>
      </div>
    );
  };
  

export default NFTListItem;
