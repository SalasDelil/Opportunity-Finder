import Link from "next/link";
import React from "react";

const Navbar = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-gradient-to-r from-blue-400 to-purple-700 p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
        <Link href="/">
          <h1 className="text-3xl border-y-2 p-2 rounded-full w-fit font-bold">Opportunity Finder</h1>
        </Link>
      </header>
      {children}
      <footer className="w-full bg-gradient-to-r from-blue-400 to-purple-700 p-4 mt-auto text-white shadow-lg hover:shadow-xl transition-shadow">
        <p className="text-center">
          © 2024 Opportunity Finder. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Navbar;
