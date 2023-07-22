import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LandingPage from "./components/Landing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
