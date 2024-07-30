import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-[100vh]">
      <h3 className="font-semibold text-2xl text-blue-500">
        Welcome to Project Prism
      </h3>
      <SignUp />
    </div>
  );
}
