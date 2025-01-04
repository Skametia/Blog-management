import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../Redux/blogSlice"; // Adjust the path
import FormInput from "./FormInput";
import FormRadio from "./FormRadio";
import FormSelect from "./FormSelect";
import FormMultiSelect from "./FormMultiSelect";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../components/Form.css";

const CreateBlogPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("Draft");
  const [publishedDate, setPublishedDate] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (title.length < 5) {
      newErrors.title = "Title must be at least 5 characters long";
    }
    if (description.length < 10) {
      newErrors.description = "Description must be at least 10 characters long";
    }
    if (!category) {
      newErrors.category = "Please select a category";
    }
    if (status === "Published" && !publishedDate) {
      newErrors.publishedDate = "Please select a published date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const uploadCoverImage = async (file) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(URL.createObjectURL(file)), 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      let coverImageUrl = null;

      if (coverImage) {
        coverImageUrl = await uploadCoverImage(coverImage);
      }

      const newBlog = {
        id: Date.now(),
        title,
        description,
        category,
        tags,
        status,
        publishedDate: status === "Published" ? publishedDate : null,
        coverImage: coverImageUrl,
      };

      // Add the new blog to the existing blogs
      const updatedBlogs = [...blogs, newBlog];

      // Dispatch to Redux
      dispatch(addBlog(newBlog));

      // Save updated blogs to localStorage
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

      // Clear form after submission
      setTitle("");
      setDescription("");
      setCategory("");
      setTags([]);
      setStatus("Draft");
      setPublishedDate("");
      setCoverImage(null);

      // Success toast and navigation
      toast.success("Blog created successfully!");
      navigate("/");
    } else {
      toast.error("Please fix the errors and submit again");
    }
  };

  return (
    <div className="bg-[#212121] min-h-screen py-10">
      <div
        className="container form mx-auto  max-w-2xl 0 rounded-lg shadow-lg"
        style={{ backgroundColor: "#212121" }}
      >
        <form className="" onSubmit={handleSubmit}>
          <h2 className="text-4xl text-white mb-10 text-center font-bold title">
            Create a New Blog Post
          </h2>
          <div className="form_front">
            <div className="form-group">
              <label
                htmlFor="description"
                style={{ color: "wheat", fontSize: "1.2rem" }}
              >
                Title:
              </label>
              <input
                label="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                error={errors.title}
                placeholder="Enter blog title"
                className="mb-4 input"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="description"
                style={{ color: "wheat", fontSize: "1.2rem" }}
              >
                Description:
              </label>
              <input
                type="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                error={errors.description}
                placeholder="Enter blog description"
                className="mb-4 input"
              />
            </div>
            <div className="form-group">
              {/* <select
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              options={["Tech", "Lifestyle", "Health"]}
              error={errors.category}
              className="mb-4"
            /> */}
              <label
                htmlFor="description"
                style={{ color: "wheat", fontSize: "1.2rem" }}
              >
                Category:
              </label>
              <select
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                className="mb-4 input custom-select"
                value={category}
              >
                <option value="">Select Category</option>
                <option value="Tech">Tech</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Health">Health</option>
              </select>
            </div>
            <div className="form-group">
              {/* <label
              htmlFor="description"
              style={{ color: "wheat", fontSize: "1.2rem" }}
            >
              Tags:
            </label>
            <input
              label="Tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value.split(","))}
              error={errors.tags}
              placeholder="Enter blog tags (comma separated)"
              className="mb-4 input"
            />   */}

              <div className="form-group">
                <div className="form-group">
                  <label style={{ fontSize: "1.2rem", color: "wheat" }}>
                    Published Status:
                  </label>

                  <div className="radio-buttons-container">
                    <div className="radio-button">
                      <input
                        id="radio-draft"
                        className="radio-button__input"
                        type="radio"
                        name="status"
                        value="Draft"
                        checked={status === "Draft"}
                        onChange={(e) => setStatus(e.target.value)}
                      />
                      <label
                        htmlFor="radio-draft"
                        className="radio-button__label"
                      >
                        <span class="radio-button__custom"></span>
                        Draft
                      </label>
                    </div>

                    <div
                      className="radio-button"
                      style={{ marginLeft: "1rem" }}
                    >
                      <input
                        id="radio-published"
                        className="radio-button__input"
                        type="radio"
                        name="status"
                        value="Published"
                        checked={status === "Published"}
                        onChange={(e) => setStatus(e.target.value)}
                      />
                      <label
                        htmlFor="radio-published"
                        className="radio-button__label"
                      >
                        <span class="radio-button__custom"></span>
                        Published
                      </label>
                    </div>
                  </div>

                  {errors.status && (
                    <p className="error-text">{errors.status}</p>
                  )}
                </div>
              </div>
            </div>{" "}
            {errors.status && <p className="error-text">{errors.status}</p>}
            {status === "Published" && (
              <div className="form-group">
                <label
                  htmlFor="description"
                  style={{ color: "wheat", fontSize: "1.2rem" }}
                >
                  Date:
                </label>
                <input
                  label="Published Date"
                  type="date"
                  value={publishedDate}
                  onChange={(e) => setPublishedDate(e.target.value)}
                  error={errors.publishedDate}
                  className="mb-4 input"
                />
              </div>
            )}
            <div className="form-group mb-4">
              <label
                className="block  font-bold mb-2"
                style={{ fontSize: "1.2rem", color: "wheat" }}
              >
                Cover Image
              </label>
              <input
                type="file"
                onChange={(e) => setCoverImage(e.target.files[0])}
                accept="image/*"
                className="w-full p-2 border border-gray-500 rounded input"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 btn text-white py-2 px-4 rounded-lg w-full hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CreateBlogPage;
