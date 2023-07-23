import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./Searchbar";
import Body from "./Body";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Body />
      <Footer />
    </div>
  );
};

export default Landing;
