import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import  "../src/input.css"


const root = ReactDOM.createRoot(document.getElementById("root")!);
hydrateRoot(root, <App />);
// const container = document.getElementById("root");
// hydrateRoot(container!, <App />);



