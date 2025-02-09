import { useContext } from 'react';
import { ThemeContext } from '../store/Theme/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeProvider Error');
  return context;
};
