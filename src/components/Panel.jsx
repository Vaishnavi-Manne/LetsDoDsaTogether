import './Panel.css';

const Panel = ({ tier, setView }) => {
  return (
    <div className="w-screen h-full pt-24 bg-white" id="container">
      {/* ✅ Home Button with animation */}
      <div className="fixed top-4 right-6 z-50">
        <button
          onClick={() => setView('home')}
          className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500 
                    hover:from-purple-500 hover:to-pink-500 transition-all duration-300 
                    shadow-md hover:shadow-xl transform hover:scale-105 font-semibold"
        >
          Home
        </button>
      </div>

      {/* Heading */}
      <div className="heading mt-4">
        <h2 className="text-xl font-semibold" id="header">
          {tier === 'beginner' ? '🌱 Beginner Topics' : '🚀 Advanced Topics'}
        </h2>

        {/* Topics */}
        <div className="Topiccontainer">
          {tier === 'beginner' ? (
            <>
              {/* Beginner Topics */}
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
                    <li>Tower of Hanoi</li>
                  </ul>
                </div>
              </div>

              <div className="topic2">
                <div className="topic">
                  <h2>6. Searching Algorithms 🔍</h2>
                  <ul>
                    <li>Linear Search</li>
                    <li>Binary Search</li>
                  </ul>
                </div>
                <div className="topic">
                  <h2>7. Sorting Algorithms 📊</h2>
                  <ul>
                    <li>Bubble Sort</li>
                    <li>Selection Sort</li>
                    <li>Insertion Sort</li>
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
                    <li>Traversal</li>
                    <li>Insertion/deletion</li>
                    <li>Reverse a linked list</li>
                  </ul>
                </div>
                <div className="topic">
                  <h2>10. Math & Bits 🔢</h2>
                  <ul>
                    <li>GCD/LCM</li>
                    <li>Prime numbers</li>
                    <li>Bitwise basics</li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Advanced Topics */}
              <div className="topic1">
                <div className="topic">
                  <h2>1. Merge Sort & Quick Sort ⚙️</h2>
                  <p>Understand divide-and-conquer for efficient sorting.</p>
                </div>
                <div className="topic">
                  <h2>2. Binary Search on Answer 📈</h2>
                  <p>Solve problems by applying binary search in creative ways.</p>
                </div>
                <div className="topic">
                  <h2>3. Sliding Window ⏳</h2>
                  <ul>
                    <li>Maximum subarray of size k</li>
                    <li>Longest substring without repeat</li>
                  </ul>
                </div>
                <div className="topic">
                  <h2>4. Two Pointers 👯‍♀️</h2>
                  <ul>
                    <li>Pair Sum</li>
                    <li>Remove Duplicates</li>
                  </ul>
                </div>
                <div className="topic">
                  <h2>5. Graphs 🌐</h2>
                  <ul>
                    <li>BFS & DFS</li>
                    <li>Cycle Detection</li>
                    <li>Topological Sort</li>
                  </ul>
                </div>
              </div>

              <div className="topic2">
                <div className="topic">
                  <h2>6. Dynamic Programming 💡</h2>
                  <ul>
                    <li>Fibonacci (DP)</li>
                    <li>0/1 Knapsack</li>
                    <li>Longest Common Subsequence</li>
                  </ul>
                </div>
                <div className="topic">
                  <h2>7. Tries & Prefix Trees 🌳</h2>
                  <p>Efficient string queries and autocomplete.</p>
                </div>
                <div className="topic">
                  <h2>8. Segment Trees 🧩</h2>
                  <p>For range queries and updates in logarithmic time.</p>
                </div>
                <div className="topic">
                  <h2>9. Heaps & Priority Queue 🔺</h2>
                  <ul>
                    <li>Top K problems</li>
                    <li>Heapify</li>
                  </ul>
                </div>
                <div className="topic">
                  <h2>10. Advanced Backtracking 🧠</h2>
                  <ul>
                    <li>N-Queens</li>
                    <li>Sudoku Solver</li>
                    <li>Word Search</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="section3 mt-8 flex gap-4 justify-center">
        <button className="border px-4 py-2">Roadmap</button>
        <button className="border px-4 py-2" id="B2">Discord Channels</button>
        <button className="border px-4 py-2">Online + Social Media Resources</button>
      </div>

      {/* Footer */}
      <footer className="footer mt-8 text-center">
        <button onClick={() => setView('home')} className="back-button">
          ← Back
        </button>
        <p className="footer-text mt-2">Made with ❤️ for aspiring developers</p>
      </footer>
    </div>
  );
};

export default Panel;
