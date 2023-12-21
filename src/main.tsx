import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { enableReactComponents } from "@legendapp/state/config/enableReactComponents"

enableReactComponents()
enableReactTracking({ auto: true })

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
