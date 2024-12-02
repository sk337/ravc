import React, { useState, useCallback } from "react";
import superjson from "superjson";

if (typeof window === "undefined") {
  throw new Error(
    "useLocalStorage is a client-side hook and should not be used server-side."
  );
}

/**
 * A custom hook that synchronizes a state variable with localStorage.
 * @template T
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {T} initialValue - The initial value to use if the key is not found in localStorage.
 * @returns {UseLocalStorage<T>} A stateful value and a function to update it.
 */
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

  /**
   * Update localStorage whenever the state changes.
   * @param {React.SetStateAction<T>} value - The new value to store.
   */
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

/**
 * A type representing the return value of the useLocalStorage hook.
 * @template T
 * @typedef {Array} UseLocalStorage
 * @property {T} 0 - The current value.
 * @property {React.Dispatch<React.SetStateAction<T>>} 1 - The function to update the value.
 */
type UseLocalStorage<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export default useLocalStorage;
