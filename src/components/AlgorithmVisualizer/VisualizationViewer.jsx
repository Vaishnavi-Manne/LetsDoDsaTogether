import React from 'react';
import { motion } from 'framer-motion';

const VisualizationViewer = ({ algorithm, currentStep, data }) => {
  if (!algorithm || !data || data.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
        <p className="text-gray-500 dark:text-gray-400">No visualization data available</p>
      </div>
    );
  }

  const currentData = data[currentStep] || data[0];

  const renderSortingVisualization = () => {
    const { array, comparing = [], swapped, description } = currentData;
    
    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Step {currentStep + 1} of {data.length}: {description}
          </p>
        </div>
        
        <div className="flex items-end justify-center space-x-2 h-48">
          {array.map((value, index) => {
            const isComparing = comparing.includes(index);
            const height = (value / Math.max(...array)) * 160;
            
            return (
              <motion.div
                key={`${index}-${value}`}
                className={`flex flex-col items-center space-y-2`}
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs font-mono text-gray-600 dark:text-gray-300">
                  {value}
                </span>
                <motion.div
                  className={`w-8 rounded-t-md transition-all duration-300 ${
                    isComparing
                      ? swapped
                        ? 'bg-red-500'
                        : 'bg-yellow-500'
                      : 'bg-blue-500'
                  }`}
                  style={{ height: `${height}px` }}
                  animate={{
                    backgroundColor: isComparing
                      ? swapped
                        ? '#ef4444'
                        : '#eab308'
                      : '#3b82f6'
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {index}
                </span>
              </motion.div>
            );
          })}
        </div>
        
        <div className="flex justify-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-gray-600 dark:text-gray-300">Normal</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
            <span className="text-gray-600 dark:text-gray-300">Comparing</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span className="text-gray-600 dark:text-gray-300">Swapped</span>
          </div>
        </div>
      </div>
    );
  };

  const renderSearchVisualization = () => {
    const { array, target, current, left, right, mid, found, description } = currentData;
    
    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Step {currentStep + 1} of {data.length}: {description}
          </p>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            Searching for: <span className="text-purple-600">{target}</span>
          </p>
        </div>
        
        <div className="flex items-center justify-center space-x-2">
          {array.map((value, index) => {
            let bgColor = 'bg-gray-300 dark:bg-gray-600';
            let textColor = 'text-gray-700 dark:text-gray-300';
            
            if (found && index === current) {
              bgColor = 'bg-green-500';
              textColor = 'text-white';
            } else if (index === current) {
              bgColor = 'bg-yellow-500';
              textColor = 'text-white';
            } else if (index === mid) {
              bgColor = 'bg-blue-500';
              textColor = 'text-white';
            } else if (left !== undefined && right !== undefined && index >= left && index <= right) {
              bgColor = 'bg-blue-200 dark:bg-blue-800';
              textColor = 'text-blue-800 dark:text-blue-200';
            }
            
            return (
              <motion.div
                key={index}
                className={`w-12 h-12 rounded-lg flex items-center justify-center font-mono font-semibold transition-all duration-300 ${bgColor} ${textColor}`}
                animate={{
                  scale: index === current || index === mid ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {value}
              </motion.div>
            );
          })}
        </div>
        
        <div className="flex justify-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <span className="text-gray-600 dark:text-gray-300">Unvisited</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-gray-600 dark:text-gray-300">Middle/Current</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
            <span className="text-gray-600 dark:text-gray-300">Checking</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-gray-600 dark:text-gray-300">Found</span>
          </div>
        </div>
      </div>
    );
  };

  const renderGraphVisualization = () => {
    const { graph, visited = [], queue = [], stack = [], start, description } = currentData;
    
    if (!graph) return null;
    
    const nodes = Object.keys(graph);
    const nodePositions = {
      A: { x: 150, y: 50 },
      B: { x: 50, y: 150 },
      C: { x: 250, y: 150 },
      D: { x: 50, y: 250 },
      E: { x: 250, y: 250 },
    };
    
    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Step {currentStep + 1} of {data.length}: {description}
          </p>
        </div>
        
        <div className="relative h-64 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <svg className="w-full h-full">
            {/* Render edges */}
            {nodes.map(node => 
              graph[node].map(neighbor => {
                const startPos = nodePositions[node];
                const endPos = nodePositions[neighbor];
                if (!startPos || !endPos) return null;
                
                return (
                  <line
                    key={`${node}-${neighbor}`}
                    x1={startPos.x}
                    y1={startPos.y}
                    x2={endPos.x}
                    y2={endPos.y}
                    stroke="#6b7280"
                    strokeWidth="2"
                  />
                );
              })
            )}
            
            {/* Render nodes */}
            {nodes.map(node => {
              const pos = nodePositions[node];
              if (!pos) return null;
              
              const isVisited = visited.includes(node);
              const isInQueue = queue.includes(node);
              const isInStack = stack.includes(node);
              const isStart = node === start;
              
              let fillColor = '#e5e7eb';
              if (isStart) fillColor = '#8b5cf6';
              else if (isVisited) fillColor = '#10b981';
              else if (isInQueue || isInStack) fillColor = '#f59e0b';
              
              return (
                <g key={node}>
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="20"
                    fill={fillColor}
                    stroke="#374151"
                    strokeWidth="2"
                  />
                  <text
                    x={pos.x}
                    y={pos.y}
                    textAnchor="middle"
                    dy="0.35em"
                    className="text-sm font-semibold fill-white"
                  >
                    {node}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        
        <div className="flex justify-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-300">Unvisited</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-300">Start</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-300">In Queue/Stack</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-300">Visited</span>
          </div>
        </div>
        
        {queue.length > 0 && (
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Queue: [{queue.join(', ')}]
            </p>
          </div>
        )}
        
        {stack.length > 0 && (
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Stack: [{stack.join(', ')}]
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderVisualization = () => {
    if (algorithm.id.includes('sort')) {
      return renderSortingVisualization();
    } else if (algorithm.id.includes('search')) {
      return renderSearchVisualization();
    } else if (algorithm.id === 'bfs' || algorithm.id === 'dfs') {
      return renderGraphVisualization();
    }
    
    return (
      <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
        <p className="text-gray-500 dark:text-gray-400">Visualization not implemented for this algorithm</p>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
      {renderVisualization()}
    </div>
  );
};

export default VisualizationViewer;
