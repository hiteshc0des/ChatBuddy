"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 sticky top-0 z-50">
      {" "}
      {/* Added sticky, top-0, and z-50 */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-lg font-bold cursor-pointer">
            ChatBuddy
          </span>
        </Link>
        <div className="flex space-x-4">
          <Link href="/">
            <span className="text-white hover:bg-blue-700 px-3 py-2 rounded cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/forums">
            <span className="text-white hover:bg-blue-700 px-3 py-2 rounded cursor-pointer">
              Forums
            </span>
          </Link>
          <Link href="/chat">
            <span className="text-white hover:bg-blue-700 px-3 py-2 rounded cursor-pointer">
              UserChat
            </span>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
