import React from "react";
import SideNavBar from "./_components/SideNavBar";
import DashboardHeader from "./_components/DashboardHeader";

// this layout first renders sideNavbar component and then children which is dashboard its self on dashboard route
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <SideNavBar />
      </div>
    
      {/* renders dashboard header and dashboard body */}
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
