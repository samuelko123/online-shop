import React from "react";

import { Logo } from "./components/Logo";

export const App = () => {
  return (
    <>
      <header>
        <a href="/" id="logo-link">
          <Logo />
          <span>Online Shop</span>
        </a>
      </header>
      <main>
        <div id="hero-container">
          <div id="hero-message">
            <h1>What are you waiting for?</h1>
            <button>Shop now</button>
          </div>
          <img id="hero-image" src="/hero-image.svg" alt="image" />
        </div>
      </main>
    </>
  );
};
