import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string) => {
  const isBrowser = typeof window !== 'undefined';
  const initialValue = isBrowser ? localStorage.getItem(key) : '';

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (isBrowser) {
      setValue(localStorage.getItem(key) || '');
    }
  }, [key]);

  useEffect(() => {
    if (isBrowser && value) {
      localStorage.setItem(key, value.trim());
    }
  }, [value, key]);

  return [value, setValue] as const;
};
