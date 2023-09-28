import { Collection } from "nftscan-api/dist/src/types/evm";
import { NFTScanNFTData } from "../../pages/types";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

type RecentNftCardProps = {
  nftData: Collection;
};

const RecentNftCard = ({ nftData }: RecentNftCardProps) => {
  return (
    <div className="relative mt-2 w-64 hover:animate-[pulse_1s_ease-in-out_infinite] hover:-translate-y-1.5 border-[2px] border-seaBlue">
      <div className="bg-black bg-opacity-25 p-2 rounded-md h-full flex flex-col items-center">
        <h1 className="text-seaBlue text-[18px] font-coolvetica">
          {nftData.name}
        </h1>
        <div className="flex flex-col items-center mb-2">
          <img src={nftData.logo_url} className="rounded-full w-32 h-32" />
          <div className="flex flex-col items-center mt-2">
            <span className="flex items-center gap-2 text-[18px] font-openSans ">
              <p>Floor {nftData.floor_price} ETH</p>
            </span>
            <Link
              className="text-[11px] font-robotoLight mt-1"
              to={"https://etherscan.io/address/" + nftData.contract_address}
              target="#"
              onClick={(e) => e.stopPropagation()}
            >
              {nftData.contract_address.substring(0, 5)}...
              {nftData.contract_address.substring(
                nftData.contract_address.length - 4,
                nftData.contract_address.length
              )}
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <p className="text-priceGreen text-[12px] font-openSans items-center gap-2 mb-2">
            Floor price: {nftData.floor_price}
          </p>
          {/* <NumericFormat
            value={parseInt(nftData.sales_total as string).toFixed(2)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            className="text-priceGreen text-[12px]"
          /> */}
        </div>
        <a
          className="font-openSans py-2 px-4 rounded-l no-underline"
          href={nftData.website ? nftData.website : "https://opensea.com"}
          target="#"
          onClick={(e) => e.stopPropagation()}
        >
          Website
        </a>
      </div>
    </div>
  );
};

export default RecentNftCard;
