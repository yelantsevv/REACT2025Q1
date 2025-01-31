import { useEffect, useState } from 'react';
import { CardList, ErrorButton, Header } from './components';
import { getData, URL } from './api';
import { Person, State } from './types/types';
import styles from './App.module.css';

export default function App() {
  const [state, setState] = useState<State>({
    isLoading: true,
    results: [],
    onSearch: async () => ({}),
    pageLink: async () => ({}),
  });

  const onSearch = async (query: string) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    const data = await getData<Person>(`${URL}?search=${query}&page=1`);
    setState((prev) => ({ ...prev, ...data, isLoading: false }));
  };

  const pageLink = async (page: string) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    const data = await getData<Person>(page);
    setState((prev) => ({ ...prev, ...data, isLoading: false }));
  };

  useEffect(() => {
    setState((prev) => ({ ...prev, onSearch, pageLink }));
    onSearch(localStorage.getItem('search') ?? '');
  }, []);

  return (
    <div className={styles.app}>
      <Header {...state} />
      <CardList {...state} />
      <ErrorButton />
    </div>
  );
}
