import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, text: 'Open Redux DevTools', completed: false },
    { id: 2, text: 'Inspect the action payload', completed: true },
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false,
      };

      if (!todo.text) {
        return;
      }

      state.items.push(todo);
    },
    toggleTodo: (state, action) => {
      const item = state.items.find((todo) => todo.id === action.payload);
      if (item) {
        item.completed = !item.completed;
      }
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, toggleTodo, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
