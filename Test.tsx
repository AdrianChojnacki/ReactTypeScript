import React, { PureComponent } from 'react';

interface TestProps {
  message: string;
  onCLickHandler: () => void;
}

class Test extends PureComponent<TestProps> {
  render() {
    const { message, onCLickHandler } = this.props;
    return (
      <div>
        <p>{message}</p>
        <button onClick={onCLickHandler}>Wyświetl info w konsoli</button>
      </div>
    );
  }
}

export default Test;
