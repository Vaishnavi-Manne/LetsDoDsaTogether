import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AlgorithmSelector from './AlgorithmSelector';
import VisualizationViewer from './VisualizationViewer';
import CodeEditor from './CodeEditor';
import Player from './Player';
import LanguageSelector from './LanguageSelector';
import { Play, Pause, RotateCcw, SkipForward, SkipBack } from 'lucide-react';

const AlgorithmVisualizer = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [visualizationData, setVisualizationData] = useState([]);
  const [code, setCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  // Animation control
  useEffect(() => {
    let interval;
    if (isPlaying && currentStep < totalSteps) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= totalSteps - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1000 / speed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, totalSteps, speed]);

  const handleAlgorithmSelect = (algorithm) => {
    setSelectedAlgorithm(algorithm);
    setCurrentStep(0);
    setIsPlaying(false);
    updateCodeForLanguage(algorithm, selectedLanguage);
    setVisualizationData(algorithm.steps || []);
    setTotalSteps(algorithm.steps?.length || 0);
  };

  const updateCodeForLanguage = (algorithm, language) => {
    if (algorithm.implementations && algorithm.implementations[language]) {
      setCode(algorithm.implementations[language]);
    } else {
      setCode(algorithm.code || '// Code not available for this language');
    }
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    if (selectedAlgorithm) {
      updateCodeForLanguage(selectedAlgorithm, language);
    }
  };

  const handlePlay = () => {
    if (currentStep >= totalSteps - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleStepForward = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleStepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f2fe] via-[#cfe0fc] to-[#dbeafe] pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Algorithm Visualizer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interactive visualization of algorithms to help you understand how they work step by step
          </p>
        </motion.div>

        {/* Algorithm Selection */}
        {!selectedAlgorithm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AlgorithmSelector onSelect={handleAlgorithmSelect} />
          </motion.div>
        )}

        {/* Main Visualizer Interface */}
        {selectedAlgorithm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Left Panel - Visualization */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {selectedAlgorithm.name}
                  </h2>
                  <button
                    onClick={() => setSelectedAlgorithm(null)}
                    className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    Change Algorithm
                  </button>
                </div>
                
                <VisualizationViewer
                  algorithm={selectedAlgorithm}
                  currentStep={currentStep}
                  data={visualizationData}
                />
              </div>

              {/* Controls */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <Player
                  isPlaying={isPlaying}
                  currentStep={currentStep}
                  totalSteps={totalSteps}
                  speed={speed}
                  onPlay={handlePlay}
                  onReset={handleReset}
                  onStepForward={handleStepForward}
                  onStepBackward={handleStepBackward}
                  onSpeedChange={handleSpeedChange}
                  onStepChange={handleStepChange}
                />
              </div>
            </div>

            {/* Right Panel - Code */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Implementation
              </h3>

              {/* Language Selector */}
              <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                availableLanguages={selectedAlgorithm.implementations ? Object.keys(selectedAlgorithm.implementations) : ['javascript']}
              />

              <CodeEditor
                code={code}
                language={selectedLanguage}
                currentStep={currentStep}
                readOnly={true}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AlgorithmVisualizer;
