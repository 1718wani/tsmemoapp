import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import  "../src/input.css"
const root = createRoot(container);



const container = document.getElementById("root");
const root = createRoot(container);
hydrateRoot(container!, <App />);



