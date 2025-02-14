import { FC } from "react";
import { CounterProvider, useCounter } from "./ CounterContext";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

const CounterComponent: FC = () => {
  const { count, increment, decrement, lastUpdated, updatedBy } = useCounter();

  return (
    <div className="counter">
      <Text value={count} />
      <div className="counter-buttons">
        <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <div className="counter-info">
        <small>
          Last updated: {lastUpdated} by {updatedBy}
        </small>
      </div>
    </div>
  );
};

// Wrap the counter with its provider
const Counter: FC = () => {
  return (
    <CounterProvider>
      <CounterComponent />
    </CounterProvider>
  );
};

export default Counter;
