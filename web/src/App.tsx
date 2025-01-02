import React from "react";

import { Header } from "./components/molecules/Header";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <div id="hero-container">
          <div>
            <h1>What are you waiting for?</h1>
            <button>Shop now</button>
          </div>
          <img src="/hero-image.svg" alt="image" />
        </div>
      </main>
    </>
  );
};
