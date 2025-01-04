import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

export default store;
