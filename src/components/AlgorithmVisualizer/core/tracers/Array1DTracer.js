import Tracer from './Tracer.jsx';

class Array1DTracer extends Tracer {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      array: [],
      selected: [],
      patched: []
    };
  }

  set(array) {
    this.setState({ 
      array: [...array],
      selected: new Array(array.length).fill(false),
      patched: new Array(array.length).fill(false)
    });
  }

  patch(index, value) {
    const { array, patched } = this.state;
    const newArray = [...array];
    const newPatched = [...patched];
    
    newArray[index] = value;
    newPatched[index] = true;
    
    this.setState({ 
      array: newArray,
      patched: newPatched
    });
  }

  depatch(index) {
    const { patched } = this.state;
    const newPatched = [...patched];
    newPatched[index] = false;
    this.setState({ patched: newPatched });
  }

  select(index) {
    const { selected } = this.state;
    const newSelected = [...selected];
    newSelected[index] = true;
    this.setState({ selected: newSelected });
  }

  deselect(index) {
    const { selected } = this.state;
    const newSelected = [...selected];
    newSelected[index] = false;
    this.setState({ selected: newSelected });
  }

  chart() {
    // Convert to chart format for visualization
    return {
      type: 'array1d',
      data: this.state.array,
      selected: this.state.selected,
      patched: this.state.patched
    };
  }
}

export default Array1DTracer;
