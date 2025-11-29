import { useEffect, useState } from "react";

export const useDelayedValue = <T>(value: T, delay = 1000) => {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    if (delay <= 0) {
      setDelayedValue(value);
      return;
    }

    const timerId = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [delay, value]);

  return delayedValue;
};
