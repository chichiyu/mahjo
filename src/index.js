import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/styles/popup.css";
import App from "./App";
import Popup from "react-popup";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App playerID="0" />
    </BrowserRouter>
    <Popup></Popup>
  </React.StrictMode>,
  document.getElementById("root")
);
