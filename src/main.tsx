import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Buffer as BufferPolyFill } from "buffer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import RecoilNexus from "recoil-nexus";
import { createBrowserHistory } from "history";
import { useEffect } from "react";
import React from "react";

globalThis.Buffer = BufferPolyFill;

const root = ReactDOM.createRoot(document.getElementById("root")!);
const history = createBrowserHistory();

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
  }, [location]);
}

function AppContainer() {
  usePageViews();
  return <App />;
}

root.render(
  // TODO: Strict mode runs all useEffects twice to debug any isssues, disabling for now
  // <React.StrictMode>
  <RecoilRoot>
    <RecoilNexus />
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <AppContainer />
      </Router>
    </ThemeProvider>
  </RecoilRoot>
  // </React.StrictMode>
);
