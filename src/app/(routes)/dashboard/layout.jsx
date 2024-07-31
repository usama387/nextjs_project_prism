"use client";

import React, { useEffect } from "react";
import SideNavBar from "./_components/SideNavBar";
import DashboardHeader from "./_components/DashboardHeader";
import { db } from "../../../../utils/dbConfig";
import { Budgets } from "../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";

// this layout first renders sideNavbar component and then children which is dashboard its self on dashboard route
const DashboardLayout = ({ children }) => {
  // to get current user
  const { user } = useUser();

  // when the user available useEffect then only invokes the function
  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  // to redirect user
  const router = useRouter();

  // check if user has created any budgets
  const checkUserBudgets = async () => {
    const response = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));

    // this condition navigates user on budgets page if it didn't create any budget
    if (response?.length === 0) {
      router.replace("/dashboard/budgets");
    }

    console.log(response);
  };

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
