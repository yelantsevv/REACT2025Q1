import { useEffect, useRef, useState } from 'react';
import { CardList, ErrorButton, Header } from './components';
import { getData, URL } from './api';
import { Person, State } from './types/types';
import styles from './App.module.css';
import { useLocalStorage } from './hooks/useLocaleStorage';
import { Outlet, useNavigate } from 'react-router';
export default function App() {
  const [valueStorage, setStorage] = useLocalStorage('search');
  const navigate = useRef(useNavigate());
  const [state, setState] = useState<State>({
    isLoading: true,
    results: [],
    pageLink: async (page: string) => {
      setState((prev) => ({ ...prev, isLoading: true }));
      const data = await getData<Person>(URL + page);
      setState((prev) => ({ ...prev, ...data, isLoading: false }));
      setStorage(page);
    },
  });

  const { pageLink } = state;
  useEffect(() => {
    pageLink(valueStorage);
    navigate.current(valueStorage);
  }, [pageLink, valueStorage]);

  return (
    <>
      <div className={styles.app}>
        <Header {...state} />
        <CardList {...state} />
        <ErrorButton />
      </div>
      <Outlet />
    </>
  );
}
