import React from "react";
import "./Roadmap.css";

const Roadmap = () => {
  return (
    <div className="roadmap-container">
      <h1>🚀 DSA Roadmap</h1>
      <p>Start your journey from basics to advanced topics, one step at a time.</p>

      {/* Section: Arrays */}
      <div className="roadmap-section">
        <h2>1. Arrays</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/two-sum/">Two Sum</a></li>
          <li><a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/">Best Time to Buy and Sell Stock</a></li>
          <li><a href="https://leetcode.com/problems/maximum-subarray/">Maximum Subarray (Kadane's Algo)</a></li>
          <li><a href="https://leetcode.com/problems/move-zeroes/">Move Zeroes</a></li>
          <li><a href="https://leetcode.com/problems/merge-intervals/">Merge Intervals</a></li>
        </ul>
      </div>

      {/* Section: Strings */}
      <div className="roadmap-section">
        <h2>2. Strings</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/valid-palindrome/">Valid Palindrome</a></li>
          <li><a href="https://leetcode.com/problems/valid-anagram/">Valid Anagram</a></li>
          <li><a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/">Longest Substring Without Repeating Characters</a></li>
          <li><a href="https://leetcode.com/problems/group-anagrams/">Group Anagrams</a></li>
        </ul>
      </div>

      {/* Section: Hashing */}
      <div className="roadmap-section">
        <h2>3. Hashing</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/two-sum/">Two Sum (HashMap)</a></li>
          <li><a href="https://leetcode.com/problems/contains-duplicate/">Contains Duplicate</a></li>
          <li><a href="https://leetcode.com/problems/top-k-frequent-elements/">Top K Frequent Elements</a></li>
        </ul>
      </div>

      {/* Section: Sliding Window */}
      <div className="roadmap-section">
        <h2>4. Sliding Window</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/max-consecutive-ones-iii/">Max Consecutive Ones III</a></li>
          <li><a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/">Longest Substring Without Repeating Characters</a></li>
          <li><a href="https://leetcode.com/problems/permutation-in-string/">Permutation in String</a></li>
        </ul>
      </div>

      {/* Section: Two Pointers */}
      <div className="roadmap-section">
        <h2>5. Two Pointers</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/3sum/">3Sum</a></li>
          <li><a href="https://leetcode.com/problems/valid-palindrome/">Valid Palindrome</a></li>
          <li><a href="https://leetcode.com/problems/container-with-most-water/">Container With Most Water</a></li>
        </ul>
      </div>

      {/* Section: Stack & Queue */}
      <div className="roadmap-section">
        <h2>6. Stack & Queue</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/valid-parentheses/">Valid Parentheses</a></li>
          <li><a href="https://leetcode.com/problems/min-stack/">Min Stack</a></li>
          <li><a href="https://leetcode.com/problems/daily-temperatures/">Daily Temperatures</a></li>
        </ul>
      </div>

      {/* Section: Trees */}
      <div className="roadmap-section">
        <h2>7. Trees</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/invert-binary-tree/">Invert Binary Tree</a></li>
          <li><a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/">Maximum Depth of Binary Tree</a></li>
          <li><a href="https://leetcode.com/problems/diameter-of-binary-tree/">Diameter of Binary Tree</a></li>
        </ul>
      </div>

      {/* Section: Graphs */}
      <div className="roadmap-section">
        <h2>8. Graphs</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/number-of-islands/">Number of Islands</a></li>
          <li><a href="https://leetcode.com/problems/course-schedule/">Course Schedule (Topological Sort)</a></li>
          <li><a href="https://leetcode.com/problems/pacific-atlantic-water-flow/">Pacific Atlantic Water Flow</a></li>
        </ul>
      </div>

      {/* Section: DP */}
      <div className="roadmap-section">
        <h2>9. Dynamic Programming</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/climbing-stairs/">Climbing Stairs</a></li>
          <li><a href="https://leetcode.com/problems/house-robber/">House Robber</a></li>
          <li><a href="https://leetcode.com/problems/longest-increasing-subsequence/">Longest Increasing Subsequence</a></li>
          <li><a href="https://leetcode.com/problems/coin-change/">Coin Change</a></li>
        </ul>
      </div>

      <button className="back-btn" onClick={() => window.history.back()}>
        ← Back
      </button>
    </div>
  );
};

export default Roadmap;
