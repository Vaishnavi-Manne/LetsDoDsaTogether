import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronRight, 
  BarChart3, 
  Search, 
  GitBranch, 
  Hash,
  Clock,
  Zap,
  BookOpen
} from 'lucide-react';

const Navigator = ({ onAlgorithmSelect, selectedAlgorithm }) => {
  const [expandedCategories, setExpandedCategories] = useState(['sorting']);

  const algorithmCategories = {
    sorting: {
      name: 'Sorting Algorithms',
      icon: BarChart3,
      algorithms: [
        { id: 'bubble-sort', name: 'Bubble Sort', complexity: 'O(n²)', difficulty: 'Beginner' },
        { id: 'selection-sort', name: 'Selection Sort', complexity: 'O(n²)', difficulty: 'Beginner' },
        { id: 'insertion-sort', name: 'Insertion Sort', complexity: 'O(n²)', difficulty: 'Beginner' },
        { id: 'merge-sort', name: 'Merge Sort', complexity: 'O(n log n)', difficulty: 'Intermediate' },
        { id: 'quick-sort', name: 'Quick Sort', complexity: 'O(n log n)', difficulty: 'Intermediate' },
        { id: 'heap-sort', name: 'Heap Sort', complexity: 'O(n log n)', difficulty: 'Advanced' },
        { id: 'radix-sort', name: 'Radix Sort', complexity: 'O(nk)', difficulty: 'Advanced' },
      ]
    },
    searching: {
      name: 'Searching Algorithms',
      icon: Search,
      algorithms: [
        { id: 'linear-search', name: 'Linear Search', complexity: 'O(n)', difficulty: 'Beginner' },
        { id: 'binary-search', name: 'Binary Search', complexity: 'O(log n)', difficulty: 'Beginner' },
        { id: 'jump-search', name: 'Jump Search', complexity: 'O(√n)', difficulty: 'Intermediate' },
        { id: 'interpolation-search', name: 'Interpolation Search', complexity: 'O(log log n)', difficulty: 'Intermediate' },
        { id: 'exponential-search', name: 'Exponential Search', complexity: 'O(log n)', difficulty: 'Advanced' },
      ]
    },
    graph: {
      name: 'Graph Algorithms',
      icon: GitBranch,
      algorithms: [
        { id: 'bfs', name: 'Breadth-First Search', complexity: 'O(V + E)', difficulty: 'Intermediate' },
        { id: 'dfs', name: 'Depth-First Search', complexity: 'O(V + E)', difficulty: 'Intermediate' },
        { id: 'dijkstra', name: "Dijkstra's Algorithm", complexity: 'O(V²)', difficulty: 'Advanced' },
        { id: 'bellman-ford', name: 'Bellman-Ford Algorithm', complexity: 'O(VE)', difficulty: 'Advanced' },
        { id: 'floyd-warshall', name: 'Floyd-Warshall Algorithm', complexity: 'O(V³)', difficulty: 'Advanced' },
        { id: 'kruskal', name: "Kruskal's Algorithm", complexity: 'O(E log E)', difficulty: 'Advanced' },
        { id: 'prim', name: "Prim's Algorithm", complexity: 'O(V²)', difficulty: 'Advanced' },
      ]
    },
    dynamic: {
      name: 'Dynamic Programming',
      icon: Zap,
      algorithms: [
        { id: 'fibonacci', name: 'Fibonacci Sequence', complexity: 'O(n)', difficulty: 'Beginner' },
        { id: 'knapsack', name: '0/1 Knapsack', complexity: 'O(nW)', difficulty: 'Intermediate' },
        { id: 'lcs', name: 'Longest Common Subsequence', complexity: 'O(mn)', difficulty: 'Intermediate' },
        { id: 'edit-distance', name: 'Edit Distance', complexity: 'O(mn)', difficulty: 'Intermediate' },
        { id: 'coin-change', name: 'Coin Change', complexity: 'O(nW)', difficulty: 'Intermediate' },
        { id: 'matrix-chain', name: 'Matrix Chain Multiplication', complexity: 'O(n³)', difficulty: 'Advanced' },
      ]
    },
    tree: {
      name: 'Tree Algorithms',
      icon: Hash,
      algorithms: [
        { id: 'tree-traversal', name: 'Tree Traversal', complexity: 'O(n)', difficulty: 'Beginner' },
        { id: 'binary-search-tree', name: 'Binary Search Tree', complexity: 'O(log n)', difficulty: 'Intermediate' },
        { id: 'avl-tree', name: 'AVL Tree', complexity: 'O(log n)', difficulty: 'Advanced' },
        { id: 'red-black-tree', name: 'Red-Black Tree', complexity: 'O(log n)', difficulty: 'Advanced' },
        { id: 'segment-tree', name: 'Segment Tree', complexity: 'O(log n)', difficulty: 'Advanced' },
      ]
    }
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getComplexityColor = (complexity) => {
    if (complexity.includes('n²') || complexity.includes('n³')) {
      return 'text-red-600';
    } else if (complexity.includes('n log n') || complexity.includes('log n')) {
      return 'text-green-600';
    } else if (complexity.includes('n')) {
      return 'text-yellow-600';
    }
    return 'text-gray-600';
  };

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          Algorithm Library
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          Choose an algorithm to visualize
        </p>
      </div>

      <div className="p-2">
        {Object.entries(algorithmCategories).map(([categoryId, category]) => {
          const isExpanded = expandedCategories.includes(categoryId);
          const IconComponent = category.icon;

          return (
            <div key={categoryId} className="mb-2">
              <button
                onClick={() => toggleCategory(categoryId)}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <IconComponent className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="font-medium text-gray-800 dark:text-white">
                    {category.name}
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-6 space-y-1">
                      {category.algorithms.map((algorithm) => (
                        <motion.button
                          key={algorithm.id}
                          onClick={() => onAlgorithmSelect && onAlgorithmSelect(algorithm)}
                          className={`w-full text-left p-2 rounded-md transition-all duration-200 ${
                            selectedAlgorithm?.id === algorithm.id
                              ? 'bg-purple-100 dark:bg-purple-900 border-l-4 border-purple-600'
                              : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-800 dark:text-white">
                              {algorithm.name}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(algorithm.difficulty)}`}>
                              {algorithm.difficulty}
                            </span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Clock className="w-3 h-3 mr-1 text-gray-400" />
                            <span className={`text-xs font-mono ${getComplexityColor(algorithm.complexity)}`}>
                              {algorithm.complexity}
                            </span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Algorithm Statistics */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
          Quick Stats
        </h3>
        <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
          <div className="flex justify-between">
            <span>Total Algorithms:</span>
            <span className="font-semibold">
              {Object.values(algorithmCategories).reduce((sum, cat) => sum + cat.algorithms.length, 0)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Categories:</span>
            <span className="font-semibold">{Object.keys(algorithmCategories).length}</span>
          </div>
          <div className="flex justify-between">
            <span>Beginner Friendly:</span>
            <span className="font-semibold text-green-600">
              {Object.values(algorithmCategories)
                .flatMap(cat => cat.algorithms)
                .filter(alg => alg.difficulty === 'Beginner').length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
