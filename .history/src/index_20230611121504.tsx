import React from 'react';
import {ReactDOM hydrateRoot from 'react-dom/client';
import './index.css';
import App from './App';
import  "../src/input.css"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


