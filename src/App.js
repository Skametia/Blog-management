import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./Redux/store.jsx";
import Homepage from "./components/Homepage";
import BlogDetails from "./components/BlogDetails";
import CreateBlogPage from "./components/CreateBlogPage";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar"; // Import the Navbar component

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />

          <div className="container mx-auto mt-5 my-12">
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/blog/blogdetails/:id" element={<BlogDetails />} />
              <Route path="/create-blog" element={<CreateBlogPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
