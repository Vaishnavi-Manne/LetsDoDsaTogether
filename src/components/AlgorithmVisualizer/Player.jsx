import React from 'react';
import { Play, Pause, RotateCcw, SkipForward, SkipBack, Gauge } from 'lucide-react';

const Player = ({
  isPlaying,
  currentStep,
  totalSteps,
  speed,
  onPlay,
  onReset,
  onStepForward,
  onStepBackward,
  onSpeedChange,
  onStepChange
}) => {
  const speedOptions = [
    { value: 0.25, label: '0.25x' },
    { value: 0.5, label: '0.5x' },
    { value: 1, label: '1x' },
    { value: 1.5, label: '1.5x' },
    { value: 2, label: '2x' },
    { value: 3, label: '3x' }
  ];

  const progress = totalSteps > 0 ? (currentStep / (totalSteps - 1)) * 100 : 0;

  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
          <span>Step {currentStep + 1} of {totalSteps}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-center space-x-4">
        {/* Step Backward */}
        <button
          onClick={onStepBackward}
          disabled={currentStep === 0}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          title="Step Backward"
        >
          <SkipBack className="w-5 h-5" />
        </button>

        {/* Play/Pause */}
        <button
          onClick={onPlay}
          disabled={totalSteps === 0}
          className="p-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>

        {/* Step Forward */}
        <button
          onClick={onStepForward}
          disabled={currentStep >= totalSteps - 1}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          title="Step Forward"
        >
          <SkipForward className="w-5 h-5" />
        </button>

        {/* Reset */}
        <button
          onClick={onReset}
          disabled={totalSteps === 0}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          title="Reset"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Speed Control */}
      <div className="flex items-center justify-center space-x-3">
        <Gauge className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">Speed:</span>
        <div className="flex space-x-1">
          {speedOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onSpeedChange(option.value)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                speed === option.value
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Step Slider */}
      <div className="space-y-2">
        <label className="text-sm text-gray-600 dark:text-gray-300 font-medium">
          Manual Step Control
        </label>
        <input
          type="range"
          min="0"
          max={Math.max(0, totalSteps - 1)}
          value={currentStep}
          onChange={(e) => {
            const step = parseInt(e.target.value);
            if (onStepChange) {
              onStepChange(step);
            }
          }}
          disabled={totalSteps === 0}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${progress}%, #e5e7eb ${progress}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Start</span>
          <span>End</span>
        </div>
      </div>

      {/* Algorithm Info */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
          Controls Guide
        </h4>
        <div className="space-y-1 text-xs text-gray-600 dark:text-gray-300">
          <div className="flex items-center space-x-2">
            <Play className="w-3 h-3" />
            <span>Play/Pause: Start or stop the animation</span>
          </div>
          <div className="flex items-center space-x-2">
            <SkipBack className="w-3 h-3" />
            <SkipForward className="w-3 h-3" />
            <span>Step: Move one step backward or forward</span>
          </div>
          <div className="flex items-center space-x-2">
            <RotateCcw className="w-3 h-3" />
            <span>Reset: Go back to the beginning</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="w-3 h-3" />
            <span>Speed: Adjust animation speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
