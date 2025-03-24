import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold">Total Students</h3>
          <p className="text-xl">150</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold">Total Teachers</h3>
          <p className="text-xl">20</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold">Courses</h3>
          <p className="text-xl">10</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
