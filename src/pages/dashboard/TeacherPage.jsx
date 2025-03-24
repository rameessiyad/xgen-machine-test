import React from "react";
import TeacherTable from "../../components/TeacherTable";

const TeacherPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Teacher Management</h2>
      <TeacherTable />
    </div>
  );
};

export default TeacherPage;
