import Tracer from './Tracer.jsx';

class Array2DTracer extends Tracer {
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
    const rows = array.length;
    const cols = rows > 0 ? array[0].length : 0;
    
    this.setState({ 
      array: array.map(row => [...row]),
      selected: Array(rows).fill().map(() => Array(cols).fill(false)),
      patched: Array(rows).fill().map(() => Array(cols).fill(false))
    });
  }

  patch(row, col, value) {
    const { array, patched } = this.state;
    const newArray = array.map(r => [...r]);
    const newPatched = patched.map(r => [...r]);
    
    newArray[row][col] = value;
    newPatched[row][col] = true;
    
    this.setState({ 
      array: newArray,
      patched: newPatched
    });
  }

  depatch(row, col) {
    const { patched } = this.state;
    const newPatched = patched.map(r => [...r]);
    newPatched[row][col] = false;
    this.setState({ patched: newPatched });
  }

  select(row, col) {
    const { selected } = this.state;
    const newSelected = selected.map(r => [...r]);
    newSelected[row][col] = true;
    this.setState({ selected: newSelected });
  }

  deselect(row, col) {
    const { selected } = this.state;
    const newSelected = selected.map(r => [...r]);
    newSelected[row][col] = false;
    this.setState({ selected: newSelected });
  }

  chart() {
    return {
      type: 'array2d',
      data: this.state.array,
      selected: this.state.selected,
      patched: this.state.patched
    };
  }
}

export default Array2DTracer;
