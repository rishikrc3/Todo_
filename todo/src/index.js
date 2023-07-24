import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Landing from "./components/Landing/Landing";
import Login from "./components/Authentication_/Login";
import Signup from "./components/Authentication_/Signup";
import "./components/Landing/index.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      <Signup />
    </BrowserRouter>
  </React.StrictMode>
);
