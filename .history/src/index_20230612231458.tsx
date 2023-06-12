import React from "react";
import ReactDOM from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "../src/input.css";
import { createRoot } from "react-dom/client";


const container = document.getElementById("root");
hydrateRoot(container!, <App />);
