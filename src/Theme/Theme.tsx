'use client';
import styles from './Theme.module.css';
import { useTheme } from './useTheme';

export default function Theme({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-testid="theme" className={styles[theme]}>
      <button
        data-testid="theme-btn"
        className={styles.themeBtn}
        onClick={toggleTheme}
      >
        {theme}
      </button>
      {children}
    </div>
  );
}
