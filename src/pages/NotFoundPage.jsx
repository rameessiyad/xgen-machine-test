import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-700 mt-2">Oops! Page Not Found</p>
      <Link
        to="/dashboard"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFoundPage;
