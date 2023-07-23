import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LandingPage from "./components/Landing";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      <Navbar />
      <SearchBar />
      <Buttons />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
