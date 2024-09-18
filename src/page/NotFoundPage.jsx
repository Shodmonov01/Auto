import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-3xl md:text-4xl font-medium mt-4 text-gray-600">
          Oops! Page Not Found
        </h2>
        <p className="text-lg mt-2 text-gray-500">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-md shadow hover:bg-blue-600"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
