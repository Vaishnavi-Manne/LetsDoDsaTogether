import './Panel.css'
import { useNavigate } from 'react-router-dom';
const Panel = ({ tier }) => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen  " id="container">
      <div className="heading">
        <h2 className="text-xl font-semibold "id='header'>
          ��{tier} Topics</h2>
        <div className="Topiccontainer">
          <div className="topic1">
            <div className="topic">
              <h2>1. Time and Space Complexity 🧠</h2>
              <p>Learn how to analyze the performance of your code. Big O notation is the vibe here.</p>
            </div>
            <div className="topic">
              <h2>2. Arrays 🔢</h2>
              <ul>
                <li>Reverse an array</li>
                <li>Find the max/min</li>
                <li>Kadane's Algorithm (for the brave)</li>
              </ul>
            </div>
            <div className="topic">
              <h2>3. Strings ✂️</h2>
              <ul>
                <li>Palindromes</li>
                <li>Substrings</li>
                <li>Anagrams</li>
                <li>String reversal</li>
              </ul>
            </div>
            <div className="topic">
              <h2>4. Hashing (HashMap/Set) ⚡</h2>
              <ul>
                <li>Frequency count</li>
                <li>Finding duplicates</li>
                <li>Two Sum problem</li>
              </ul>
            </div>
            <div className="topic">
              <h2>5. Recursion & Backtracking 🔁</h2>
              <ul>
                <li>Factorial</li>
                <li>Fibonacci</li>
                <li>Tower of Hanoi (bonus brain melt)</li>
              </ul>
            </div>
          </div>
          <div className="topic2">
            <div className="topic">
              <h2>6. Searching Algorithms 🔍</h2>
              <ul>
                <li>Linear Search</li>
                <li>Binary Search (sorted arrays)</li>
              </ul>
            </div>
            <div className="topic">
              <h2>7. Sorting Algorithms 📊</h2>
              <ul>
                <li>Bubble Sort</li>
                <li>Selection Sort</li>
                <li>Insertion Sort</li>
                <li><i>(Learn Merge/Quick Sort later)</i></li>
              </ul>
            </div>
            <div className="topic">
              <h2>8. Stacks and Queues 🥞</h2>
              <ul>
                <li>Valid parentheses</li>
                <li>Next Greater Element</li>
                <li>Queue reversal</li>
              </ul>
            </div>
            <div className="topic">
              <h2>9. Linked Lists 🔗</h2>
              <ul>
                <li>Traversing</li>
                <li>Insertion/deletion</li>
                <li>Reversing a linked list</li>
              </ul>
            </div>
            <div className="topic">
              <h2>10. Basic Math & Bit Manipulation 🔢</h2>
              <ul>
                <li>GCD/LCM</li>
                <li>Prime numbers</li>
                <li>Bitwise AND/OR/XOR basics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section3  ">
        <button className=" border px-4 py-2 ">Roadmap</button>
        <button className=" border px-4 py-2 "id='B2'>Discord Channels</button>
        <button className=" border px-4 py-2 "  >Online + Social Media Resources</button>
      </div>
      <button onClick={() => navigate('/')} className=" mt-6 text-sm text-blue-600 underline border-4 ">
        ← Back
      </button>
    </div>
  );
};

export default Panel;