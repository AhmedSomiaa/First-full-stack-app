import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const root = document.getElementById("root");

const appRoot = (
  <Router>
    <App />
  </Router>
);

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(appRoot);
