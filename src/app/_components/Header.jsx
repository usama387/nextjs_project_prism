"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

// Header components that renders logo and user details
const Header = () => {
  // getting user from this hook
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-md">
      <Image src="/logo.svg" alt="logo" width={160} height={100} />

      {/* if user is signedIn renders its userButton otherwise Link redirects user to sign-in page */}
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href="/sign-in">
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
