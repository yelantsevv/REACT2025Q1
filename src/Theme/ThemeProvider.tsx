import { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { useLocalStorage } from '../hooks';
import { Props, Theme } from '../types/types';

export const ThemeProvider = ({ children }: Props) => {
  const [storedTheme, setStoredTheme] = useLocalStorage('theme');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    if (storedTheme) {
      setTheme(storedTheme as Theme);
    }
  }, [storedTheme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        setStoredTheme(newTheme);
      }
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
