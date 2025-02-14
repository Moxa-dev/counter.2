import { useCallback, useRef } from "react";

const useDebounce = (func: () => void, wait: number) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunc = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      func();
    }, wait);
  }, [func, wait]);

  return debouncedFunc;
};

export default useDebounce;