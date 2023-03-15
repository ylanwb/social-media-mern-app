import App from "./App";
import './index.css';
import React from 'react';
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
