import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../conponents/Footer/Footer";
import Navbar from "../conponents/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
