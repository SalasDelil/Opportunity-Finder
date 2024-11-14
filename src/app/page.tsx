"use client";

import React from "react";
import Navbar from "./features/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Navbar>
      <div className="relative flex flex-col items-center justify-start pt-6 w-full min-h-screen text-white bg-[url('./assets/background02.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col items-center">

        <h1 className="text-5xl font-bold mb-6">
          Welcome to Opportunity Finder
        </h1>
        <p className="text-lg mb-12 text-center max-w-2xl">
          Explore and apply for exciting opportunities that align with your
          skills and interests. Find volunteer positions, internships, and more
          to help grow your career.
        </p>
        <button
          onClick={() => (session ? router.push("/opportunities/search") : router.push("/signin"))}
          className="text-xl font-semibold text-white hover:shadow-md hover:shadow-purple-700 bg-gradient-to-r from-blue-400 to-purple-700  rounded-full px-3 py-2 transition ease-in duration-400"
        >
          Search Opportunities
        </button>
      </div>
      </div>
    </Navbar>
  );
}
