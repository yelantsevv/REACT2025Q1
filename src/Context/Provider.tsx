import { useState } from 'react';
import { ThemeContext } from './Context';
// import s from './Theme.module.css';
import '../index.css';

type Theme = 'light' | 'dark';
type Props = {
  children: React.ReactNode;
};

export default function Theme({ children }: Props) {
  const [theme, setTheme] = useState<Theme>('light');
  const [local, setLocal] = useState<'ru' | 'en'>('en');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  const toggleLocal = () => {
    const newTheme = local === 'en' ? 'ru' : 'en';
    setLocal(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, local, toggleLocal }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
