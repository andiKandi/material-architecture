import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Router } from "./routes/Router";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
