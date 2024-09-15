"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

// Header component for the application
function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 border shadow-sm">
      <div className="flex items-center justify-between">
        <Image src={logo} height={75} width={75} />
        {isSignedIn ? (
          <div className="flex items-center gap-5">
            <Link href={"/dashboard"}>
              <Button variant="outline">Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton>
            <Button>Get Started</Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export default Header;
