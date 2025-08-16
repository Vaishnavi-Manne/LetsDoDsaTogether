import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';
import { IoMdHome } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { LiaWpbeginner } from "react-icons/lia";
import { PiIntersectThreeBold } from "react-icons/pi";
import { MdContactMail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer style={{ background: 'linear-gradient(90deg, #4b0082, #8a2be2)' }} className="text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Let's Do DSA.</h3>
            <p className="text-gray-300">
              Master algorithms, ace interviews. Join our community to enhance your coding skills and prepare for technical interviews with confidence.
            </p>
            <p className="text-gray-300">
              Join us in mastering data structures and algorithms, and take your coding skills to the next level!
            </p>
            <h4 className="text-lg font-semibold pt-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><FaGithub size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaLinkedin size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaDiscord size={24} /></a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="flex items-center text-gray-300 hover:text-white"><span className="bg-blue-500 p-1 rounded-full mr-2 inline-block"><IoMdHome /></span> Home</Link></li>
              <li><Link to="/about" className="flex items-center text-gray-300 hover:text-white"><span className="bg-blue-500 p-1 rounded-full mr-2 inline-block"><CgDetailsMore /></span> About</Link></li>
              <li><Link to="/Beginner" className="flex items-center text-gray-300 hover:text-white"><span className="bg-blue-500 p-1 rounded-full mr-2 inline-block"><LiaWpbeginner /></span> Beginner</Link></li>
              <li><Link to="/Advance" className="flex items-center text-gray-300 hover:text-white"><span className="bg-blue-500 p-1 rounded-full mr-2 inline-block"><PiIntersectThreeBold /></span> Advanced</Link></li>
              <li><Link to="/contact" className="flex items-center text-gray-300 hover:text-white"><span className="bg-blue-500 p-1 rounded-full mr-2 inline-block"><MdContactMail /></span> Contact</Link></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start"><span className="bg-blue-500 p-2 rounded-full mr-3 inline-block"><FaLocationDot /></span> 123 Street Name<br/>West Bengal<br/>India</div>
              <div className="flex items-center"><span className="bg-blue-500 p-2 rounded-full mr-3 inline-block"><FaPhone /></span> <div>+91 12345 67890<br/>Mon-Fri 9AM-6PM</div></div>
              <div className="flex items-center"><span className="bg-blue-500 p-2 rounded-full mr-3 inline-block"><IoIosMail /></span> letsdodsa@gmail.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 Let's Do DSA. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/feedback" className="hover:text-white">Feedback</Link>
          </div>
          <p>Made with <span className="text-red-500">❤</span> for <a href="#" className="text-cyan-400 hover:text-cyan-300">aspiring developers</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
