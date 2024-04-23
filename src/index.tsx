import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import App from "./containers/App";
import { history } from "./utils/historyUtils";
import { FlagProvider } from "@unleash/proxy-client-react";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#fff",
    },
  },
});

const root = createRoot(document.getElementById("root")!);

const config = {
  url: "http://localhost:4242/api/frontend", // Your local instance Unleash API URL
  clientKey: "*:development.e8f009be354b6ae9fb142fe0dd9132c144aa32c0bd85d113df9c387d", // Your client-side API token
  refreshInterval: 15, // How often (in seconds) the client should poll the proxy for updates
  appName: "cypress-realworld-app", // The name of your application. It's only used for identifying your application
};

root.render(
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <FlagProvider config={config}>
        <App />
      </FlagProvider>
    </ThemeProvider>
  </Router>
);
