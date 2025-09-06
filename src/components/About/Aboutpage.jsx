import { useState } from "react";
import {
  Code2,
  Palette,
  FileCode,
  LayoutDashboard,
  ServerCog,
  Database,
  Cloud,
  ServerCrash,
} from "lucide-react";
import { allContributors } from "../../constants/lib.js";

const Aboutpage = () => {

    const [showAll, setShowAll] = useState(false);
    const visibleContributors = showAll ? allContributors : allContributors.slice(0, 6);  

  return (
    <div id="about" className="about bg-gradient-to-b from-[#e0f2fe] via-[#cfe0fc] to-[#dbeafe] font-sans pt-10">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mt-5 mb-10 md:mb-16">
          <h1 className="about-title text-4xl md:text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-4">
            Lets's Do DSA Together
          </h1>
          <p className="about-title-des about text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the vision, technology, and people behind this innovative
            endeavor.
          </p>
        </header>
        <section className="about bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 mb-8 md:mb-12">
          <h2 className="about text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <svg
              className="w-8 h-8 mr-3 text-indigo-600 dark:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v14m-7 0h14a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            Project Purpose
          </h2>
          <p className="about-des text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            This project aims to provide a robust and intuitive platform for
            learning new skills and strengthening dsa fundamentals. We believe in creating tools that are not
            only powerful but also user-friendly and impactful.
            LetsDoDSATogether is a clean, community-driven platform built to
            make mastering Data Structures and Algorithms (DSA) more engaging
            and less isolating. Whether you're a beginner or sharpening your
            skills,you’ll find handpicked learning resources, a curated roadmap,
            and real-time collaboration through our active Discord community.
            Explore problems, share insights, and grow with others on the same
            journey — because learning is better when we do it together.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section className="about bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 mb-8 md:mb-12">
          <h2 className="about text-4xl font-extrabold text-gray-800 dark:text-white mb-6 flex items-center gap-3 animate-fade-in">
            <svg
              className="w-9 h-9 text-green-600 dark:text-green-400 animate-bounce-slow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
            Tech Stack
          </h2>
          <div className="about grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
            <div >
              <h3 className="about text-3xl font-extrabold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                <Code2 className="w-7 h-7 text-blue-600 dark:text-blue-400 animate-pulse" />
                Frontend
              </h3>
              <ul className="about space-y-5">
                <li className="flex items-start gap-4 hover:scale-[1.03] transition-transform duration-300 ease-in-out group">
                  <LayoutDashboard className="w-6 h-6 mt-1 text-purple-600 dark:text-purple-400 group-hover:rotate-6 transition-transform duration-300" />
                  <p className="about text-gray-700 dark:text-gray-200">
                    <span className="about font-semibold text-gray-900 dark:text-gray-100">React.js:</span> A JavaScript library for building user interfaces.
                  </p>
                </li>
                <li className="about flex items-start gap-4 hover:scale-[1.03] transition-transform duration-300 ease-in-out group">
                  <Palette className="w-6 h-6 mt-1 text-cyan-600 dark:text-cyan-400 group-hover:rotate-6 transition-transform duration-300" />
                  <p className="about text-gray-700 dark:text-gray-200">
                    <span className="about font-semibold text-gray-900 dark:text-gray-100">Tailwind CSS:</span> A utility-first CSS framework for rapidly building custom designs.
                  </p>
                </li>
                <li className="about flex items-start gap-4 hover:scale-[1.03] transition-transform duration-300 ease-in-out group">
                  <FileCode className="w-6 h-6 mt-1 text-yellow-600 dark:text-yellow-400 group-hover:rotate-6 transition-transform duration-300" />
                  <p className="about text-gray-700 dark:text-gray-200">
                    <span className="about font-semibold text-gray-900 dark:text-gray-100">JavaScript (ES6+):</span> The programming language for web development.
                  </p>
                </li>
                <li className="about flex items-start gap-4 hover:scale-[1.03] transition-transform duration-300 ease-in-out group">
                  <FileCode className="w-6 h-6 mt-1 text-pink-600 dark:text-pink-400 group-hover:rotate-6 transition-transform duration-300" />
                  <p className="about text-gray-700 dark:text-gray-200">
                    <span className="about font-semibold text-gray-900 dark:text-gray-100">HTML5 & CSS3:</span> Standard web technologies for structuring and styling content.
                  </p>
                </li>
              </ul>
            </div>
            <div >
              <h3 className="about text-3xl font-extrabold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                <ServerCog className="w-7 h-7 text-red-600 dark:text-red-400 animate-pulse" />
                Backend & Database
              </h3>
              <ul className="space-y-5">
                <li className="about flex items-start gap-4 hover:scale-[1.03] transition-transform duration-300 ease-in-out group">
                  <ServerCrash className="w-6 h-6 mt-1 text-indigo-600 dark:text-indigo-400 group-hover:rotate-6 transition-transform duration-300" />
                  <p className="about text-gray-700 dark:text-gray-200">
                    <span className="about font-semibold text-gray-900 dark:text-gray-100">Node.js & Express:</span> For server-side logic and API development.
                  </p>
                </li>
                <li className="about flex items-start gap-4 hover:scale-[1.03] transition-transform duration-300 ease-in-out group">
                  <Database className="w-6 h-6 mt-1 text-green-600 dark:text-green-400 group-hover:rotate-6 transition-transform duration-300" />
                  <p className="about text-gray-700 dark:text-gray-200">
                    <span className="about font-semibold text-gray-900 dark:text-gray-100">MongoDB:</span> For data storage and retrieval.
                  </p>
                </li>
                <li className="flex about items-start gap-4 hover:scale-[1.03] transition-transform duration-300 ease-in-out group">
                  <Cloud className="w-6 h-6 mt-1 text-blue-600 dark:text-blue-400 group-hover:rotate-6 transition-transform duration-300" />
                  <p className="about text-gray-700about  dark:text-gray-200">
                    <span className="about font-semibold text-gray-900 dark:text-gray-100">REST APIs:</span> For efficient and structured data communication.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contributors Section */}
        <section className="about bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-2 md:p-4 mb-4 md:mb-8">
          <div className="about max-w-6xl mx-auto text-center px-2 py-5">
            <h2 className="about text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Our Contributors
            </h2>
            <div className="about grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {visibleContributors.map((contributor, index) => (
                <div
                  key={index}
                  className="about p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="about w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                  />
                  <h4 className="about text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {contributor.name}
                  </h4>
                  <div className="about flex justify-center mt-2 gap-2 text-sm">
                    <a
                      href={contributor.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    >
                      GitHub
                    </a>
                    <a
                      href={contributor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about text-blue-600 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {allContributors.length > 6 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="toggle mt-6 text-sm font-medium text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
              >
                {showAll ? "Show Less" : "View All Contributors"}
              </button>
            )}
          </div>
        </section>

        {/* Useful Links Section */}
        <section className="about bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8">
          <h2 className="about text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <svg
              className="w-8 h-8 mr-3 text-yellow-600 dark:text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-.758l-.293.293m3.535-3.536l1.102-1.101m-4.343-2.121l1.102-1.101m6.565-1.913l-1.102-1.101m-2.121 2.121l-.293.293m-3.536 3.535L12 21.414V17.5l-2.757-2.757m5.514 0L12 12.5l-2.757 2.757m5.514 0L12 17.5l-2.757-2.757"
              ></path>
            </svg>
            Useful Links
          </h2>
          <ul className="about list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-base md:text-lg">
            <li>
              <a
                href="https://github.com/Vaishnavi-Manne/LetsDoDsaTogether"
                target="_blank"
                rel="noopener noreferrer"
                className="links text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span className="about font-medium">GitHub Repository:</span> Access
                the source code and contribute.
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Vaishnavi-Manne/LetsDoDsaTogether/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="links text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span className="about font-medium">Documentation:</span> Learn how to
                use and extend the project.
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="links text-blue-600 dark:text-blue-4:hover:underline"
              >
                <span className="about font-medium">Project Blog:</span> Stay updated
                with our latest news and features.
              </a>
            </li>
            <li>
              <a
                href="#"
                className="links text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span className="about font-medium">Contact Us:</span> Reach out for
                support or inquiries.
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Aboutpage;
