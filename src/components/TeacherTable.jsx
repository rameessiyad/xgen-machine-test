import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTeacher, deleteTeacher } from "../redux/slices/teacherSlice";
import DataTable from "react-data-table-component";

const columns = (handleDelete) => [
  { name: "ID", selector: (row) => row.id, sortable: true },
  { name: "Name", selector: (row) => row.name, sortable: true },
  { name: "Subject", selector: (row) => row.subject, sortable: true },
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

const TeacherTable = () => {
  const teachers = useSelector((state) => state.teachers.teachers);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(teachers);
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    subject: "",
    email: "",
  });

  useEffect(() => {
    setFilteredData(teachers);
  }, [teachers]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    setFilteredData(
      teachers.filter(
        (teacher) =>
          teacher.name.toLowerCase().includes(query) ||
          teacher.subject.toLowerCase().includes(query)
      )
    );
  };

  // Add Teacher
  const handleAddTeacher = () => {
    if (!newTeacher.name || !newTeacher.subject || !newTeacher.email) return;

    const newEntry = { id: teachers.length + 1, ...newTeacher };
    dispatch(addTeacher(newEntry));
    setNewTeacher({ name: "", subject: "", email: "" });
  };

  // Delete Teacher
  const handleDelete = (id) => {
    dispatch(deleteTeacher(id));
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

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Name"
          value={newTeacher.name}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, name: e.target.value })
          }
          className="border p-2 rounded w-1/3"
        />
        <input
          type="text"
          placeholder="Subject"
          value={newTeacher.subject}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, subject: e.target.value })
          }
          className="border p-2 rounded w-1/3"
        />
        <input
          type="email"
          placeholder="Email"
          value={newTeacher.email}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, email: e.target.value })
          }
          className="border p-2 rounded w-1/3"
        />
        <button
          onClick={handleAddTeacher}
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

export default TeacherTable;
