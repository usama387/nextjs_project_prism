"use client";
import Image from "next/image";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

// child component of DashboardLayout
const SideNavBar = () => {
  // to determine current user path
  const pathname = usePathname();
  console.log(pathname);

  // sidebar menu options
  const sideMenuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  return (
    <div className="h-screen p-5 border shadow-sm">
      <Image src="/logo.svg" alt="logo" width={160} height={100} />
      <div className="mt-16">
        {sideMenuList.map((menu) => (
          <Link href={menu.path} key={menu.id}>
            <h2
              className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 mb-4 ${
                pathname === menu.path && "text-primary bg-blue-200"
              }`}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-10 flex items-center gap-2 font-semibold text-2xl p-5 bg-blue-100 rounded-md w-52">
        <UserButton />
        Profile
      </div>
    </div>
  );
};

export default SideNavBar;
