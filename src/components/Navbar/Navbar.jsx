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
    <>
      {/* Navbar with fixed positioning */}
      <nav className="fixed top-0 w-full z-50 py-5 px-3 sm:px-6 lg:px-8 backdrop-blur-md dark:bg-gray-900/80 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 text-2xl font-bold text-black dark:text-purple-500 rounded-lg ml-2 py-2 transition-all duration-300 hover:scale-110"
          >
            LetsDoDsa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-grow justify-center items-center space-x-4">
            <Link
              to="/"
              className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-300 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm"
            >
              <span className="flex items-center font-semibold gap-2">
                <IoMdHome className="text-lg" />
                Home
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500 dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>
            
            <Link
              to="/about"
              className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-300 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm"
            >
              <span className="flex items-center font-semibold gap-2">
                <CgDetailsMore className="text-lg" />
                About
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500 dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/beginner"
              className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-300 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm"
            >
              <span className="flex items-center font-semibold gap-2">
                <LiaWpbeginner className="text-lg" />
                Beginner
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500 dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/advance"
              className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-300 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm"
            >
              <span className="flex items-center font-semibold gap-2">
                <PiIntersectThreeBold className="text-lg" />
                Advance
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500 dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/all-in-one"
              className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-300 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm"
            >
              <span className="flex items-center font-semibold gap-2">
                <PiNumberSquareThreeBold className="text-lg" />
                All-in-one
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500 dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/visualizer"
              className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-300 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm"
            >
              <span className="flex items-center font-semibold gap-2">
                <Eye className="text-lg" />
                Visualizer
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500 dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/contact"
              className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-300 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm"
            >
              <span className="flex items-center font-semibold gap-2">
                <Contact className="text-lg" />
                Contact
              </span>
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500 dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <Link
              to="/auth/login"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black dark:text-white hover:bg-purple-100 dark:hover:bg-gray-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
        >
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Content */}
          <div className={`absolute left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
            <div className="flex flex-col h-full p-4">
              <div className="flex justify-between items-center mb-6">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="text-2xl font-bold text-black dark:text-purple-500"
                >
                  LetsDoDsa
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto">
                <div className="space-y-2">
                  <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700 font-medium"
                  >
                    <IoMdHome className="text-lg" />
                    Home
                  </Link>

                  <Link
                    to="/about"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700 font-medium"
                  >
                    <CgDetailsMore className="text-lg" />
                    About
                  </Link>

                  <Link
                    to="/beginner"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700 font-medium"
                  >
                    <LiaWpbeginner className="text-lg" />
                    Beginner
                  </Link>

                  <Link
                    to="/advance"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700 font-medium"
                  >
                    <PiIntersectThreeBold className="text-lg" />
                    Advance
                  </Link>

                  <Link
                    to="/all-in-one"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700 font-medium"
                  >
                    <PiNumberSquareThreeBold className="text-lg" />
                    All-in-one
                  </Link>

                  <Link
                    to="/visualizer"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700 font-medium"
                  >
                    <Eye className="text-lg" />
                    Visualizer
                  </Link>

                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700 font-medium"
                  >
                    <Contact className="text-lg" />
                    Contact
                  </Link>
                </div>
              </nav>

              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/auth/login"
                  onClick={closeMobileMenu}
                  className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-300"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navbar;