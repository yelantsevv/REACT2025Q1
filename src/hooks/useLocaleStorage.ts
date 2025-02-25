import { useEffect, useState } from 'react';
export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState(() => localStorage.getItem(key) || '');

  useEffect(() => {
    localStorage.setItem(key, value.trim());
  }, [key, value]);

  return [value, setValue] as const;
};
