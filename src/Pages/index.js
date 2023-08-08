import React from "react";
import Home from "./home";
import Product from "./product";
import "../Globle/responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, SubNavBar, Footer } from "../Components/index";

const index = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <SubNavBar />
        {/* <HomeSlider /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product/:name" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default index;
