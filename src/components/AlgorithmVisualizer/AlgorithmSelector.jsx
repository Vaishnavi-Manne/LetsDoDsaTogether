import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Code, BarChart3, Shuffle, GitBranch, Hash } from 'lucide-react';

// Sample algorithms data
const algorithmsData = {
  sorting: [
    {
      id: 'bubble-sort',
      name: 'Bubble Sort',
      description: 'Simple comparison-based sorting algorithm',
      complexity: 'O(n²)',
      difficulty: 'Beginner',
      language: 'javascript',
      implementations: {
        javascript: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    bubbleSort(arr);

    cout << "Sorted array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    return 0;
}`,
        java: `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);

        System.out.print("Sorted array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}`,
        python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print("Sorted array:", arr)`
      },
      code: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
      steps: [
        { array: [64, 34, 25, 12, 22, 11, 90], comparing: [], swapped: false, description: 'Initial array' },
        { array: [34, 64, 25, 12, 22, 11, 90], comparing: [0, 1], swapped: true, description: 'Compare 64 and 34, swap them' },
        { array: [34, 25, 64, 12, 22, 11, 90], comparing: [1, 2], swapped: true, description: 'Compare 64 and 25, swap them' },
        { array: [34, 25, 12, 64, 22, 11, 90], comparing: [2, 3], swapped: true, description: 'Compare 64 and 12, swap them' },
        { array: [34, 25, 12, 22, 64, 11, 90], comparing: [3, 4], swapped: true, description: 'Compare 64 and 22, swap them' },
        { array: [34, 25, 12, 22, 11, 64, 90], comparing: [4, 5], swapped: true, description: 'Compare 64 and 11, swap them' },
        { array: [34, 25, 12, 22, 11, 64, 90], comparing: [5, 6], swapped: false, description: 'Compare 64 and 90, no swap needed' },
      ]
    },
    {
      id: 'quick-sort',
      name: 'Quick Sort',
      description: 'Efficient divide-and-conquer sorting algorithm',
      complexity: 'O(n log n)',
      difficulty: 'Intermediate',
      language: 'javascript',
      implementations: {
        javascript: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    quickSort(arr, 0, arr.size() - 1);

    cout << "Sorted array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    return 0;
}`,
        java: `public class QuickSort {
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                // Swap elements
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // Swap pivot to correct position
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        quickSort(arr, 0, arr.length - 1);

        System.out.print("Sorted array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}`,
        python: `def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1

    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1

    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

    return arr

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
quick_sort(arr)
print("Sorted array:", arr)`
      },
      code: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`,
      steps: [
        { array: [64, 34, 25, 12, 22, 11, 90], pivot: 6, low: 0, high: 6, description: 'Initial array, pivot = 90' },
        { array: [64, 34, 25, 12, 22, 11, 90], pivot: 6, low: 0, high: 6, comparing: [0], description: 'Compare 64 with pivot 90' },
        { array: [64, 34, 25, 12, 22, 11, 90], pivot: 6, low: 0, high: 6, comparing: [1], description: 'Compare 34 with pivot 90' },
      ]
    },
    {
      id: 'merge-sort',
      name: 'Merge Sort',
      description: 'Stable divide-and-conquer sorting algorithm',
      complexity: 'O(n log n)',
      difficulty: 'Intermediate',
      language: 'javascript',
      implementations: {
        javascript: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& arr, int left, int mid, int right) {
    vector<int> leftArr(arr.begin() + left, arr.begin() + mid + 1);
    vector<int> rightArr(arr.begin() + mid + 1, arr.begin() + right + 1);

    int i = 0, j = 0, k = left;

    while (i < leftArr.size() && j < rightArr.size()) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
    }

    while (i < leftArr.size()) arr[k++] = leftArr[i++];
    while (j < rightArr.size()) arr[k++] = rightArr[j++];
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    mergeSort(arr, 0, arr.size() - 1);

    cout << "Sorted array: ";
    for (int num : arr) {
        cout << num << " ";
    }
    return 0;
}`,
        java: `public class MergeSort {
    public static void merge(int[] arr, int left, int mid, int right) {
        int[] leftArr = new int[mid - left + 1];
        int[] rightArr = new int[right - mid];

        System.arraycopy(arr, left, leftArr, 0, leftArr.length);
        System.arraycopy(arr, mid + 1, rightArr, 0, rightArr.length);

        int i = 0, j = 0, k = left;

        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k++] = leftArr[i++];
            } else {
                arr[k++] = rightArr[j++];
            }
        }

        while (i < leftArr.length) arr[k++] = leftArr[i++];
        while (j < rightArr.length) arr[k++] = rightArr[j++];
    }

    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        mergeSort(arr, 0, arr.length - 1);

        System.out.print("Sorted array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}`,
        python: `def merge_sort(arr):
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

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = merge_sort(arr)
print("Sorted array:", sorted_arr)`
      },
      code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
      steps: [
        { array: [64, 34, 25, 12], description: 'Initial array' },
        { array: [64, 34, 25, 12], dividing: [[64, 34], [25, 12]], description: 'Divide into two halves' },
        { array: [64, 34, 25, 12], dividing: [[64], [34], [25], [12]], description: 'Continue dividing' },
      ]
    }
  ],
  searching: [
    {
      id: 'binary-search',
      name: 'Binary Search',
      description: 'Efficient search algorithm for sorted arrays',
      complexity: 'O(log n)',
      difficulty: 'Beginner',
      language: 'javascript',
      implementations: {
        javascript: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Not found
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Not found
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11, 13, 15};
    int target = 7;
    int result = binarySearch(arr, target);

    if (result != -1) {
        cout << "Element found at index: " << result << endl;
    } else {
        cout << "Element not found" << endl;
    }
    return 0;
}`,
        java: `public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1; // Not found
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11, 13, 15};
        int target = 7;
        int result = binarySearch(arr, target);

        if (result != -1) {
            System.out.println("Element found at index: " + result);
        } else {
            System.out.println("Element not found");
        }
    }
}`,
        python: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # Not found

# Example usage
arr = [1, 3, 5, 7, 9, 11, 13, 15]
target = 7
result = binary_search(arr, target)

if result != -1:
    print(f"Element found at index: {result}")
else:
    print("Element not found")`
      },
      code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Not found
}`,
      steps: [
        { array: [1, 3, 5, 7, 9, 11, 13, 15], target: 7, left: 0, right: 7, mid: 3, description: 'Initial search for 7' },
        { array: [1, 3, 5, 7, 9, 11, 13, 15], target: 7, left: 0, right: 7, mid: 3, found: true, description: 'Found target at index 3' },
      ]
    },
    {
      id: 'linear-search',
      name: 'Linear Search',
      description: 'Simple search algorithm that checks every element',
      complexity: 'O(n)',
      difficulty: 'Beginner',
      language: 'javascript',
      implementations: {
        javascript: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Not found
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1; // Not found
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    int target = 22;
    int result = linearSearch(arr, target);

    if (result != -1) {
        cout << "Element found at index: " << result << endl;
    } else {
        cout << "Element not found" << endl;
    }
    return 0;
}`,
        java: `public class LinearSearch {
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1; // Not found
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        int target = 22;
        int result = linearSearch(arr, target);

        if (result != -1) {
            System.out.println("Element found at index: " + result);
        } else {
            System.out.println("Element not found");
        }
    }
}`,
        python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1  # Not found

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
target = 22
result = linear_search(arr, target)

