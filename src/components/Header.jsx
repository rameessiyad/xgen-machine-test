import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-3 py-1 focus:outline-none focus:ring"
          />
          <FaSearch className="absolute right-3 top-2 text-gray-500" />
        </div>
        <FaUserCircle className="text-2xl text-gray-700 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
