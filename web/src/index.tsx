import "./public/global.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Cannot find 'root' container.");
}

const root = ReactDOM.createRoot(container);
root.render(<App />);
