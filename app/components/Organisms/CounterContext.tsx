'use client';

import { createContext, ReactNode, useContext, useState, useCallback } from 'react';

interface CounterContextProps {
  value: number;
  increment: () => void;
  decrement: () => void;
}

// Provide a default value to avoid undefined checks
const defaultValue: CounterContextProps = {
  value: 0,
  increment: () => {},
  decrement: () => {},
};

const CounterContext = createContext<CounterContextProps>(defaultValue);

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterProvider = ({ children }: CounterProviderProps): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback((): void => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback((): void => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <CounterContext.Provider value={{ value: count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = (): CounterContextProps => {
  const context = useContext(CounterContext);
  
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  
  return context;
};