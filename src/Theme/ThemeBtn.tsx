'use client';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeBtn({ className }: { className: string }) {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeProvider Error');
  const { theme, toggleTheme } = context;

  return (
    <button data-testid="theme-btn" className={className} onClick={toggleTheme}>
      {theme}
    </button>
  );
}
