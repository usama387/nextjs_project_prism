import { UserButton } from "@clerk/nextjs";

const DashboardHeader = () => {
  return (
    <div className="p-5 shadow-md border-b flex items-center justify-between">
      <div>Search Bar</div>
      <div className="mr-10">
        <UserButton />
      </div>
    </div>
  );
};

export default DashboardHeader;
