import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
    return <div>Hello, world!</div>;
};

const div = document.createElement("div");
div.id = "root";
document.body.appendChild(div);

const root = ReactDOM.createRoot(div);
root.render(<App />);