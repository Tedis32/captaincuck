import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
  let env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    plugins: [react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    })],
    
    define: {
      "process.env": env,
    },
  });
};
