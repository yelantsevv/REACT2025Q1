import styles from './App.module.css';
import {
  Search,
  Paginator,
  CardList,
  ErrorButton,
  About,
  Selected,
  Spinner,
} from '../components';
import { useTheme } from '../hooks';
import { useRouter } from 'next/router';
import { getSearch } from '../store/api';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect, useState } from 'react';
import { HomeProps } from '../types/types';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const person = await getSearch(query);
  return { props: { person, people: person } };
}

export default function Home({ person, people }: HomeProps) {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const { choice } = useSelector((state: RootState) => state.choice);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, [router.events]);

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
          <Paginator key={router.asPath} {...person} />
        </div>
        {loading && (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        )}
        <CardList key={router.asPath} people={person} />
        <ErrorButton />
        {choice.length > 0 && <Selected />}
      </div>
      {router.query.id && <About people={people} />}
    </div>
  );
}
