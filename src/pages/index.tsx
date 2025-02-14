// import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from './App.module.css';
import { Search, Paginator, CardList, ErrorButton, About } from '../components';
import { useTheme } from '../hooks';
import { useRouter } from 'next/router';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  return (
    <div data-testid="theme" className={styles[theme] + ' ' + inter.variable}>
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
      {router.query.id && <About />}
    </div>
  );
}
