import React from "react";
import ReactDOM from "react-dom";
import "./utils.css";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {Provider} from 'react-redux'
import store from "./state/store";

ReactDOM.render(
// eslint-disable-next-line
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

