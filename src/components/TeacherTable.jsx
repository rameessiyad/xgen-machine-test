import React, { useState } from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: (row) => row.id, sortable: true },
  { name: "Name", selector: (row) => row.name, sortable: true },
  { name: "Subject", selector: (row) => row.subject, sortable: true },
  { name: "Email", selector: (row) => row.email },
];

const data = [
  {
    id: 1,
    name: "Mr. Anderson",
    subject: "Math",
    email: "anderson@example.com",
  },
  {
    id: 2,
    name: "Ms. Johnson",
    subject: "English",
    email: "johnson@example.com",
  },
  { id: 3, name: "Dr. Brown", subject: "Science", email: "brown@example.com" },
  { id: 4, name: "Mrs. Davis", subject: "History", email: "davis@example.com" },
];

const TeacherTable = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Handle search input change
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    setFilteredData(
      data.filter(
        (teacher) =>
          teacher.name.toLowerCase().includes(query) ||
          teacher.subject.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Teacher List</h2>

      <input
        type="text"
        placeholder="Search teachers by name or subject..."
        value={search}
        onChange={handleSearch}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        className="border"
      />
    </div>
  );
};

export default TeacherTable;
