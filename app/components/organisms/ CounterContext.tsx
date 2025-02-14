import { createContext, useContext, useState, useCallback } from "react";

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  lastUpdated: string;
  updatedBy: string;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState("2025-02-14 05:47:14");
  const updatedBy = "Moxa-dev";

  const updateCounter = (newValue: number) => {
    setCount(newValue);
    setLastUpdated(new Date().toISOString().replace("T", " ").split(".")[0]);
  };

  const increment = useCallback(() => {
    updateCounter(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    updateCounter(count - 1);
  }, [count]);

  return (
    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
        lastUpdated,
        updatedBy,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
