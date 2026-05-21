// client/src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 text-center">
      {/* 404 Visual Text */}
      <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest animate-bounce">
        404
      </h1>
      
      {/* Visual Badge */}
      <div className="bg-indigo-100 text-indigo-700 px-3 py-1 text-sm rounded-md font-medium mt-4 select-none">
        Page Not Found
      </div>

      {/* Friendly Message */}
      <h2 className="text-3xl font-bold text-gray-800 mt-6">
        Oops! Looking for a furry friend?
      </h2>
      <p className="text-gray-600 mt-3 max-w-md">
        The page you are looking for doesn't exist or has been moved. Let's get you back to the main portal so you can find your perfect pet match!
      </p>

      {/* Back to Home Button */}
      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
        >
          {/* Back Home icon */}
          <svg
            className="mr-2 -ml-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;