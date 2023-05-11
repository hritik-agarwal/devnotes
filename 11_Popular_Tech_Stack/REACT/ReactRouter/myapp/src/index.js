import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
// import {MemoryRouter} from "react-router-dom";
// import {HashRouter} from "react-router-dom";
// import {BrowserRouterunstable_HistoryRouter} from "react-router-dom";
// import {StaticRouter} from "react-router-dom/server";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter location={"/books"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
