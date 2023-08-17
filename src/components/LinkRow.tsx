import React, { useState, useEffect, useMemo } from "react";
import {
  BsTwitter,
  BsGlobe,
  BsDiscord,
  BsTelegram,
  BsMedium,
} from "react-icons/bs";
import paintswap from "../assets/images/paintswap.png";
const logos = new Map();

logos.set(
  "nftkey",
  <img
    src="https://cdn.nftkey.app/images/logos/nftkey-logo-circle-black.svg"
    className="w-[30px]"
  />
);
logos.set(
  "contract",
  <img
    src="https://etherscan.io/images/brandassets/etherscan-logo-circle.svg"
    className="w-[30px]"
  />
);
logos.set("paintswap", <img src={paintswap} className="w-[30px]" />);

logos.set("website", <BsGlobe size={30} color="white" />);
logos.set("twitter", <BsTwitter size={30} color="white" />);
logos.set("telegram", <BsTelegram size={30} color="white" />);
logos.set("discord", <BsDiscord size={30} color="white" />);
logos.set("medium", <BsMedium size={30} color="white" />);

const LinkRow = ({ links, style }: any) => {
  return (
    <div className="flex-row flex gap-3">
      {links.map((item: any, index: any) => {
        const componentType = String(Object.keys(item));
        return (
          <div key={index}>
            <a href={`${Object.values(item)}`} target="_blank">
              {logos.get(componentType)}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default LinkRow;
