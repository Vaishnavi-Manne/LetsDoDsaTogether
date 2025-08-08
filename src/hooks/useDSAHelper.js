import { useState, useCallback } from 'react';

// Common DSA topics and their explanations
const DSA_TOPICS = {
  'arrays': {
    description: 'Linear data structure storing elements in contiguous memory',
    complexities: 'Access: O(1), Search: O(n), Insert/Delete: O(n)',
    useCase: 'When you need fast access by index'
  },
  'linked lists': {
    description: 'Linear data structure with nodes containing data and pointers',
    complexities: 'Access: O(n), Search: O(n), Insert/Delete: O(1)',
    useCase: 'When frequent insertions/deletions are needed'
  },
  'stacks': {
    description: 'LIFO (Last In First Out) data structure',
    complexities: 'Push/Pop: O(1), Top: O(1)',
    useCase: 'Function calls, expression evaluation, backtracking'
  },
  'queues': {
    description: 'FIFO (First In First Out) data structure',
    complexities: 'Enqueue/Dequeue: O(1)',
    useCase: 'BFS, scheduling, buffer management'
  },
  'binary trees': {
    description: 'Hierarchical structure with each node having at most 2 children',
    complexities: 'Search/Insert/Delete: O(log n) average, O(n) worst',
    useCase: 'Hierarchical data representation, searching'
  },
  'binary search': {
    description: 'Divide and conquer algorithm for sorted arrays',
    complexities: 'Time: O(log n), Space: O(1)',
    useCase: 'Searching in sorted data'
  },
  'sorting': {
    description: 'Arranging elements in order',
    complexities: 'Quick/Merge: O(n log n), Bubble: O(n²)',
    useCase: 'Data organization, preprocessing for other algorithms'
  },
  'dynamic programming': {
    description: 'Optimization technique using overlapping subproblems',
    complexities: 'Varies, typically O(n²) or O(n³)',
    useCase: 'Optimization problems with optimal substructure'
  },
  'graphs': {
    description: 'Non-linear structure with vertices connected by edges',
    complexities: 'BFS/DFS: O(V + E)',
    useCase: 'Networks, relationships, pathfinding'
  },
  'hash tables': {
    description: 'Key-value pairs using hash function for indexing',
    complexities: 'Average: O(1), Worst: O(n)',
    useCase: 'Fast lookups, caching, frequency counting'
  }
};

// Common algorithms and their implementations
const ALGORITHM_TEMPLATES = {
  'binary search': `
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
`,
  'merge sort': `
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result
`,
  'dfs': `
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start)
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    
    return visited
`,
  'bfs': `
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        vertex = queue.popleft()
        print(vertex)
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    
    return visited
`
};

// Practice problems suggestions
const PRACTICE_PROBLEMS = {
  'beginner': [
    'Two Sum',
    'Valid Parentheses',
    'Merge Two Sorted Lists',
    'Maximum Subarray',
    'Contains Duplicate'
  ],
  'intermediate': [
    'Longest Substring Without Repeating Characters',
    '3Sum',
    'Container With Most Water',
    'Group Anagrams',
    'Binary Tree Level Order Traversal'
  ],
  'advanced': [
    'Median of Two Sorted Arrays',
    'Regular Expression Matching',
    'Merge k Sorted Lists',
    'Trapping Rain Water',
    'Serialize and Deserialize Binary Tree'
  ]
};

export const useDSAHelper = () => {
  const [suggestions, setSuggestions] = useState([]);

  const getTopicInfo = useCallback((topic) => {
    const normalizedTopic = topic.toLowerCase();
    return DSA_TOPICS[normalizedTopic] || null;
  }, []);

  const getAlgorithmTemplate = useCallback((algorithm) => {
    const normalizedAlgorithm = algorithm.toLowerCase();
    return ALGORITHM_TEMPLATES[normalizedAlgorithm] || null;
  }, []);

  const getPracticeProblems = useCallback((level = 'beginner') => {
    return PRACTICE_PROBLEMS[level.toLowerCase()] || PRACTICE_PROBLEMS['beginner'];
  }, []);

  const analyzeProblem = useCallback((problemDescription) => {
    const analysis = {
      suggestedApproach: [],
      dataStructures: [],
      timeComplexity: '',
      spaceComplexity: '',
      hints: []
    };

    const text = problemDescription.toLowerCase();

    // Suggest data structures based on problem description
    if (text.includes('sorted') || text.includes('search')) {
      analysis.dataStructures.push('Binary Search');
      analysis.suggestedApproach.push('Binary Search for O(log n) lookup');
    }
    
    if (text.includes('frequency') || text.includes('count')) {
      analysis.dataStructures.push('Hash Map');
      analysis.suggestedApproach.push('Use hash map for frequency counting');
    }
    
    if (text.includes('path') || text.includes('connected') || text.includes('graph')) {
      analysis.dataStructures.push('Graph');
      analysis.suggestedApproach.push('Use BFS/DFS for graph traversal');
    }
    
    if (text.includes('tree') || text.includes('binary')) {
      analysis.dataStructures.push('Binary Tree');
      analysis.suggestedApproach.push('Consider tree traversal algorithms');
    }
    
    if (text.includes('optimal') || text.includes('minimum') || text.includes('maximum')) {
      analysis.dataStructures.push('Dynamic Programming');
      analysis.suggestedApproach.push('Look for optimal substructure and overlapping subproblems');
    }

    return analysis;
  }, []);

  const generateHints = useCallback((problem) => {
    const hints = [
      "Start by understanding the problem constraints",
      "Think about the brute force solution first",
      "Consider if sorting would help",
      "Look for patterns or mathematical relationships",
      "Think about edge cases"
    ];
    
    return hints;
  }, []);

  const getComplexityAnalysis = useCallback((algorithm) => {
    const complexityMap = {
      'bubble sort': { time: 'O(n²)', space: 'O(1)' },
      'merge sort': { time: 'O(n log n)', space: 'O(n)' },
      'quick sort': { time: 'O(n log n) avg, O(n²) worst', space: 'O(log n)' },
      'binary search': { time: 'O(log n)', space: 'O(1)' },
      'linear search': { time: 'O(n)', space: 'O(1)' },
      'dfs': { time: 'O(V + E)', space: 'O(V)' },
      'bfs': { time: 'O(V + E)', space: 'O(V)' }
    };
    
    return complexityMap[algorithm.toLowerCase()] || null;
  }, []);

  return {
    getTopicInfo,
    getAlgorithmTemplate,
    getPracticeProblems,
    analyzeProblem,
    generateHints,
    getComplexityAnalysis,
    suggestions,
    setSuggestions
  };
};

export default useDSAHelper;
