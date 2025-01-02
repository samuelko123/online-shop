import "./assets/global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { LandingPage } from "./components/pages/LandingPage";
import { ProductListingPage } from "./components/pages/ProductListingPage";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Cannot find 'root' container.");
}

const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListingPage />} />
    </Routes>
  </BrowserRouter>,
);
