import React, { FC, useState, useRef } from 'react';

interface TestProps {
  message: string | undefined;
  text?: {
    info: string;
  };
  onCLickHandler: () => void;
}

const Test: React.FC<TestProps> = (props) => {
  const { message, text, onCLickHandler } = props;
  const [counter, setCounter] = useState<number>(5);
  const divRef = useRef<HTMLDivElement>(null);

  const showInConsole = (message: string) => {
    console.log(message);
  };

  return (
    <div ref={divRef}>
      <p>{message}</p>
      <p>{text}</p>
      <button onClick={() => showInConsole(counter)}>
        Wyświetl info w konsoli
      </button>
    </div>
  );
};

export default Test;
