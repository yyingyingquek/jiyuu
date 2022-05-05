import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import store from "./store/store";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "tw-elements";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
