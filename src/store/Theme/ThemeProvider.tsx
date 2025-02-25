import { useState } from 'react';
import type { Props, Theme } from 'src/types/types';
import { ThemeContext } from './ThemeContext';
// import { useLocalStorage } from '../../hooks';

export const ThemeProvider = ({ children }: Props) => {
  // const [value, setValue] = useLocalStorage('theme');
  // const [theme, setTheme] = useState<Theme>((value as Theme) || 'light');
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      // setValue(newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
