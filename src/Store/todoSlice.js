import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: [],
    filter: 'all' 
  },
  reducers: {
    addTask: (state, action) => {
        const { title, description } = action.payload;
      state.tasks.push({
        id: Date.now(),
        title: title,
        description: description,
        isDone: false
      });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) task.description = description;
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTask, toggleTask, editTask, changeFilter } = todoSlice.actions;
export default todoSlice.reducer;