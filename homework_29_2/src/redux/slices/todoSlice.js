import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todos = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
      });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addItem, removeItem } = todos.actions;
export default todos.reducer;
