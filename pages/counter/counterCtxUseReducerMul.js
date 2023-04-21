import React, { useReducer, createContext, useContext } from "react";

// Step 1 - Declaring Context
const CounterContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    default:
      return state;
  }
};

// Step 2 - Create Provider here you will pass the default state in value props
const CounterContextProvider = ({ children }) => {
  return <CounterContext.Provider value={useReducer(reducer, 0)}>{children}</CounterContext.Provider>;
};

const Container = () => {
  return (
    <div>
      <AddOneButton />
      <SubtractOneButton />
    </div>
  );
};

const AddOneButton = () => {
  // Step 5 - Now get the value from Provider Using useContext by paasing the ContextName
  // As there are other context as well
  const [counter, dispatch] = useContext(CounterContext);

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "add",
          })
        }
      >
        Add one
      </button>
    </div>
  );
};

const SubtractOneButton = () => {
  // Step 5 - Now get the value from Provider Using useContext by paasing the ContextName
  // As there are other context as well
  const [counter, dispatch] = useContext(CounterContext);

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "subtract",
          })
        }
      >
        Subtract one
      </button>
    </div>
  );
};

const Counter = () => {
  // Step 6 - Now get the value from Provider Using useContext by paasing the ContextName
  // As there are other context as well
  const [counter, setCounter] = useContext(CounterContext);
  return <div>Counter: {counter}</div>;
};

function CounterCtxUseReducerMul() {
  return (
    // Step 4 - Wrapping with Provider
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>
  );
}

// Step 7 - Test to use mulitple times in a single component
export default function CounterCtxUseReducerMulPage() {
  return (
    <div>
      <CounterCtxUseReducerMul />
      <CounterCtxUseReducerMul />
      <CounterCtxUseReducerMul />
    </div>
  );
}
