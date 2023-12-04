import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AllProducts } from "./Context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AllProducts>
    <App />
  </AllProducts>
);
