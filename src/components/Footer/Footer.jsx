import "../Home.css";
import { Link } from 'react-router-dom';
import { CgDetailsMore } from "react-icons/cg";
const Footer = () => {
  return (
    <div>
        <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="brand-title">Let&apos;s Do DSA</h3>
              <p className="brand-tagline">Master algorithms, ace interviews</p>
            </div>

            <div className="footer-navigation">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/">
                    <i className="fas fa-home" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/Beginner">
                    <i className="fas fa-play-circle" /> Beginner
                  </Link>
                </li>
                <li>
                  <Link to="/Advanced">
                    <i className="fas fa-rocket" /> Advanced
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <i className="fas fa-envelope" /> Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-social">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" aria-label="GitHub">
                  <i className="fab fa-github" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" aria-label="Discord">
                  <i className="fab fa-discord" />
                </a>
              </div>
            </div>
          </div>

              {/* Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold border-b border-gray-600 pb-2 text-center">
                  Quick Links
                </h4>
                <nav className="flex flex-col space-y-3 items-left">
                  {[
                    { name: "Home", path: "/" , icon : <i className="fas fa-home" />},
                    { name: "About", path: "/about" , icon : <CgDetailsMore className="inline"/>},
                    { name: "Beginner", path: "/Beginner", icon : <i className="fas fa-play-circle" /> },
                    { name: "Advanced", path: "/Advance", icon : <i className="fas fa-rocket" /> },
                    { name: "Contact", path: "/contact", icon : <i className="fas fa-envelope" /> },
                  ].map((link) => (
                    <a
                      key={link.name}
                      href={link.path}
                      className="hover:text-blue-300 transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="w-4 flex justify-center">
                        <span className="w-2 h-2 bg-blue-700 rounded-full group-hover:scale-150 transition-transform"></span>
                      </span>
                      <span className="ml-3">{link.icon} {link.name}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold border-b border-gray-600 pb-2 text-center">
                  Contact Info
                </h4>
                <div className="space-y-4 flex flex-col justify-center items-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm hover:underline block">
                        123 Street Name
                        <br />
                        West Bengal
                        <br />
                        India
                        <br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">+91 12345 67890</p>
                      <p className="text-sm">Mon-Fri 9AM-6PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm py-2">letsdodsa@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                  <p className="text-sm">
                    © 2025 Let's Do DSA. All rights reserved.
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <a href="#" className="hover:text-pink-300 transition-colors">
                      Privacy Policy
                    </a>
                    <a href="#" className="hover:text-pink-300 transition-colors">
                      Terms of Service
                    </a>
                    <a href="#" className="hover:text-pink-300 transition-colors">
                      Feedback
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2  text-sm mt-4">
                <span>Made with</span>
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <p>
                  for <span className="text-cyan-400"> aspiring developers</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer