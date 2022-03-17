import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Test from './Test';

import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Test message="Hello" onCLickHandler={this.sendMessage} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }

  sendMessage() {
    console.log('Hello');
  }
}

render(<App />, document.getElementById('root'));
