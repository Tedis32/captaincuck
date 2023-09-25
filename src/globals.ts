const globals = {
  ABI_FETCH_URL: import.meta.env.VITE_FTM_SCAN_ROOT_URL,
  FTM_API_KEY: import.meta.env.VITE_FTM_SCAN_API_KEY,
  OPENSEA_API_KEY: import.meta.env.VITE_OPENSEA_API_KEY,

  ANKR_RPC_URL: import.meta.env.VITE_ANKR_RPC_URL,
  ANKR_API_KEY: import.meta.env.VITE_ANKR_API_KEY,

  NOVABLOX_API_ROOT: import.meta.env.VITE_NOVABLOX_API_ROOT,

  ENVIRONMENT: import.meta.env.MODE,
};

import.meta.env.PROD ? null : console.log("");

export default globals;
