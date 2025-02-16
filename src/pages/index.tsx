import { Inter } from 'next/font/google';
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
import { Person, Results } from '../types/types';
import { GetServerSidePropsContext } from 'next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const person = await getSearch(query);
  return { props: { person } };
}
interface HomeProps {
  person: Person;
  people: Results;
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
      router.events.off('hashChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, [router]);

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
          <Paginator {...person} />
        </div>
        {loading && (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        )}
        <CardList people={person} />
        <ErrorButton />
        {choice.length > 0 && <Selected />}
      </div>
      {router.query.id && <About people={people} />}
    </div>
  );
}
