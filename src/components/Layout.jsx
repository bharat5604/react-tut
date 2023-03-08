import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import TopNavbar from "./common/TopNavbar";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNavbar />
      <Navbar />
      <div className=" flex-1 p-5">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
