import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
/* import SidebarMenu from "../SidebarMenu/SidebarMenu"; */
export default function Layouts() {
  return (
    <>
      {/* <SidebarMenu> */}
        <Header />
        <main className="flex-1 relative">
          <Outlet />
        </main>
        <Footer />
      {/* </SidebarMenu> */}
    </>
  );
}
