import React from "react";

const topics = [
  {
    title: "Time and Space Complexity",
    icon: "🧠",
    items: ["Learn how to analyze code performance", "Big O Notation"],
  },
  {
    title: "Arrays",
    icon: "🔢",
    items: ["Reverse an array", "Find the max/min", "Kadane’s Algorithm"],
  },
  {
    title: "Strings",
    icon: "✂️",
    items: ["Palindromes", "Substrings", "Anagrams", "String reversal"],
  },
  {
    title: "Hashing (HashMap/Set)",
    icon: "⚡",
    items: ["Frequency count", "Finding duplicates", "Two Sum problem"],
  },
  {
    title: " Recursion & Backtracking ",
    icon: "🔁",
    items: ["Factorial", "Fibonacci", "Tower of Hanoi (bonus brain melt)"],
  },
  {
    title: "Searching Algorithms",
    icon: "🔍",
    items: ["Linear Search", "Binary Search (sorted arrays)"],
  },
  {
    title: "Sorting Algorithms",
    icon: "📊",
    items: [
      "Bubble Sort",
      "Selection Sort",
      "Insertion Sort",
      "Merge/Quick Sort",
    ],
  },
  {
    title: "Stacks and Queues",
    icon: "🥞",
    items: ["Valid parentheses", "Next Greater Element", "Queue reversal"],
  },
  {
    title: "Linked Lists",
    icon: "🔗",
    items: ["Traversing", "Insertion/Deletion", "Reversing a linked list"],
  },
  {
    title: "Basic Math & Bit Manipulation ",
    icon: "🔢",
    items: ["GCD/LCM", "Prime numbers", "Bitwise AND/OR/XOR basics"],
  },
];

const TopicCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        DSA Topics Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="text-gray-50 text-left bg-gray-800 shadow-[0_4px_15px_rgba(0,0,0,0.5)]  rounded-2xl p-6 transform transition duration-300  hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
          >
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="ml-4 mr-2 text-2xl">{topic.icon}</span>
              {topic.title}
            </h2>
            <ul className="ml-8 list-disc list-inside ">
              {topic.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicCards;
