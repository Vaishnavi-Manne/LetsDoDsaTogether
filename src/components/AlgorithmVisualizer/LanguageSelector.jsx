import React from 'react';
import { motion } from 'framer-motion';
import { Code2, FileText } from 'lucide-react';

const LanguageSelector = ({ selectedLanguage, onLanguageChange, availableLanguages }) => {
  const languageInfo = {
    javascript: {
      name: 'JavaScript',
      color: 'bg-yellow-500',
      textColor: 'text-yellow-700',
      bgColor: 'bg-yellow-50',
      icon: '🟨',
      extension: '.js'
    },
    cpp: {
      name: 'C++',
      color: 'bg-blue-600',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      icon: '🔵',
      extension: '.cpp'
    },
    java: {
      name: 'Java',
      color: 'bg-red-600',
      textColor: 'text-red-700',
      bgColor: 'bg-red-50',
      icon: '🔴',
      extension: '.java'
    },
    python: {
      name: 'Python',
      color: 'bg-green-600',
      textColor: 'text-green-700',
      bgColor: 'bg-green-50',
      icon: '🐍',
      extension: '.py'
    }
  };

  const languages = availableLanguages || ['javascript', 'cpp', 'java', 'python'];

  return (
    <div className="mb-4">
      <div className="flex items-center mb-3">
        <Code2 className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-300" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Programming Language
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {languages.map((language) => {
          const info = languageInfo[language];
          const isSelected = selectedLanguage === language;
          
          return (
            <motion.button
              key={language}
              onClick={() => onLanguageChange(language)}
              className={`
                flex items-center space-x-2 px-3 py-2 rounded-lg border-2 transition-all duration-200
                ${isSelected 
                  ? `${info.color} text-white border-transparent shadow-md` 
                  : `${info.bgColor} ${info.textColor} border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500`
                }
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">{info.icon}</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">{info.name}</span>
                <span className="text-xs opacity-75">{info.extension}</span>
              </div>
            </motion.button>
          );
        })}
      </div>
      
      {/* Language Description */}
      <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div className="flex items-center space-x-2">
          <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Currently viewing: <span className="font-semibold">{languageInfo[selectedLanguage]?.name}</span>
          </span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {getLanguageDescription(selectedLanguage)}
        </p>
      </div>
    </div>
  );
};

const getLanguageDescription = (language) => {
  const descriptions = {
    javascript: 'Dynamic, interpreted language perfect for web development and algorithm prototyping.',
    cpp: 'High-performance compiled language ideal for system programming and competitive programming.',
    java: 'Object-oriented language with strong type safety, widely used in enterprise applications.',
    python: 'Readable, interpreted language excellent for beginners and data science applications.'
  };
  
  return descriptions[language] || 'Select a programming language to view the implementation.';
};

export default LanguageSelector;
