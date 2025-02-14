import { FC } from "react";
import { CounterProvider, useCounter } from "./CounterContext";
import ButtonText from "../molecules/ButtonText";
import useDebounce from "../../hooks/useDebounce";

const Counter: FC = () => {
  const { value, increment, decrement } = useCounter();

  const debouncedIncrement = useDebounce(increment, 300);
  const debouncedDecrement = useDebounce(decrement, 300);

  return <ButtonText value={value} onIncrement={debouncedIncrement} onDecrement={debouncedDecrement} />;
};

const CounterWithProvider: FC = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default CounterWithProvider;