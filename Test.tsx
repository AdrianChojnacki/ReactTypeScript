import React from 'react';

interface TestProps {
  message: string | undefined;
  text?: {
    info: string;
  };
  onCLickHandler: () => void;
}

const Test = (props) => {
  const { message, text, onCLickHandler } = props;

  const showInConsole = (message: string) => {
    console.log(message);
  };

  return (
    <div>
      <p>{message}</p>
      <p>{text}</p>
      <button onClick={() => showInConsole(message)}>
        Wyświetl info w konsoli
      </button>
    </div>
  );
};

export default Test;
