"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="flex justify-between w-full bg-gradient-to-r from-blue-400 to-purple-700 p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
        <Link
          href="/"
          className="text-3xl border-y-2 p-2 rounded-full font-bold"
        >
          Opportunity Finder
        </Link>
        {session ? (
          <div className="flex justify-between items-center space-x-3">
            <img
              src={session.user?.image as string}
              alt="Image"
              className="rounded-full max-w-8 max-h-8"
            />
            <p>{session.user?.name}</p>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="rounded-full py-2 px-3 bg-violet-900 hover:bg-violet-600 shadow-md bg-transparent transition ease-in-out duration-500"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center space-x-3">
            <Link
              href="/signin"
              className="rounded-full py-2 px-3 bg-violet-900 hover:bg-violet-600 shadow-md bg-transparent transition ease-in-out duration-500"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-full py-2 px-3 bg-violet-900 hover:bg-violet-600 shadow-md bg-transparent transition ease-in-out duration-500"
            >
              Sign up
            </Link>
          </div>
        )}
      </header>
      {children}
      <footer className="w-full bg-gradient-to-r from-blue-400 to-purple-900 p-4 mt-auto text-white shadow-lg hover:shadow-xl transition-shadow">
        <p className="text-center">
          © 2024 Opportunity Finder. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Navbar;
