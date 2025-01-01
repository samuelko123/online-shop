import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';

const container = document.createElement("div");
container.id = "root";
document.body.appendChild(container);

const root = ReactDOM.createRoot(container);
root.render(<App />);
