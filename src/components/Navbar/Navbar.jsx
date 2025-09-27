import { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { PiNumberSquareThreeBold, PiIntersectThreeBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { LiaWpbeginner } from "react-icons/lia";
import { Contact, Eye } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: "ease-in-out",
    });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 py-5 px-4 sm:px-6 lg:px-8 backdrop-blur-md shadow-md transition-colors duration-300"
      data-aos="fade-down"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0 text-2xl font-bold text-black dark:text-purple-500 rounded-lg ml-2 py-2 transition-all duration-300 hover:scale-110 hover:text-2xl"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          LetsDoDsa
        </Link>

        {/* Navigation Links */}
        <div
          className="hidden lg:flex flex-grow justify-center items-center space-x-6"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <Link
            to="/"
            className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <span className="flex items-center font-extrabold gap-2">
              <IoMdHome /> Home
            </span>
          </Link>

          <Link
            to="/about"
            className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <span className="flex items-center font-extrabold gap-2">
              <CgDetailsMore /> About
            </span>
          </Link>

          <Link
            to="/Beginner"
            className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <span className="flex items-center font-extrabold gap-2">
              <LiaWpbeginner /> Beginner
            </span>
          </Link>

          <Link
            to="/Advance"
            className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <span className="flex items-center font-extrabold gap-2">
              <PiIntersectThreeBold /> Advance
            </span>
          </Link>

          <Link
            to="/All-in-one"
            className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <span className="flex items-center font-extrabold gap-2">
              <PiNumberSquareThreeBold /> All-in-one
            </span>
          </Link>

          <Link
            to="/visualizer"
            className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            <span className="flex items-center font-extrabold gap-2">
              <Eye /> Visualizer
            </span>
          </Link>

          <Link
            to="/contact"
            className="group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            data-aos="fade-down"
            data-aos-delay="800"
          >
            <span className="flex items-center font-extrabold gap-2">
              <Contact /> Contact
            </span>
          </Link>
        </div>

        {/* Login Button */}
        <div
          className="hidden lg:flex items-center space-x-4 flex-shrink-0"
          data-aos="fade-down"
          data-aos-delay="900"
        >
          <Link
            to="/auth/login"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden" data-aos="fade-down" data-aos-delay="1000">
          <button
            id="mobile-menu-button"
            onClick={toggleMobileMenu}
            className="p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
