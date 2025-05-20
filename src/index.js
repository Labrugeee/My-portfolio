import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const container = ReactDOM.createRoot(document.getElementById('top-container'));
container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
