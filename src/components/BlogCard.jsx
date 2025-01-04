import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBlog } from "../Redux/blogSlice";
import { toast } from "react-toastify";
import "../components/Form.css";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
    toast.success("Blog deleted successfully!");
  };

  const handleReadMore = () => {
    navigate(`/blog/blogdetails/${blog.id}`);
  };

  // Format the date if available
  const formattedDate = blog.publishedDate
    ? new Date(blog.publishedDate).toLocaleDateString()
    : "Not Published";

  return (
    <div className="border container p-4 card flex flex-col h-full">
      <div className="text flex-1">
        <h3 className="font-bold text-2xl text-center mb-4 underline">
          {blog.title}
        </h3>
        <p>{blog.description}</p>
        <p className="italic text-sm">Category: {blog.category}</p>
        <h2 className="mt-2 text-sm">{formattedDate}</h2>{" "}
        {/* Display the formatted date */}
      </div>
      <div className="flex gap-2 icons mt-auto w-full">
        <button
          onClick={handleReadMore}
          className="bg-gray-200 text-gray-900 rounded-bl-3xl hover:bg-gray-300 p-3 rounded-sm flex gap-2 transition duration-300 shadow-lg hover:scale-105 mt-5"
        >
          Read More
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white rounded-br-3xl  p-3 px-7 rounded-sm flex gap-2 transition duration-300 shadow-lg hover:scale-105 mt-5"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
