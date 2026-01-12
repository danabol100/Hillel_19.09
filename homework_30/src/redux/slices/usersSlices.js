import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchItem: (state, action) => {
      state.items = action.payload;
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});
export const { fetchItem, clearItem } = usersSlice.actions;
export default usersSlice.reducer;
