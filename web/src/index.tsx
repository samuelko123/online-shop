import "./public/global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { LandingPage } from "./components/pages/LandingPage";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Cannot find 'root' container.");
}

const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>,
);
