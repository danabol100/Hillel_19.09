import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
};
export const getTodos = () => async (dispatch) => {
  dispatch(fetchStart());
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
    },
    addTodo: (state) => {
      state.isLoading = true;
    },
    deleteTodo: (state) => {
      state.isLoading = true;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    editTodo: (state) => {
      state.isLoading = true;
    },
    editItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.items[index].name = action.payload.name;
      }
      state.isLoading = false;
    },

    fetchItem: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    deleteItem: (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const {
  addTodo,
  addItem,
  editItem,
  deleteTodo,
  deleteItem,
  editTodo,
  fetchItem,
  fetchStart,
} = todos.actions;
export default todos.reducer;
