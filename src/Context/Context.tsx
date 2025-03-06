import { createContext } from 'react';

type Context = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  local: 'en' | 'ru';
  toggleLocal: () => void;
};

export const ThemeContext = createContext({} as Context);
