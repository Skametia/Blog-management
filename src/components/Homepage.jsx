import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const Homepage = () => {
  const blogs = useSelector((state) => state.blogs.blogs);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5 text-center">Blogs</h1>
      <ToastContainer />
      <div className="container mx-auto px-4">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-30">
          {blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p>No blogs found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
