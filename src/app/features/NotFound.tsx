"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <button className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
