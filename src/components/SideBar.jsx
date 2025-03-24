import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  FaSignOutAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaTachometerAlt,
} from "react-icons/fa";
import { logout } from "../redux/slices/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul>
        <li className="mb-4">
          <Link to="/dashboard" className="flex items-center gap-2">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/dashboard/students" className="flex items-center gap-2">
            <FaUserGraduate /> Students
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/dashboard/teachers" className="flex items-center gap-2">
            <FaChalkboardTeacher /> Teachers
          </Link>
        </li>
        <li className="mt-10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 p-2 cursor-pointer"
          >
            <FaSignOutAlt /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
