'use client';
import { FormEvent, useEffect, useRef } from 'react';
import styles from './Search.module.css';
import { useLocalStorage } from '../../hooks';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Search() {
  const router = useRouter();
  const [query = '', setQuery] = useLocalStorage('query');
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || '';
  const queryParam = search || page ? `?search=${search}&page=${page}` : '';
  useEffect(() => {
    router.push(queryParam || query || '');
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value || '';
    setQuery(`?search=${inputValue}`);
    router.push(`?search=${inputValue}`);
  };

  return (
    <form
      data-testid="search"
      className={styles.search}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.input}
        type="text"
        ref={inputRef}
        placeholder="Search..."
        defaultValue={search}
        data-testid="input"
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}
