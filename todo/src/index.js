import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Landing from "./components/Landing/Landing";
import Login from "./components/Authentication_/Login";
import Signup from "./components/Authentication_/Signup";
import Level from "./components/Test/Level"

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/level" element={<Level />} />
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
