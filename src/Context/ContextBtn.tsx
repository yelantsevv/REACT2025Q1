import { useContext } from 'react';
import { Context } from './Context';
import s from './Theme.module.css';

export default function ThemeBtn() {
  const context = useContext(Context);
  if (!context) throw new Error('ThemeProvider Error');
  const { theme, toggleTheme, local, toggleLocal } = context;

  return (
    <div className={s.container}>
      <div className={s.local} onClick={toggleLocal}>
        {local === 'en' ? 'ru' : 'en'}
      </div>
      <div className={s.theme} onClick={toggleTheme}>
        {theme == 'dark' ? '🌝' : '🌚'}
      </div>
    </div>
  );
}
