import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router";

export default function Layouts() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar showSidebar={showSidebar} />
      <div
        className={`transition-all duration-300 ${showSidebar ? "mr-60" : "mr-0"}`}
      >
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main className="flex-1 relative">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
