import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teachers: [
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
  ],
};

const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      state.teachers.push(action.payload);
    },
    deleteTeacher: (state, action) => {
      state.teachers = state.teachers.filter(
        (teacher) => teacher.id !== action.payload
      );
    },
  },
});

export const { addTeacher, deleteTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
