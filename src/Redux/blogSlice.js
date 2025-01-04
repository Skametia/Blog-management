// blogSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: JSON.parse(localStorage.getItem("blogs")) || [], // Load blogs from localStorage if available
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },
    deleteBlog: (state, action) => {
      const updatedBlogs = state.blogs.filter(
        (blog) => blog.id !== action.payload
      );
      state.blogs = updatedBlogs;
      localStorage.setItem("blogs", JSON.stringify(state.blogs)); 
    },
  },
});

export const { setBlogs, addBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
