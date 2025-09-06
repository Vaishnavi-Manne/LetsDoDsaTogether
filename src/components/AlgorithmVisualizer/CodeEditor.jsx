import React, { useEffect, useRef } from 'react';
import AceEditor from 'react-ace';

// Import ace editor modes and themes
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-tomorrow_night';
import 'ace-builds/src-noconflict/ext-language_tools';

const CodeEditor = ({ 
  code, 
  language = 'javascript', 
  currentStep = 0, 
  readOnly = true,
  onChange,
  theme = 'github'
}) => {
  const editorRef = useRef(null);

  // Map language names to ace editor modes
  const languageMap = {
    javascript: 'javascript',
    python: 'python',
    java: 'java',
    cpp: 'c_cpp',
    c: 'c_cpp'
  };

  // Get appropriate theme based on current theme
  const getTheme = () => {
    if (theme !== 'github') return theme;
    // You could add logic here to detect dark mode and return appropriate theme
    return 'github';
  };

  const aceMode = languageMap[language] || 'javascript';

  // Highlight current line based on step (simplified)
  useEffect(() => {
    if (editorRef.current && !readOnly) {
      const editor = editorRef.current.editor;
      // Clear previous highlights
      editor.session.clearAnnotations();
      
      // Add highlight for current step (this is a simplified version)
      // In a real implementation, you'd map steps to specific lines
      if (currentStep > 0) {
        const lineToHighlight = Math.min(currentStep + 1, editor.session.getLength());
        editor.gotoLine(lineToHighlight, 0, true);
        editor.session.addMarker(
          new editor.Range(lineToHighlight - 1, 0, lineToHighlight - 1, 1),
          'ace_active-line',
          'fullLine'
        );
      }
    }
  }, [currentStep, readOnly]);

  const editorOptions = {
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
    showLineNumbers: true,
    tabSize: 2,    fontSize: 14,
    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
    wrap: true,
    showPrintMargin: false,
    highlightActiveLine: !readOnly,
    highlightSelectedWord: true,
    cursorStyle: 'ace',
    mergeUndoDeltas: true,
    behavioursEnabled: true,
    wrapBehavioursEnabled: true,
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
    useSoftTabs: true,
    navigateWithinSoftTabs: false,
  };

  return (
    <div className="relative">
      {/* Language indicator */}
      <div className="absolute top-2 right-2 z-10">
        <span className="px-2 py-1 bg-gray-800 text-white text-xs rounded-md font-mono">
          {language.toUpperCase()}
        </span>
      </div>

      {/* Code Editor */}
      <div className="border border-gray-300 dark:border-gray-600 dark:bg-black rounded-lg overflow-hidden">
        <AceEditor
          ref={editorRef}
          mode={aceMode}
          theme={getTheme()}
          value={code}
          onChange={onChange}
          readOnly={readOnly}
          name="algorithm-code-editor"
          editorProps={{ $blockScrolling: true }}
          setOptions={editorOptions}
          width="100%"
          height="400px"
          style={{
            fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
          }}
        />
      </div>

      {/* Code explanation panel */}
      {readOnly && (
        <div className="code_exp mt-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
          <h4 className="code_exp_tit text-sm font-semibold dark:text-gray-800 mb-2">
            Code Explanation
          </h4>
          <div className="space-y-2 text-sm text-gray-600 dark:bg-gray">
            <p>
              This implementation shows the {language} version of the algorithm.
              The code is synchronized with the visualization to help you understand
              how each step corresponds to the actual implementation.
            </p>
            {currentStep > 0 && (
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                Currently executing step {currentStep} of the algorithm.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Copy button for read-only mode */}
      {readOnly && (
        <button
          onClick={() => {
            navigator.clipboard.writeText(code);
            // You could add a toast notification here
          }}
          className="absolute bottom-4 right-4 px-3 py-1 bg-purple-600 text-white text-xs rounded-md hover:bg-purple-700 transition-colors"
        >
          Copy Code
        </button>
      )}
    </div>
  );
};

export default CodeEditor;
