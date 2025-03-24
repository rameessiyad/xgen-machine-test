import React from "react";
import StudentTable from "../../components/StudentTable";

const StudentPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Student Management</h2>
      <StudentTable />
    </div>
  );
};

export default StudentPage;
