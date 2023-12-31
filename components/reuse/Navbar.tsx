"use client";

import Link from "next/link";
import React from "react";
import { useSession, signIn} from "next-auth/react";
import { ModeToggle } from "@/components/reuse/ModeToggle";

import { Button } from "@/components/ui/button";

import { ProfileAvatar } from "./ProfileAvatar";

import { SeachItems } from "./SeachItems";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <>
      <header className="sticky w-[100vw] top-0 z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* CONTAINER */}
        <div className="container   ">
          <div className=" flex  h-14 items-center  ">
            {/* MAIN DIV */}
            {/* DIV FRIST PART */}
            <div className="flex-auto hidden md:block ">
              <span className="hidden font-bold sm:inline-block">
                <Link
                  href="/
"
                >
                  Dota 2 Store
                </Link>
              </span>
              <Button variant="link">
                <Link
                  href="/documentation
"
                >
                  Documentation
                </Link>
              </Button>

              <Button variant="link">
                <Link
                  href="/components
"
                >
                  Components
                </Link>
              </Button>
              <Button variant="link">
                <Link
                  href="/Theme
"
                >
                  Themes
                </Link>
              </Button>

              <Button variant="link">
                <Link
                  href="/examples
"
                >
                  Examples
                </Link>
              </Button>
            </div>
            {/* DIV FRIST PART */}
            {/* DIV SECOND PART */}
            <div className=" flex-auto justify-end flex items-center gap-x-4">
              {/* <CommandDialog/> */}
              <div className=" w-[100%] md:w-64">
                <SeachItems />
              </div>
              {/* <Input/> */}
              <ModeToggle />

              {session?.user ? (
                <ProfileAvatar />
              ) : (
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => {
                    signIn();
                  }}
                >
                  Login
                </Button>
              )}
            </div>
            {/* DIV SECOND PART */}
            {/* MAIN DIV */}
          </div>
        </div>
        {/* CONTAINER */}
      </header>
    </>
  );
}
