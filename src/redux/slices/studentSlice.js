import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    { id: 1, name: "John Doe", className: "10th", email: "john@example.com" },
    { id: 2, name: "Jane Smith", className: "12th", email: "jane@example.com" },
  ],
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export const { addStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
