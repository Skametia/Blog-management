import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate(); // Used for navigating to other pages

  // Access blogs from Redux store
  const blog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.id === parseInt(id))
  );

  // If no blog is found with the given ID, show an error
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="p-5 container">
      <h2 className="text-3xl text-center mb-12 font-bold">{blog.title}</h2>
      <p className="mt-4 text-lg whitespace-normal break-words">
        {blog.description}
      </p>
      <p className="italic text-sm mt-3">Category: {blog.category}</p>
      <p className="italic text-sm mt-3">Date: {blog.date}</p>

      {/* Button to go back to homepage */}
      <button
        className="bg-gray-200 text-gray-900 hover:bg-gray-300 p-3 rounded-lg flex gap-2 transition duration-300 shadow-lg hover:scale-105 mt-5"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default BlogDetails;
