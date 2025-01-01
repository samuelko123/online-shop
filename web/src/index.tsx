import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';

// create root div
const container = document.createElement("div");
container.id = "root";

// add div to document body
document.body.appendChild(container);

// load React components into div
const root = ReactDOM.createRoot(container);
root.render(<App />);
