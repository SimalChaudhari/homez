import React from "react";
import Header from "./Header";
import Footer from "./footer";
import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes
import './LyoutCss.css';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-custome-black">
      <Header />
      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
