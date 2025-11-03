// // ...existing code...
import React, { useContext } from "react";
import Navbar from "./Navbar";
// use the exact filename of your context file (userContext.jsx)
import { UserContext } from "../../context/UserContext";
import SideMenu from "./SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
  const ctx = useContext(UserContext) || {};
  const user = ctx.user || null;

  return (
    <div className="min-h-screen">
      <Navbar activeMenu={activeMenu} />

      <div className="flex">
        <div className="hidden md:block w-64">
          <SideMenu activeMenu={activeMenu} />
        </div>

        <main className="grow p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
// // ...existing code...
