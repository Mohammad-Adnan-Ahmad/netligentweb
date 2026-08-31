import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import MainHeading from "./components/HomeComponents/MainHeading";
import CustomCursor from "./components/Others/CustomCursor";
import SmoothScroll from "./components/Others/SmoothScroll";
import Footer from "./components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <MainHeading />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}