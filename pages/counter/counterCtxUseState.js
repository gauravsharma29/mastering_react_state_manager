import React, { useState, createContext, useContext } from "react";

// Step 1 - Declaring Context
const CounterContext = createContext(null);

// Step 2 - Create Provider here you will pass the default state in value props
const CounterContextProvider = ({ children }) => {
  return <CounterContext.Provider value={useState(0)}>{children}</CounterContext.Provider>;
};

const Container = () => {
  return (
    <div>
      <AddOneButton />
    </div>
  );
};

const AddOneButton = () => {
  // Step 5 - Now get the value from Provider Using useContext by paasing the ContextName
  // As there are other context as well
  const [counter, setCounter] = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter((prevValue) => prevValue + 1)}>Add one</button>
    </div>
  );
};

const Counter = () => {
  // Step 6 - Now get the value from Provider Using useContext by paasing the ContextName
  // As there are other context as well
  const [counter, setCounter] = useContext(CounterContext);
  return <div>Counter: {counter}</div>;
};

function CounterCtxUseState() {
  return (
    // Step 4 - Wrapping with Provider
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>
  );
}

export default CounterCtxUseState;
