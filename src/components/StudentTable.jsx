import React, { useState } from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: (row) => row.id, sortable: true },
  { name: "Name", selector: (row) => row.name, sortable: true },
  { name: "Class", selector: (row) => row.className, sortable: true },
  { name: "Email", selector: (row) => row.email },
];

const data = [
  { id: 1, name: "John Doe", className: "10th", email: "john@example.com" },
  { id: 2, name: "Jane Smith", className: "12th", email: "jane@example.com" },
  {
    id: 3,
    name: "Alice Johnson",
    className: "11th",
    email: "alice@example.com",
  },
  { id: 4, name: "Bob Brown", className: "10th", email: "bob@example.com" },
];

const StudentTable = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    setFilteredData(
      data.filter((student) => student.name.toLowerCase().includes(query))
    );
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Student List</h2>

      <input
        type="text"
        placeholder="Search students..."
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

export default StudentTable;
