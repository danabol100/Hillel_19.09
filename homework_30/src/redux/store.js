import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlices";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
