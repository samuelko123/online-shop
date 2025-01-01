import React from 'react';
import { Logo } from './components/Logo';

export const App = () => {
  return (
    <>
      <header>
        <Logo size={40} color='#ffffff' />
      </header>
      <p>Hello, world!</p>
    </>
  );
};
