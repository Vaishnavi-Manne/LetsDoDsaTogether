import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Calendar } from 'lucide-react';
import './Home.css'; // Reuse Home.css for consistency

// Extract problems from roadmap structure
const roadmapProblems = [
    // Arrays
    { title: "Two Sum", url: "https://leetcode.com/problems/two-sum/", topic: "Arrays", difficulty: "Beginner" },
    { title: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", topic: "Arrays", difficulty: "Beginner" },
    { title: "Maximum Subarray (Kadane's Algo)", url: "https://leetcode.com/problems/maximum-subarray/", topic: "Arrays", difficulty: "Beginner" },
    { title: "Move Zeroes", url: "https://leetcode.com/problems/move-zeroes/", topic: "Arrays", difficulty: "Beginner" },
    { title: "Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/", topic: "Arrays", difficulty: "Intermediate" },

    // Strings
    { title: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", topic: "Strings", difficulty: "Beginner" },
    { title: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/", topic: "Strings", difficulty: "Beginner" },
    { title: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", topic: "Strings", difficulty: "Intermediate" },
    { title: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", topic: "Strings", difficulty: "Intermediate" },

    // Hashing
    { title: "Two Sum (HashMap)", url: "https://leetcode.com/problems/two-sum/", topic: "Hashing", difficulty: "Beginner" },
    { title: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/", topic: "Hashing", difficulty: "Beginner" },
    { title: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", topic: "Hashing", difficulty: "Intermediate" },

    // Sliding Window
    { title: "Max Consecutive Ones III", url: "https://leetcode.com/problems/max-consecutive-ones-iii/", topic: "Sliding Window", difficulty: "Intermediate" },
    { title: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", topic: "Sliding Window", difficulty: "Intermediate" },
    { title: "Permutation in String", url: "https://leetcode.com/problems/permutation-in-string/", topic: "Sliding Window", difficulty: "Intermediate" },

    // Two Pointers
    { title: "3Sum", url: "https://leetcode.com/problems/3sum/", topic: "Two Pointers", difficulty: "Intermediate" },
    { title: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", topic: "Two Pointers", difficulty: "Beginner" },
    { title: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", topic: "Two Pointers", difficulty: "Intermediate" },

    // Stack & Queue
    { title: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", topic: "Stack & Queue", difficulty: "Beginner" },
    { title: "Min Stack", url: "https://leetcode.com/problems/min-stack/", topic: "Stack & Queue", difficulty: "Intermediate" },
    { title: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", topic: "Stack & Queue", difficulty: "Intermediate" },

    // Trees
    { title: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/", topic: "Trees", difficulty: "Beginner" },
    { title: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", topic: "Trees", difficulty: "Beginner" },
    { title: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/", topic: "Trees", difficulty: "Intermediate" },

    // Graphs
    { title: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", topic: "Graphs", difficulty: "Intermediate" },
    { title: "Course Schedule (Topological Sort)", url: "https://leetcode.com/problems/course-schedule/", topic: "Graphs", difficulty: "Advanced" },
    { title: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", topic: "Graphs", difficulty: "Advanced" },

    // Dynamic Programming
    { title: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", topic: "Dynamic Programming", difficulty: "Beginner" },
    { title: "House Robber", url: "https://leetcode.com/problems/house-robber/", topic: "Dynamic Programming", difficulty: "Intermediate" },
    { title: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", topic: "Dynamic Programming", difficulty: "Advanced" },
    { title: "Coin Change", url: "https://leetcode.com/problems/coin-change/", topic: "Dynamic Programming", difficulty: "Advanced" }
  ];

const ProblemOfTheDay = () => {
  const [todayTopic, setTodayTopic] = useState(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const storedIndex = localStorage.getItem(`potd_index_${today}`);
    const storedDone = localStorage.getItem(`potd_done_${today}`) === 'true';

    if (storedIndex) {
      const problem = roadmapProblems[parseInt(storedIndex)];
      setTodayTopic(problem);
    } else {
      // Select random problem
      const randomIndex = Math.floor(Math.random() * roadmapProblems.length);
      const selectedProblem = roadmapProblems[randomIndex];
      setTodayTopic(selectedProblem);
      localStorage.setItem(`potd_index_${today}`, randomIndex.toString());
    }

    setIsDone(storedDone);
  }, []);

  const handleMarkAsDone = () => {
    const today = new Date().toDateString();
    setIsDone(true);
    localStorage.setItem(`potd_done_${today}`, 'true');
  };

  if (!todayTopic) return null;

  return (
    <div className="potd-card">
      <div className="potd-badge">
        <Star size={16} />
        <span>Problem of the Day</span>
      </div>

      <div className="potd-header">
        <Calendar size={24} />
        <h3>{todayTopic.topic}</h3>
        <span className={`difficulty ${todayTopic.difficulty.toLowerCase()}`}>
          {todayTopic.difficulty}
        </span>
      </div>

      <div className="problem-link">
        <h4>Today's Problem:</h4>
        <a href={todayTopic.url} target="_blank" rel="noopener noreferrer" className="problem-link-text">
          {todayTopic.title}
        </a>
      </div>

      <div className="potd-actions">
        <a
          href={todayTopic.url}
          target="_blank"
          rel="noopener noreferrer"
          className="solve-now-btn"
        >
          Solve on LeetCode
        </a>
        <button
          className={`mark-done-btn ${isDone ? 'done' : ''}`}
          onClick={handleMarkAsDone}
          disabled={isDone}
        >
          {isDone ? (
            <>
              <CheckCircle size={16} />
              Marked as Done
            </>
          ) : (
            'Mark as Done'
          )}
        </button>
      </div>
    </div>
  );
};

export default ProblemOfTheDay;
