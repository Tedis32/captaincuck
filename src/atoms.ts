import { atom } from "recoil";

type SelectedNftType = { [key: string]: number };

export const devMode = atom({
  key: "devMode",
  default: false,
});

export const MobileMenuEnabled = atom({
  key: "mobileMenuEnabled",
  default: false,
});

export const walletConnected = atom<boolean>({
  key: "walletConnection",
  default: false,
});

export const activeAccount = atom({
  key: "activeAccount",
  default: "",
});

export const currentNetwork = atom({
  key: "currentNetwork",
  default: "",
});

export const currentNetworkID = atom({
  key: "currentNetworkID",
  default: 0,
});

export const activeTokenID = atom({
  key: "activeTokenID",
  default: "",
});

export const selectedStakedNftsState = atom<SelectedNftType>({
  key: "selectedStakedNftsState",
  default: {},
});

export const selectedUnstakedNftsState = atom<SelectedNftType>({
  key: "selectedUnstakedNftsState",
  default: {},
});

export const navbarExpandedState = atom<boolean>({
  key: "navbarExpandedState",
  default: false,
});

export const isLoadingState = atom<boolean>({
  key: "loading",
  default: false,
});
