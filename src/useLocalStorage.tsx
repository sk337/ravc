import React, { useState, useCallback } from "react";
import superjson from "superjson";

if (typeof window === "undefined") {
  throw new Error(
    "useLocalStorage is a client-side hook and should not be used server-side."
  );
}

type UseLocalStorage<T> = [T, React.Dispatch<React.SetStateAction<T>>];

function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorage<T> {
  // Retrieve the initial value from localStorage or fall back to the default
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? superjson.parse<T>(item) : initialValue;
    } catch (error) {
      console.error("Error parsing localStorage", error);
      return initialValue;
    }
  });

  // Update localStorage whenever the state changes
  const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        localStorage.setItem(key, superjson.stringify(valueToStore));
      } catch (error) {
        console.error("Error setting localStorage", error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
}

export default useLocalStorage;
