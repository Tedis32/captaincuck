/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import Home from "./routes/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import My404 from "./routes/My404";

import Web3 from "web3";
import { activeAccount, currentNetworkID, isLoadingState } from "./atoms";
import { Toaster, toast } from "react-hot-toast";
import detectEthereumProvider from "@metamask/detect-provider";
import "@fontsource/public-sans";
import SidebarNav from "./redesign/components/SideNavBar";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import RecentNftCard from "./components/prediction/RecentNftCard";
import PredictionPage from "./pages/PredictionPage";
let detectedProvider: any;

function App() {
  const { ethereum } = window;
  const [networkId, setNetworkId] = useRecoilState<number>(currentNetworkID);
  const account = useRecoilValue(activeAccount);
  const isLoading = useRecoilValue(isLoadingState);

  const web3 = new Web3(Web3.givenProvider);

  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [showFooter, setShowFooter] = useState<boolean>(true);

  function useScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

  // async function listenForNetwork() {
  //   const targetNetworkId = import.meta.env.VITE_DEFAULT_NETWORK_ID;
  //   try {
  //     // Try to switch network
  //     console.log("Switching to network:", targetNetworkId);
  //     // await ethereum.request({
  //     //   method: "wallet_switchEthereumChain",
  //     //   params: [{ chainId: targetNetworkId }],
  //     // });
  //     // setNetworkId(parseInt(targetNetworkId));
  //   } catch (error: any) {
  //     // This error code means that the chain we want has not been added to MetaMask
  //     // In this case we ask the user to add it to their MetaMask
  //     if (error.code === 4902) {
  //       await ethereum.request({
  //         method: "wallet_addEthereumChain",
  //         // params: [
  //         //   {
  //         //     chainId: "0xFA",
  //         //     rpcUrls: ["https://rpc.ankr.com/fantom/"],
  //         //     chainName: "Fantom Opera",
  //         //     nativeCurrency: {
  //         //       name: "Fantom",
  //         //       symbol: "FTM",
  //         //       decimals: 18,
  //         //     },
  //         //     blockExplorerUrls: ["https://ftmscan.com/"],
  //         //   },
  //         // ],
  //         params: [
  //           {
  //             chainId: "0x539",
  //             rpcUrls: ["http://127.0.0.1:7545"],
  //             chainName: "Localhost",
  //             nativeCurrency: {
  //               name: "ETH",
  //               symbol: "Eth",
  //               decimals: 18,
  //             },
  //             blockExplorerUrls: ["https://ftmscan.com/"],
  //           },
  //         ],
  //       });

  //       // FIXME
  //       setNetworkId(1337);
  //     }
  //   }
  // }

  // async function setupApplication() {
  //   let provider = await detectEthereumProvider();

  //   if (!provider) {
  //     toast.error("Could not detect Provider, do you have MetaMask installed?");
  //     return;
  //   }

  //   await listenForNetwork();
  //   listenConnectionChange();

  //   detectedProvider = provider;
  // }

  useScrollToTop();

  // async function listenConnectionChange() {
  //   ethereum.on("chainChanged", (networkId: number) => {
  //     setNetworkId(networkId);
  //     window.location.reload();
  //   });
  // }

  // useEffect(() => {
  //   setupApplication();
  // }, []);

  return (
    <div className="flex flex-col h-screen">
      {isLoading && <Loader />}
      <Toaster
        position="bottom-center"
        gutter={8}
        toastOptions={{
          duration: 5000,
          style: {
            background: "#1e1e1e",
            color: "#A3A3A3",
          },
        }}
      />

      <SidebarNav />

      <div className="flex flex-col min-h-screen ml-16">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<PredictionPage />} />
          <Route path="/404" element={<My404 />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        {/* {showFooter && <Footer />} */}
      </div>
    </div>
  );
}

export default App;
