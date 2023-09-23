import BAYCImage from "../../assets/images/BORED-APE.jpg";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type RecentNftCardProps = {
  NFTNumber: number;
};

const RecentNftCard = ({ NFTNumber }: RecentNftCardProps) => {
  return (
    <div className="relative mt-2 max-w-xs justify-center">
      <span className="font-bold font-baloo text-[60px] text-gray ml-2">
        #{NFTNumber}
      </span>
      <div id="border" className="bg-gray p-2 mt-[-32px] rounded-md min-h-max">
        <div
          id="container"
          className="bg-background p-1 rounded-md flex-col flex"
        >
          <h1 className="text-seaBlue text-[28px] font-coolvetica flex-wrap flex">
            BoredApeYachtClub
          </h1>
          <h3 className="font-coolvetica">BAYC</h3>
          <div className="flex flex-col">
            <div>
              <img
                src={BAYCImage}
                className="object-cover h-60 w-80 self-center"
              />
            </div>
            <span className="flex flex-col">
              <span className="flex flex-row gap-2">
                <p className="text-[18px] font-openSans ">
                  Last sold for: 12.4 ETH
                </p>
                <div className="flex flex-row justify-center pt-1.5">
                  <FontAwesomeIcon
                    size="sm"
                    icon={faChevronUp}
                    color="#68A80D"
                  />
                </div>
              </span>
              <span className="text-[11px] font-robotoLight">1 min ago</span>
            </span>
            <span className="text-[12px] font-openSans flex flex-row gap-2">
              <p>24 hour change</p>
              <p className="text-openSans text-priceGreen text-md">+1.3%</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNftCard;
