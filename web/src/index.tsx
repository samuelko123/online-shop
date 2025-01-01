import "./public/global.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

// create root container
const container = document.createElement("div");
container.id = "root";

// insert container into document body
document.body.appendChild(container);

// render React components into container
const root = ReactDOM.createRoot(container);
root.render(<App />);
