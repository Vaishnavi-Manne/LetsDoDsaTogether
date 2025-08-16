import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Send, Bot, User, Minimize2, X, MessageCircle, Code, BookOpen, Lightbulb } from 'lucide-react';
import useDSAHelper from '../../hooks/useDSAHelper';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your DSA assistant. I can help you with:\n\n• Data structures and algorithms explanations\n• Code examples and implementations\n• Time/space complexity analysis\n• Problem-solving strategies\n• Practice problem suggestions\n\nWhat would you like to learn about?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize Gemini AI and DSA Helper
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const {
    getTopicInfo,
    getAlgorithmTemplate,
    getPracticeProblems,
    analyzeProblem,
    getComplexityAnalysis
  } = useDSAHelper();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const formatBotResponse = (text) => {
    // Format code blocks
    text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>');
    
    // Format inline code
    text = text.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
    
    // Format bold text
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Format bullet points
    text = text.replace(/^\* (.+)$/gm, '<li>$1</li>');
    text = text.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Format numbered lists
    text = text.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
    
    // Format line breaks
    text = text.replace(/\n/g, '<br>');
    
    return text;
  };

  const getDSAPrompt = (userMessage) => {
    // Check if it's a quick lookup request
    const topicInfo = getTopicInfo(userMessage);
    const algorithmTemplate = getAlgorithmTemplate(userMessage);
    const complexityInfo = getComplexityAnalysis(userMessage);
    
    let additionalContext = "";
    
    if (topicInfo) {
      additionalContext += `\n\nQuick Reference for ${userMessage}:
- Description: ${topicInfo.description}
- Complexities: ${topicInfo.complexities}
- Use Case: ${topicInfo.useCase}`;
    }
    
    if (algorithmTemplate) {
      additionalContext += `\n\nCode Template:\n\`\`\`python${algorithmTemplate}\`\`\``;
    }
    
    if (complexityInfo) {
      additionalContext += `\n\nComplexity Analysis:
- Time Complexity: ${complexityInfo.time}
- Space Complexity: ${complexityInfo.space}`;
    }
    
    // Check for practice problem requests
    if (userMessage.toLowerCase().includes('practice') || userMessage.toLowerCase().includes('problems')) {
      const level = userMessage.toLowerCase().includes('advanced') ? 'advanced' :
                   userMessage.toLowerCase().includes('intermediate') ? 'intermediate' : 'beginner';
      const problems = getPracticeProblems(level);
      additionalContext += `\n\n${level.charAt(0).toUpperCase() + level.slice(1)} Practice Problems:
${problems.map(p => `• ${p}`).join('\n')}`;
    }

    return `You are a helpful DSA (Data Structures and Algorithms) assistant specialized in computer science education. Please provide clear, educational responses about data structures, algorithms, coding problems, time/space complexity, and programming concepts.

User question: ${userMessage}

${additionalContext}

Please provide:
1. A clear explanation appropriate for the user's level
2. Code examples when relevant (prefer Python, Java, or C++)
3. Time and space complexity analysis when applicable
4. Related concepts or similar problems if relevant
5. Step-by-step approach for problem-solving questions

Keep responses concise but informative, and format code blocks properly with syntax highlighting.`;
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = getDSAPrompt(inputMessage);
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botResponse = response.text();

      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting right now. Please make sure your API key is configured and try again.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hi! I'm your DSA assistant. I can help you with:\n\n• Data structures and algorithms explanations\n• Code examples and implementations\n• Time/space complexity analysis\n• Problem-solving strategies\n• Practice problem suggestions\n\nWhat would you like to learn about?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const quickSuggestions = [
    "Explain time complexity",
    "Binary search algorithm",
    "Practice problems",
    "Arrays vs Linked Lists",
    "Dynamic programming basics"
  ];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="chatbot-fab"
        aria-label="Open chatbot"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-header-info">
          <Bot size={20} />
          <div>
            <h3>DSA Assistant</h3>
            <span>Powered by Gemini AI</span>
          </div>
        </div>
        <div className="chatbot-header-actions">
          <button
            onClick={clearChat}
            className="chatbot-action-btn"
            title="Clear chat"
          >
            Clear
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="chatbot-action-btn"
            title="Minimize"
          >
            <Minimize2 size={16} />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="chatbot-action-btn"
            title="Close"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="chatbot-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            <div className="message-avatar">
              {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className="message-content">
              <div 
                className="message-text"
                dangerouslySetInnerHTML={{ 
                  __html: message.sender === 'bot' ? formatBotResponse(message.text) : message.text 
                }}
              />
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message bot-message">
            <div className="message-avatar">
              <Bot size={16} />
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        {/* Quick suggestions - show only when chat is empty or just has the welcome message */}
        {messages.length <= 1 && !isLoading && (
          <div className="quick-suggestions">
            <div className="suggestions-header">
              <Lightbulb size={16} />
              <span>Quick suggestions:</span>
            </div>
            <div className="suggestions-grid">
              {quickSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="suggestion-btn"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input">
        <textarea
          ref={inputRef}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me about DSA concepts, algorithms, or coding problems..."
          className="chatbot-textarea"
          rows="1"
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={!inputMessage.trim() || isLoading}
          className="chatbot-send-btn"
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
