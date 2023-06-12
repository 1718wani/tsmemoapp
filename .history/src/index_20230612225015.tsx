import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import  "../src/input.css"

if (process.browser) 
{
　windowやdocumentを使う処理を記述
}

const container = document.getElementById("root");
hydrateRoot(container!, <App />);



