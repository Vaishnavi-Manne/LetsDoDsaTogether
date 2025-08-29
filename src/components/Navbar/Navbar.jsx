import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { PiNumberSquareThreeBold, PiIntersectThreeBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { LiaWpbeginner } from "react-icons/lia";
import { Contact, Eye } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav
        className="fixed top-0 w-full z-50 py-5 px-4 sm:px-6 lg:px-8 backdrop-blur-md shadow-md transition-colors duration-300"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="flex-shrink-0 text-2xl font-bold text-black-500 dark:text-purple-500
                                          rounded-lg  ml-2 py-2 transition-all duration-300
                                          hover:scale-110 hover:text-2xl"
          >
            LetsDoDsa
          </Link>

          {/* Middle Section: Main Navigation Links + Central Icon (Hidden on small screens) */}
          <div className="hidden lg:flex flex-grow justify-center items-center space-x-6">
            {/* Navigation Links */}
            <Link
              to="/"
              className="group relative inline-block text-black-500 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300  hover:shadow-sm transform hover:scale-105"
            >
              <span className="flex items-center font-extrabold gap-2">
                <IoMdHome />
                Home
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500
                            dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full
                            transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/about"
             
              className="group relative inline-block text-black-500 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm transform hover:scale-105"
            >
              <span className="flex items-center font-extrabold gap-2">
                <CgDetailsMore />
                About
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500
                            dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full
                            transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/Beginner"
              
              className="group relative inline-block text-black-500 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm transform hover:scale-105"
            >
              <span className="flex items-center font-extrabold gap-2">
                <LiaWpbeginner />
                Beginner
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500
                            dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full
                            transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/Advance"
              
              className="group relative inline-block text-black-500 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm transform hover:scale-105"
            >
              <span className="flex items-center font-extrabold gap-2">
                <PiIntersectThreeBold />
                Advance
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500
                            dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full
                            transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/All-in-on"
             
              className="group relative inline-block text-black-500 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm transform hover:scale-105"
            >
              <span className="flex items-center font-extrabold gap-2">
                <PiNumberSquareThreeBold />
                All-in-one
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500
                        dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full
                        transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/visualizer"
              
              className="group relative inline-block text-black-500 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm transform hover:scale-105"
            >
              <span className="flex items-center font-extrabold gap-2">
                <Eye />
                Visualizer
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500
                            dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full
                            transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/contact"
              
              className="group relative inline-block text-black-500 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm transform hover:scale-105"
            >
              <span className="flex items-center font-extrabold gap-2">
                <Contact />
                Contact
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500
                            dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full
                            transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <Link
              to="/auth/login"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full
                            shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-button"
              onClick={toggleMobileMenu}
              className="p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2
                            focus:ring-offset-2 focus:ring-purple-300
                            text-black hover:bg-purple-700 dark:hover:bg-indigo-600"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (Slides in from the left) */}
        <div
          id="mobile-menu"
          className={`fixed left-0 right-auto top-14  w-40 h-fit bg-purple-700 dark:bg-gray-800 shadow-lg z-50 transform
                        ${
                          isMobileMenuOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                        }
                        transition-transform duration-300 ease-in-out rounded-2xl lg:hidden`}
          style={{ minHeight: "auto", maxHeight: "80vh" }}
        >
          <div className="p-4 relative">
            {/* Close button for mobile menu */}
            <button
              onClick={closeMobileMenu}
              className="absolute top-2 right-2 text-white hover:text-purple-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="mt-6 space-y-2">
              {" "}
              {/* Spacing for links */}
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-white hover:bg-purple-600 dark:hover:bg-gray-700 hover:text-purple-100 dark:hover:text-gray-100 rounded-md transition-colors duration-200 text-lg font-medium"
              >
                <span className="flex items-center font-extrabold gap-2">
                  <IoMdHome />
                  Home
                </span>
              </Link>
              <Link
                to="/about"
                
                className="block px-3 py-2 text-white hover:bg-purple-600 dark:hover:bg-gray-700 hover:text-purple-100 dark:hover:text-gray-100 rounded-md transition-colors duration-200 text-lg font-medium"
              >
                <span className="flex items-center font-extrabold gap-2">
                  <CgDetailsMore />
                  About
                </span>
              </Link>
              <Link
                to="/Beginner"
               
                className="block px-3 py-2 text-white hover:bg-purple-600 dark:hover:bg-gray-700 hover:text-purple-100 dark:hover:text-gray-100 rounded-md transition-colors duration-200 text-lg font-medium"
              >
                <span className="flex items-center font-extrabold gap-2">
                  <LiaWpbeginner />
                  Beginner
                </span>
              </Link>
              <Link
                to="/Advance"
               
                className="block px-3 py-2 text-white hover:bg-purple-600 dark:hover:bg-gray-700 hover:text-purple-100 dark:hover:text-gray-100 rounded-md transition-colors duration-200 text-lg font-medium"
              >
                <span className="flex items-center font-extrabold gap-2">
                  <PiNumberSquareThreeBold />
                  Advance
                </span>
              </Link>
              <Link
                to="/All-in-one"
                className="block px-3 py-2 text-white hover:bg-purple-600 dark:hover:bg-gray-700 hover:text-purple-100 dark:hover:text-gray-100 rounded-md transition-colors duration-200 text-lg font-medium"
              >
                <span className="flex items-center font-extrabold gap-2">
                  <PiIntersectThreeBold />
                  All-in-one
                </span>
              </Link>
              <Link
                to="/visualizer"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-white hover:bg-purple-600 dark:hover:bg-gray-700 hover:text-purple-100 dark:hover:text-gray-100 rounded-md transition-colors duration-200 text-lg font-medium"
              >
                <span className="flex items-center font-extrabold gap-2">
                  <Eye />
                  Visualizer
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;