import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { CgWebsite } from "react-icons/cg";
import { PiHandshakeDuotone } from "react-icons/pi";
import { LiaWpbeginner } from "react-icons/lia";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white dark:bg-gray-950 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          LetsDoDsaTogether
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <NavLink to="/about" label="About" icon={<FcAbout />} />
          <NavLink to="/Beginner" label="All-In-One" icon={<LiaWpbeginner />} />
          <NavLink to="/contact" label="Contact" icon={<PiHandshakeDuotone />} />
          <NavLink to="/profile" label="Profile" isIconOnly imgSrc="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
          <Link
            to="/auth/login"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </Link>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-purple-600"
          onClick={toggleMenu}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-4">
          <NavLink to="/about" label="About" icon={<FcAbout />} isMobile />
          <NavLink to="/Beginner" label="All-In-One" icon={<LiaWpbeginner />} isMobile />
          <NavLink to="/contact" label="Contact" icon={<PiHandshakeDuotone />} isMobile />
          <NavLink to="/profile" label="Profile" isIconOnly imgSrc="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
          <Link
            to="/auth/login"
            className="block w-full text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </Link>
        </ul>
      )}
    </header>
  );
};

// Reusable nav item
const NavLink = ({ to, label, icon, isIconOnly, imgSrc, isMobile = false }) => {
  const baseClasses =
    "group relative inline-block text-black dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-400 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-sm transform hover:scale-105";

  if (isIconOnly) {
    return (
      <Link to={to}>
        <img
          src={imgSrc}
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </Link>
    );
  }

  return (
    <li>
      <Link to={to} className={baseClasses}>
        <span className="flex items-center gap-2 font-bold">{icon} {label}</span>
        {!isMobile && (
          <span
            className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500 dark:from-purple-300 dark:via-blue-400 dark:to-indigo-400 rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"
            aria-hidden="true"
          />
        )}
      </Link>
    </li>
  );
};

export default Navbar;

