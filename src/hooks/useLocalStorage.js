import { useState, useEffect } from "react";

const useLocalStorage = (
  key1,
  initialValue1,
  key2,
  initialValue2,
  key3,
  initialValue3
) => {
  const [value1, setValue1] = useState(() => {
    const storedValue = localStorage.getItem(key1);
    return storedValue ? JSON.parse(storedValue) : initialValue1;
  });

  const [value2, setValue2] = useState(() => {
    const storedValue = localStorage.getItem(key2);
    return storedValue ? JSON.parse(storedValue) : initialValue2;
  });

  const [value3, setValue3] = useState(() => {
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
