import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchItemRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchItemSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});

export const {
  fetchItemRequest,
  fetchItemSuccess,
  fetchItemFailure,
  clearItem,
} = usersSlice.actions;

export default usersSlice.reducer;
