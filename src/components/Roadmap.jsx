import { useParams } from "react-router-dom";
import "./Roadmap.css";
import { useState } from "react";

const roadmapData = [
  {
    title: "Time and Space Complexity 🧠",
    description: "Analyze code performance. Big O is key!",
    links: [
      {
        label: "Time Complexity",
        url: "https://leetcode.com/problems/time-needed-to-inform-all-employees/",
      },
      {
        label: "Space Complexity",
        url: "https://leetcode.com/problems/number-of-islands/",
      },
    ],
  },
  {
    title: "Arrays 🔢",
    description: "Start simple, then optimize.",
    links: [
      {
        label: "Reverse Array",
        url: "https://leetcode.com/problems/reverse-string/",
      },
      {
        label: "Max Subarray (Kadane)",
        url: "https://leetcode.com/problems/maximum-subarray/",
      },
    ],
  },
  {
    title: "Strings ✂️",
    description: "String logic boosts pattern recognition.",
    links: [
      {
        label: "Palindrome",
        url: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        label: "Anagram Check",
        url: "https://leetcode.com/problems/valid-anagram/",
      },
    ],
  },
  {
    title: "Hashing ⚡",
    description: "HashMap/Set for fast lookups!",
    links: [
      { label: "Two Sum", url: "https://leetcode.com/problems/two-sum/" },
      {
        label: "Duplicate Check",
        url: "https://leetcode.com/problems/contains-duplicate/",
      },
    ],
  },
  {
    title: "Recursion & Backtracking 🔁",
    description: "Divide and conquer your fears.",
    links: [
      {
        label: "Fibonacci",
        url: "https://leetcode.com/problems/fibonacci-number/",
      },
      {
        label: "Backtracking Path",
        url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
    ],
  },
];

const Roadmap = () => {
  const { level } = useParams();
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="roadmap-container">
      <h1 className="roadmap-title">📍 {level} Roadmap</h1>
      <div className="roadmap-list">
        {roadmapData.map((item, idx) => (
          <div
            className={`roadmap-card ${expanded === idx ? "expanded" : ""}`}
            key={idx}
            onClick={() => toggleCard(idx)}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>

            {expanded === idx && (
              <div className="leetcode-links">
                <h4 className="mt-2 text-sm font-medium">Practice:</h4>
                <ul className="link-list">
                  {item.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leetcode-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        🔗 {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <footer className="footer mt-8">
        <button className="back-button" onClick={() => window.history.back()}>
          ← Back
        </button>
        <p className="footer-text">Made with ❤️ for aspiring devs</p>
      </footer>
    </div>
  );
};

export default Roadmap;
