import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { useLocalStorage } from '../../hooks';
import { Props, Theme } from '../../types/types';

export const ThemeProvider = ({ children }: Props) => {
  const [value, setValue] = useLocalStorage('theme');
  const [theme, setTheme] = useState<Theme>((value as Theme) || 'light');

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      setValue(newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
