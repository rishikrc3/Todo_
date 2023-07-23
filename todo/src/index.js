import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LandingPage from "./components/Landing";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      <Navbar />
    </BrowserRouter>
  </React.StrictMode>
);
