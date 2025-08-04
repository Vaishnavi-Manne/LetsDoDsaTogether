import React from "react";
import {useParams} from 'react-router-dom'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CalculateIcon from '@mui/icons-material/Calculate';
import PatternIcon from '@mui/icons-material/Pattern';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FunctionsIcon from '@mui/icons-material/Functions';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import GroupsIcon from '@mui/icons-material/Groups';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import WorkIcon from '@mui/icons-material/Work';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';

const Roadmap = () => {
  const {level, roadmap} = useParams()
  const timePeriod = [
      {
        heading: "Mathematics for Programming",
        topics:
          "Strengthen core math skills like GCD, LCM, primes, combinatorics, modular arithmetic, and probability.",
        icon: <CalculateIcon />,
        bgColor: "#6a1b9a",
        duration: "7 - 10 days",
      },
      {
        heading: "Problem Solving Patterns",
        topics:
          "Master patterns like sliding window, two pointers, prefix sum, binary search on answer, and more.",
        icon: <PatternIcon />,
        bgColor: "#0277bd",
        duration: "10 - 14 days",
      },
      {
        heading: "Graph Algorithms",
        topics:
          "Explore BFS, DFS, Dijkstra, Floyd-Warshall, Union-Find, and applications like shortest paths and cycles.",
        icon: <AccountTreeIcon />,
        bgColor: "#2e7d32",
        duration: "2 - 3 weeks",
      },
      {
        heading: "Competitive Programming Intro",
        topics:
          "Understand platforms like Codeforces, AtCoder, and LeetCode; practice under time constraints.",
        icon: <FlashOnIcon />,
        bgColor: "#c2185b",
        duration: "2 - 3 weeks",
      },
      {
        heading: "Dynamic Programming Mastery",
        topics:
          "Dive deep into classic DP problems, memoization, tabulation, and optimization techniques like bitmask DP.",
        icon: <FunctionsIcon />,
        bgColor: "#283593",
        duration: "2 - 3 weeks",
      },
      {
        heading: "System Design Basics",
        topics:
          "Get an overview of high-level design concepts like load balancing, caching, database sharding, and CAP theorem.",
        icon: <ArchitectureIcon />,
        bgColor: "#5d4037",
        duration: "2 - 4 weeks",
      },
      {
        heading: "Mock Interviews & Peer Review",
        topics:
          "Simulate interview environments with mock tests, peer sessions, and feedback to improve under pressure.",
        icon: <GroupsIcon />,
        bgColor: "#1565c0",
        duration: "Weekly",
      },
      {
        heading: "DSA in Real Projects",
        topics:
          "Understand how DSA concepts are used in production systems—like LRU cache, recommendation engines, etc.",
        icon: <IntegrationInstructionsIcon />,
        bgColor: "#512da8",
        duration: "On-going",
      },
      {
        heading: "Resume & Profile Building",
        topics:
          "Optimize your resume, GitHub, and LinkedIn to highlight projects, problem-solving, and DSA skills.",
        icon: <WorkIcon />,
        bgColor: "#00796b",
        duration: "4 - 6 days",
      },
      {
        heading: "Concurrency & Parallelism",
        topics:
          "Learn threading, multiprocessing, and concurrent algorithms useful for large-scale systems.",
        icon: <SyncAltIcon />,
        bgColor: "#455a64",
        duration: "2 - 3 weeks",
      },
      {
        heading: "Memory Management & Optimization",
        topics:
          "Understand heap/stack memory, references, garbage collection, and memory-efficient coding practices.",
        icon: <MemoryIcon />,
        bgColor: "#8e24aa",
        duration: "1 week",
      },
      {
        heading: "Database & Query Optimization",
        topics:
          "Basic SQL, indexes, joins, and how data structure logic translates to efficient querying.",
        icon: <StorageIcon />,
        bgColor: "#f9a825",
        duration: "1 - 2 weeks",
      }
    ];
    

  return (
    <div className="py-10">
      <h2 className="text-center text-4xl font-bold mb-15 text-gray-900">
        Comprehensive Coding Roadmap
      </h2>
      <VerticalTimeline
      className='my-10'
      >
        {timePeriod.map((topic, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentStyle={{ borderColor : topic.bgColor , borderRightWidth : "5px"}}
            contentArrowStyle={{ borderRightWidth : "7px", borderRightColor : topic.bgColor }}
            visible={true}
            date={topic.duration || ""}
            iconStyle={{ background: topic.bgColor, color: "#fff" }}
            icon={topic.icon}
          >
            <h3 className="vertical-timeline-element-title text-xl font-semibold">
              {topic.heading}
            </h3>
            <p className="text-gray-700">{topic.topics}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <div className="text-center mt-10">
        <a
          href='/'
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Roadmap;
