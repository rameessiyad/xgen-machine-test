import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent, deleteStudent } from "../redux/slices/studentSlice";
import DataTable from "react-data-table-component";

const columns = (handleDelete) => [
  { name: "ID", selector: (row) => row.id, sortable: true },
  { name: "Name", selector: (row) => row.name, sortable: true },
  { name: "Class", selector: (row) => row.className, sortable: true },
  { name: "Email", selector: (row) => row.email },
  {
    name: "Actions",
    cell: (row) => (
      <button
        onClick={() => handleDelete(row.id)}
        className="px-3 py-1 bg-red-500 text-white rounded-md cursor-pointer"
      >
        Delete
      </button>
    ),
  },
];

const StudentTable = () => {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(students);
  const [newStudent, setNewStudent] = useState({
    name: "",
    className: "",
    email: "",
  });

  useEffect(() => {
    setFilteredData(students);
  }, [students]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    setFilteredData(
      students.filter(
        (student) =>
          student.name.toLowerCase().includes(query) ||
          student.className.toLowerCase().includes(query)
      )
    );
  };

  // Add Student
  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.className || !newStudent.email) return;

    const newEntry = { id: students.length + 1, ...newStudent };
    dispatch(addStudent(newEntry));
    setNewStudent({ name: "", className: "", email: "" });
  };

  // Delete Student
  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Student List</h2>

      <input
        type="text"
        placeholder="Search students by name or class..."
        value={search}
        onChange={handleSearch}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value })
          }
          className="border p-2 rounded w-1/3"
        />
        <input
          type="text"
          placeholder="Class"
          value={newStudent.className}
          onChange={(e) =>
            setNewStudent({ ...newStudent, className: e.target.value })
          }
          className="border p-2 rounded w-1/3"
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) =>
            setNewStudent({ ...newStudent, email: e.target.value })
          }
          className="border p-2 rounded w-1/3"
        />
        <button
          onClick={handleAddStudent}
          className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
        >
          Add
        </button>
      </div>

      <DataTable
        columns={columns(handleDelete)}
        data={filteredData}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default StudentTable;
