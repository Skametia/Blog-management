import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between md:justify-center">
        {/* Logo Section */}
        <div className="flex items-center justify-center w-full md:w-auto">
          <img src="/logo1.png" alt="Logo" className="w-24 ml-9" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 justify-center w-full">
          <Link
            to="/"
            className="text-gray-900 bg-gray-200 hover:bg-gray-300 p-3 rounded-lg flex gap-2 transition duration-300 shadow-lg hover:scale-105"
          >
            <AiFillHome className="w-6 h-6" /> Home
          </Link>
          <Link
            to="/create-blog"
            className="text-gray-900 bg-gray-200 hover:bg-gray-300 p-3 rounded-lg flex gap-2 transition duration-300 shadow-lg hover:scale-105"
          >
            <FaPlus className="w-6 h-6" /> Create Blog
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 shadow-md">
          <div className="space-y-4">
            <Link
              to="/"
              className="block text-lg text-gray-900 bg-gray-200 hover:bg-gray-300 p-3 rounded-lg shadow-lg hover:scale-105"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/create-blog"
              className="block text-lg text-gray-900 bg-gray-200 hover:bg-gray-300 p-3 rounded-lg shadow-lg hover:scale-105"
              onClick={toggleMenu}
            >
              Create Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
