import React from 'react';
import { Logo } from './components/Logo';

export const App = () => {
  return (
    <>
      <header>
        <a href="/" id="logo-link">
          <Logo />
          <span>Online Shop</span>
        </a>
      </header>
    </>
  );
};
