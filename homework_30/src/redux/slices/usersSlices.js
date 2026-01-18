import { createSlice } from "@reduxjs/toolkit";
import API from "../../constants";

const initialState = {
  items: [],
};

const usersSlice = createSlice({
  name: "data",
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

export const getData = (value) => async (dispatch) => {
  try {
    const response = await fetch(`${API.URL_USERS}${value}`);
    const usersResponse = await response.json();
    const usersResponseString = JSON.stringify(usersResponse, null, 2);

    dispatch(fetchItem(usersResponseString));
  } catch (e) {
    console.log("Error", e);
  }
};

export default usersSlice.reducer;
