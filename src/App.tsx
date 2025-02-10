import { CardList, ErrorButton, Paginator, Search } from './components';
import styles from './App.module.css';
import { useLocalStorage, useTheme } from './hooks';
import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function App() {
  const navigate = useNavigate();
  const [query] = useLocalStorage('query');

  useEffect(() => {
    navigate(query);
    // eslint-disable-next-line
  }, []);

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles[theme]}>
      <button className={styles.themeBtn} onClick={toggleTheme}>
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
