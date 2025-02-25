import { createContext } from 'react';
import type { ThemeContextType } from 'src/types/types';

export const ThemeContext = createContext<ThemeContextType>(null);
