'use client';
import { FormEvent, useRef } from 'react';
import styles from './Search.module.css';
import { useRouter } from 'next/router';
import { useLocalStorage } from '../../hooks';

export default function Search() {
  const router = useRouter();
  const [, setQuery] = useLocalStorage('query');

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
        defaultValue={router.query.search}
        data-testid="input"
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}
