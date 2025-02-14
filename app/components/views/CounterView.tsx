import { FC } from "react";
import Counter from "../Organisms/Counter";

const CounterView = (): JSX.Element => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Counter</h1>
      <Counter />
    </div>
  );
};

export default CounterView;