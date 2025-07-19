import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import style from "./main.module.css";

function Main() {
  return (
    <>
      <Navbar />
      <main className={style.content}>
        <Outlet />  
      </main>
      <Footer />
    </>
  );
}

export default Main;
