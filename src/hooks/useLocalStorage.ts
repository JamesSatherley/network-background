import { useState, useEffect, Dispatch, SetStateAction } from "react";

const useLocalStorage = <T>(
  key1: string,
  initialValue1: T,
  key2: string,
  initialValue2: T,
  key3: string,
  initialValue3: T
): [
  T,
  Dispatch<SetStateAction<T>>,
  T,
  Dispatch<SetStateAction<T>>,
  T,
  Dispatch<SetStateAction<T>>
] => {
  const [value1, setValue1] = useState<T>(() => {
    const storedValue = localStorage.getItem(key1);
    return storedValue ? JSON.parse(storedValue) : initialValue1;
  });

  const [value2, setValue2] = useState<T>(() => {
    const storedValue = localStorage.getItem(key2);
    return storedValue ? JSON.parse(storedValue) : initialValue2;
  });

  const [value3, setValue3] = useState<T>(() => {
    const storedValue = localStorage.getItem(key3);
    return storedValue ? JSON.parse(storedValue) : initialValue3;
  });

  useEffect(() => {
    localStorage.setItem(key1, JSON.stringify(value1));
  }, [key1, value1]);

  useEffect(() => {
    localStorage.setItem(key2, JSON.stringify(value2));
  }, [key2, value2]);

  useEffect(() => {
    localStorage.setItem(key3, JSON.stringify(value3));
  }, [key3, value3]);

  return [value1, setValue1, value2, setValue2, value3, setValue3];
};

export default useLocalStorage;
