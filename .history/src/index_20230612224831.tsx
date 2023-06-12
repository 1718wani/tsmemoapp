import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import  "../src/input.css"

if (typeof window === 'object') {
  //documentを使う関数を入れる
  const container = document.getElementById("root");
  hydrateRoot(container!, <App />);

}