if result != -1:
    print(f"Element found at index: {result}")
else:
    print("Element not found")`
      },
      code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Not found
}`,
      steps: [
        { array: [64, 34, 25, 12, 22, 11, 90], target: 22, current: 0, description: 'Start searching for 22' },
        { array: [64, 34, 25, 12, 22, 11, 90], target: 22, current: 1, description: 'Check index 1' },
        { array: [64, 34, 25, 12, 22, 11, 90], target: 22, current: 2, description: 'Check index 2' },
        { array: [64, 34, 25, 12, 22, 11, 90], target: 22, current: 3, description: 'Check index 3' },
        { array: [64, 34, 25, 12, 22, 11, 90], target: 22, current: 4, found: true, description: 'Found target at index 4' },
      ]
    }
  ],
  graph: [
    {
      id: 'bfs',
      name: 'Breadth-First Search',
      description: 'Graph traversal algorithm that explores neighbors first',
      complexity: 'O(V + E)',
      difficulty: 'Intermediate',
      language: 'javascript',
      implementations: {
        javascript: `function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];

  while (queue.length > 0) {
    const vertex = queue.shift();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
#include <unordered_map>
using namespace std;

vector<string> bfs(unordered_map<string, vector<string>>& graph, string start) {
    unordered_set<string> visited;
    queue<string> q;
    vector<string> result;

    q.push(start);

    while (!q.empty()) {
        string vertex = q.front();
        q.pop();

        if (visited.find(vertex) == visited.end()) {
            visited.insert(vertex);
            result.push_back(vertex);

            for (const string& neighbor : graph[vertex]) {
                if (visited.find(neighbor) == visited.end()) {
                    q.push(neighbor);
                }
            }
        }
    }

    return result;
}

int main() {
    unordered_map<string, vector<string>> graph = {
        {"A", {"B", "C"}},
        {"B", {"A", "D"}},
        {"C", {"A", "E"}},
        {"D", {"B"}},
        {"E", {"C"}}
    };

    vector<string> result = bfs(graph, "A");

    cout << "BFS traversal: ";
    for (const string& vertex : result) {
        cout << vertex << " ";
    }
    return 0;
}`,
        java: `import java.util.*;

public class BFS {
    public static List<String> bfs(Map<String, List<String>> graph, String start) {
        Set<String> visited = new HashSet<>();
        Queue<String> queue = new LinkedList<>();
        List<String> result = new ArrayList<>();

        queue.offer(start);

        while (!queue.isEmpty()) {
            String vertex = queue.poll();

            if (!visited.contains(vertex)) {
                visited.add(vertex);
                result.add(vertex);

                for (String neighbor : graph.get(vertex)) {
                    if (!visited.contains(neighbor)) {
                        queue.offer(neighbor);
                    }
                }
            }
        }

        return result;
    }

    public static void main(String[] args) {
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("A", Arrays.asList("B", "C"));
        graph.put("B", Arrays.asList("A", "D"));
        graph.put("C", Arrays.asList("A", "E"));
        graph.put("D", Arrays.asList("B"));
        graph.put("E", Arrays.asList("C"));

        List<String> result = bfs(graph, "A");

        System.out.print("BFS traversal: ");
        for (String vertex : result) {
            System.out.print(vertex + " ");
        }
    }
}`,
        python: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    result = []

    while queue:
        vertex = queue.popleft()

        if vertex not in visited:
            visited.add(vertex)
            result.append(vertex)

            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    queue.append(neighbor)

    return result

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B'],
    'E': ['C']
}

result = bfs(graph, 'A')
print("BFS traversal:", result)`
      },
      code: `function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];

  while (queue.length > 0) {
    const vertex = queue.shift();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}`,
      steps: [
        { graph: { A: ['B', 'C'], B: ['A', 'D'], C: ['A', 'E'], D: ['B'], E: ['C'] }, start: 'A', visited: [], queue: ['A'], description: 'Start BFS from A' },
        { graph: { A: ['B', 'C'], B: ['A', 'D'], C: ['A', 'E'], D: ['B'], E: ['C'] }, start: 'A', visited: ['A'], queue: ['B', 'C'], description: 'Visit A, add neighbors to queue' },
      ]
    },
    {
      id: 'dfs',
      name: 'Depth-First Search',
      description: 'Graph traversal algorithm that explores as far as possible',
      complexity: 'O(V + E)',
      difficulty: 'Intermediate',
      language: 'javascript',
      code: `function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
  
  return visited;
}`,
      steps: [
        { graph: { A: ['B', 'C'], B: ['A', 'D'], C: ['A', 'E'], D: ['B'], E: ['C'] }, start: 'A', visited: [], stack: ['A'], description: 'Start DFS from A' },
        { graph: { A: ['B', 'C'], B: ['A', 'D'], C: ['A', 'E'], D: ['B'], E: ['C'] }, start: 'A', visited: ['A'], stack: ['B'], description: 'Visit A, go to B' },
      ]
    }
  ]
};

const categories = [
  { id: 'sorting', name: 'Sorting', icon: BarChart3, color: 'bg-blue-500' },
  { id: 'searching', name: 'Searching', icon: Search, color: 'bg-green-500' },
  { id: 'graph', name: 'Graph', icon: GitBranch, color: 'bg-purple-500' },
];

const AlgorithmSelector = ({ onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('sorting');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAlgorithms = algorithmsData[selectedCategory]?.filter(algorithm =>
    algorithm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    algorithm.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search algorithms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-1 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-white dark:bg-gray-800 text-purple-600 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Algorithm Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlgorithms.map((algorithm, index) => (
          <motion.div
            key={algorithm.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => onSelect(algorithm)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {algorithm.name}
                  </h3>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(algorithm.difficulty)}`}>
                  {algorithm.difficulty}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {algorithm.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                  {algorithm.complexity}
                </span>
                <span className="text-xs text-purple-600 font-medium">
                  Click to visualize →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredAlgorithms.length === 0 && (
        <div className="text-center py-12">
          <Hash className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">
            No algorithms found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default AlgorithmSelector;
