import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { mainTheme } from "./Configurations/MaterialUIConfig";
import { ThemeProvider } from "@material-ui/styles";

ReactDOM.render(
  <ThemeProvider theme={mainTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
