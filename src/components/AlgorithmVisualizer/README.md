# Algorithm Visualizer

A comprehensive algorithm visualization component integrated into the LetsDoDsaTogether app.

## Features

### 🎯 Algorithm Categories
- **Sorting Algorithms**: Bubble Sort, Quick Sort, Merge Sort, and more
- **Searching Algorithms**: Linear Search, Binary Search, Jump Search
- **Graph Algorithms**: BFS, DFS, Dijkstra's Algorithm
- **Dynamic Programming**: Fibonacci, Knapsack, LCS
- **Tree Algorithms**: Tree Traversal, BST, AVL Tree

### 🎮 Interactive Controls
- **Play/Pause**: Control animation playback
- **Step Controls**: Move forward/backward through algorithm steps
- **Speed Control**: Adjust animation speed (0.25x to 3x)
- **Reset**: Return to the beginning of the algorithm
- **Manual Step Control**: Jump to any step using the slider

### 📊 Visualizations
- **Sorting**: Animated bar charts showing comparisons and swaps
- **Searching**: Highlighted array elements showing search progress
- **Graph**: Interactive node and edge visualization
- **Real-time Updates**: Synchronized with algorithm execution

### 💻 Code Integration
- **Syntax Highlighting**: Code editor with multiple language support
- **Step Synchronization**: Code highlights current execution step
- **Copy Functionality**: Easy code copying for reference
- **Multiple Languages**: JavaScript, Python, Java, C++ support

## Usage

### Accessing the Visualizer
1. Navigate to `/visualizer` route in the app
2. Click on "Visualizer" in the navigation menu
3. Select an algorithm category from the main interface

### Using the Interface
1. **Select Algorithm**: Choose from categorized algorithm list
2. **Watch Visualization**: Observe step-by-step algorithm execution
3. **Control Playback**: Use player controls to manage animation
4. **Study Code**: Review implementation in the code panel
5. **Change Algorithm**: Switch to different algorithms anytime

### Navigation Structure
```
/visualizer
├── Algorithm Selection (Default view)
├── Visualization Interface
│   ├── Left Panel: Visualization + Controls
│   └── Right Panel: Code Editor
└── Algorithm Categories
    ├── Sorting
    ├── Searching
    ├── Graph
    ├── Dynamic Programming
    └── Tree
```

## Component Architecture

### Main Components
- `AlgorithmVisualizer.jsx`: Main container component
- `AlgorithmSelector.jsx`: Algorithm selection interface
- `VisualizationViewer.jsx`: Renders algorithm visualizations
- `Player.jsx`: Animation control interface
- `CodeEditor.jsx`: Code display and editing
- `Navigator.jsx`: Algorithm library navigation

### Data Structure
Each algorithm includes:
```javascript
{
  id: 'algorithm-id',
  name: 'Algorithm Name',
  description: 'Brief description',
  complexity: 'Time complexity',
  difficulty: 'Beginner|Intermediate|Advanced',
  language: 'javascript|python|java|cpp',
  code: 'Implementation code',
  steps: [
    {
      // Step-specific data for visualization
      array: [...],
      comparing: [...],
      description: 'Step description'
    }
  ]
}
```

## Styling and Theming

### Design System
- **Colors**: Purple primary theme matching app design
- **Dark Mode**: Full dark mode support
- **Responsive**: Mobile-friendly responsive design
- **Animations**: Smooth framer-motion animations
- **Icons**: Lucide React icons for consistency

### Visual Indicators
- **Blue**: Normal/default state
- **Yellow**: Currently comparing/processing
- **Red**: Swapped/modified elements
- **Green**: Found/completed elements
- **Purple**: Start/selected elements

## Integration with Main App

### Routing
- Added `/visualizer` route to main app router
- Integrated with existing navigation system
- Maintains app layout and theming

### Navigation Updates
- Added "Visualizer" link to main navigation
- Included in mobile menu
- Eye icon for visual identification

### Dependencies
All required dependencies are already included in the main app:
- `react-ace`: Code editor functionality
- `framer-motion`: Smooth animations
- `lucide-react`: Modern icons
- `ace-builds`: Syntax highlighting

## Future Enhancements

### Planned Features
- [ ] Custom input data for algorithms
- [ ] Algorithm comparison mode
- [ ] Performance metrics display
- [ ] Save/load algorithm states
- [ ] Interactive algorithm creation
- [ ] More algorithm categories
- [ ] Advanced visualization options
- [ ] Export visualization as GIF/video

### Extensibility
The component architecture supports easy addition of:
- New algorithm categories
- Custom visualization types
- Additional programming languages
- Enhanced control features
- Advanced analytics

## Technical Notes

### Performance
- Optimized rendering for smooth animations
- Efficient state management
- Lazy loading for better performance
- Minimal re-renders during animation

### Accessibility
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Focus management

### Browser Support
- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge
- Mobile browsers supported
- Progressive enhancement approach
