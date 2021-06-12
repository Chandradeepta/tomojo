import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { mainTheme } from "./Configurations/MaterialUIConfig";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
