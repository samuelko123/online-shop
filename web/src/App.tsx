import React from 'react';
import { Logo } from './components/Logo';

export const App = () => {
  return (
    <>
      <header>
        <a href="/" id="logo-link">
          <Logo size={40} color='#ffffff' />
          <span>Online Shop</span>
        </a>
      </header>
    </>
  );
};
