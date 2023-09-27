import { useState } from "react";
import { NFTScanNFTData } from "../../pages/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import PredictionComponent from "./PredictionComponent";

type NFTDataPredictionModalProps = {
  data: NFTScanNFTData;
  onClose: any;
};

const NFTDataPredictionModal = ({
  data,
  onClose,
}: NFTDataPredictionModalProps) => {
  const [predictionState, setPredictionState] = useState(0);

  const getPredictionState = () => {
    if (predictionState === 0) {
      return (
        <button
          type="button"
          className="ml-1 inline-block rounded bg-seaBlue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={() => setPredictionState(1)}
        >
          Predict Price
        </button>
      );
    } else if (predictionState === 1) {
      return <PredictionComponent contractAddress={data.contract_address} />;
    }
  };

  return (
    <div
      data-te-modal-init
      className="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black bg-opacity-50"
      id="exampleModalCenteredScrollable"
      aria-labelledby="exampleModalCenteredScrollableLabel"
      aria-modal="true"
      role="dialog"
      onClick={() => {
        setPredictionState(0);
        onClose();
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        data-te-modal-dialog-ref
        className="relative flex min-h-[calc(100%-1rem)] w-auto items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
      >
        <div className="p-3 pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-black bg-opacity-90 bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            <h5
              className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
              id="exampleModalCenteredScrollableLabel"
            >
              {data.symbol}
            </h5>
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-modal-dismiss
              aria-label="Close"
              onClick={() => {
                setPredictionState(0);
                onClose();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="relative p-4">
            <p className="text-white font-openSans">Token Info:</p>
            <br />
            <div className="flex flex-row gap-4">
              <img src={data.logo_url} className="rounded-full h-32 w-32" />
              <span className="flex flex-col">
                <p className="font-jumper text-[13px] text-seaBlue font-[700]">
                  {data.name}
                </p>
                <p className="text-white font-openSans text-[10px]">
                  {data.description}
                </p>
              </span>
            </div>
            <br />
            <p className="text-white font-openSans">
              Floor: {data.opensea_floor_price} {data.price_symbol}
            </p>
            <p className="text-white font-openSans">Contract Address</p>
            <div className="flex flex-row gap-2">
              {data.contract_address.substring(0, 4)}
              ...
              {data.contract_address.substring(
                data.contract_address.length - 4,
                data.contract_address.length
              )}
              <div
                onClick={() => {
                  navigator.clipboard.writeText(data.contract_address);
                }}
                className="gap-"
              >
                <FontAwesomeIcon icon={faClipboard} />
              </div>
            </div>
            <br />
            <br />
            <div className="flex flex-row justify-between">
              <p className="text-white font-openSans">Socials</p>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </div>
          </div>

          <div className="flex flex-shrink-0 flex-wrap items-center justify-center rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            {getPredictionState()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDataPredictionModal;
