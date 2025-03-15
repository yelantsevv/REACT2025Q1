import { createContext } from 'react';

type Context = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  local: 'en' | 'ru';
  toggleLocal: () => void;
};

export const Context = createContext({} as Context);
