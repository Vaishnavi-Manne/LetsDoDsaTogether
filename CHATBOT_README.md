# DSA Chatbot Integration

A powerful AI-powered chatbot for Data Structures and Algorithms assistance, integrated with Google's Gemini AI.

## Features

- 🤖 **AI-Powered Responses**: Uses Google Gemini AI for intelligent DSA assistance
- 💡 **Quick Suggestions**: Pre-built prompts for common DSA topics
- 📚 **Comprehensive Knowledge**: Covers data structures, algorithms, complexity analysis, and coding problems
- 🌓 **Dark Mode Support**: Seamlessly integrates with the app's theme system
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- ⚡ **Real-time Responses**: Fast and interactive chat experience

## Setup Instructions

### 1. Get Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the generated API key

### 2. Configure Environment Variables

1. Create a `.env` file in the project root:
```bash
cp .env.example .env
```

2. Open `.env` and add your Gemini API key:
```
VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here
```

### 3. Install Dependencies

The required dependency `@google/generative-ai` has already been installed. If you need to reinstall:

```bash
npm install @google/generative-ai
```

### 4. Start the Development Server

```bash
npm run dev
```

## Usage

### Basic Chat
- Click the floating chat button in the bottom-right corner
- Start asking questions about DSA topics
- Get instant AI-powered responses with code examples and explanations

### Quick Suggestions
When the chat is empty, you'll see quick suggestion buttons for:
- Time complexity explanations
- Binary search algorithm
- Practice problems
- Data structure comparisons
- Dynamic programming basics

### Example Queries

**Data Structures:**
- "Explain arrays vs linked lists"
- "What is a binary tree?"
- "Hash table implementation in Python"

**Algorithms:**
- "How does merge sort work?"
- "Binary search algorithm"
- "DFS vs BFS traversal"

**Complexity Analysis:**
- "What is time complexity?"
- "Space complexity of quicksort"
- "Big O notation explained"

**Problem Solving:**
- "Two sum problem solution"
- "Practice problems for beginners"
- "Dynamic programming approach for fibonacci"

## Component Structure

```
src/
├── components/
│   └── Chatbot/
│       ├── Chatbot.jsx      # Main chatbot component
│       └── Chatbot.css      # Chatbot styles
├── hooks/
│   └── useDSAHelper.js      # DSA knowledge base and utilities
└── .env.example             # Environment template
```

## Features Breakdown

### AI Integration
- Uses Google Gemini Pro model for responses
- Specialized prompts for DSA education
- Context-aware responses based on user queries

### DSA Knowledge Base
- Pre-defined information for common data structures
- Algorithm templates and implementations
- Complexity analysis for popular algorithms
- Practice problem suggestions by difficulty level

### User Experience
- Floating action button for easy access
- Minimizable chat window
- Message timestamps
- Typing indicators
- Clear chat functionality
- Auto-scroll to latest messages

### Theme Integration
- Supports both light and dark themes
- CSS variables for consistent theming
- Body class-based dark mode support

## Customization

### Adding New DSA Topics
Edit `src/hooks/useDSAHelper.js` and add to the `DSA_TOPICS` object:

```javascript
'your-topic': {
  description: 'Your description here',
  complexities: 'Time/Space complexities',
  useCase: 'When to use this'
}
```

### Adding Algorithm Templates
Add to the `ALGORITHM_TEMPLATES` object:

```javascript
'your-algorithm': `
def your_algorithm():
    # Your implementation here
    pass
`
```

### Modifying Quick Suggestions
Edit the `quickSuggestions` array in `Chatbot.jsx`:

```javascript
const quickSuggestions = [
  "Your custom suggestion",
  // ... other suggestions
];
```

## Troubleshooting

### API Key Issues
- Ensure your API key is correctly set in the `.env` file
- Verify the key has proper permissions on Google AI Studio
- Check that the environment variable name matches `VITE_GEMINI_API_KEY`

### Styling Issues
- The chatbot uses CSS variables for theming
- Check that your theme system is properly configured
- Verify dark mode classes are applied correctly

### Performance
- The chatbot includes message limits and auto-scrolling
- Large responses are handled with proper formatting
- Consider implementing message history limits for better performance

## Contributing

When adding new features:
1. Follow the existing code structure
2. Add appropriate TypeScript types if converting
3. Update both light and dark mode styles
4. Test on different screen sizes
5. Update this documentation

## Security Notes

- API keys are handled client-side (suitable for development)
- For production, consider implementing a backend proxy
- Never commit `.env` files to version control
- Regularly rotate API keys for security
