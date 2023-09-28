import SeagenLogo from "/src/assets/images/seagenlogo.jpg";

import {
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import {
  faTelegramPlane,
  faTwitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import NavItem from "./SideBarNav/NavItem";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeAccount,
  navbarExpandedState,
  walletConnected,
} from "../../atoms";
export default function SidebarNav() {
  const isWalletConnected = useRecoilValue(walletConnected);
  const account = useRecoilValue(activeAccount);

  const [isExpanded, setExpanded] = useRecoilState(navbarExpandedState);

  const handleExpansion = () => {
    setExpanded(!isExpanded);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  let expandedClass = isExpanded ? "w-[60vw] md:w-[25%]" : "w-16 xl:w-19";
  let maxNavWidth = "max-w-[220px]";
  let navbarAnimationDuration = isExpanded
    ? "duration-[550ms]"
    : "duration-[550ms]";
  let expandedIndicatorDirection = isExpanded ? "rotate-0" : "rotate-180";

  return (
    <div className="z-40">
      <nav
        className={`${expandedClass} ${navbarAnimationDuration} ${maxNavWidth} z-[2] overflow-hidden transition-width h-full fixed flex flex-col justify-between bg-navbarNavy text-center border-r-2 border-mediumGray`}
      >
        <br />

        <img src={SeagenLogo} className="object-cover w-18 h-18 " />
        <div
          className="flex flex-row w-full items-center cursor-pointer relative"
          onClick={() => {
            handleExpansion();
          }}
        >
          <div className="absolute right-[-20px] top-0">
            <div
              className={`flex flex-col z-50 rounded-full border-2 border-mediumGray`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-mediumGray mr-4 ${expandedIndicatorDirection} transition-transform ${navbarAnimationDuration}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-8 z-[2]">
          <NavItem
            label="Home"
            isExpanded={isExpanded}
            icon={faHouse}
            to="/home"
          ></NavItem>
          {/* <NavItem
            label="Contract"
            isExpanded={isExpanded}
            icon={faMoneyBill1Wave}
            onClick={()=> alert('AARRR Shes Deploying on the 21/08/2023')}
          ></NavItem> */}
          <NavItem
            label="Telegram"
            inNewTab={true}
            isExpanded={isExpanded}
            icon={faTelegramPlane}
            to="https://t.me/captaincuck"
          />
          <NavItem
            label="Twitter"
            inNewTab={true}
            isExpanded={isExpanded}
            icon={faTwitter}
            to="https://twitter.com/captaincucketh"
          ></NavItem>
          <NavItem
            label="Medium"
            inNewTab={true}
            isExpanded={isExpanded}
            icon={faMedium}
            to="https://medium.com/@capncuckai/the-legend-of-captain-cuck-a79ff1f86845"
          ></NavItem>
        </div>
        <br />
        <br />
        <br />

        {/* 
        <div className="">
          <NavItem
            onClick={async () => await AuthService.connect(window.ethereum)}
            label={
              isWalletConnected ? AccountUtils.trimString(account) : "Connect"
            }
            isExpanded={isExpanded}
            icon={faWallet}
          ></NavItem>
        </div> */}
      </nav>
      <div
        onTouchStart={() => {
          closeNav();
        }}
        onMouseDown={() => {
          closeNav();
        }}
        className={`${isExpanded ? "block" : "hidden"} fixed inset-0 z-[1]`}
      ></div>
    </div>
  );
}
