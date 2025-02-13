import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import styles from './App.module.css';
import { CardList, ErrorButton, Paginator, Search } from './components';
import { useLocalStorage, useTheme } from './hooks';

export default function App() {
  const navigate = useNavigate();
  const [query] = useLocalStorage('query');

  useEffect(() => {
    navigate(query);
    // eslint-disable-next-line
  }, []);

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
      <div className={styles.app}>
        <div className={styles.header}>
          <Search />
          <Paginator />
        </div>
        <CardList />
        <ErrorButton />
      </div>
      <Outlet />
    </div>
  );
}
