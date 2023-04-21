import React, { useState } from "react";

const Container = ({ setCounter }) => {
  return (
    <div>
      <AddOneButton setCounter={setCounter} />
    </div>
  );
};

const AddOneButton = ({ setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter((prevValue) => prevValue + 1)}>Add one</button>
    </div>
  );
};

const Counter = ({ counter }) => {
  return <div>Counter: {counter}</div>;
};

function CounterUseState() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Container setCounter={setCounter} />
      <Counter counter={counter} />
    </div>
  );
}

export default CounterUseState;
