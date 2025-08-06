import Tracer from './Tracer.jsx';

class LogTracer extends Tracer {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      logs: []
    };
  }

  print(message) {
    const { logs } = this.state;
    this.setState({ 
      logs: [...logs, { 
        message: String(message), 
        timestamp: Date.now() 
      }]
    });
  }

  println(message) {
    this.print(message + '\n');
  }

  clear() {
    this.setState({ logs: [] });
  }

  chart() {
    return {
      type: 'log',
      data: this.state.logs
    };
  }
}

export default LogTracer;
